from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime
import uvicorn
import sqlite3

class DiseaseData(BaseModel):
    id_disease: str
    Частота_болезни: int
    id_indicator: str
    difference: str

class ClientData(BaseModel):
    FIO: str

class RequestData(BaseModel):
    name_clienta: list[ClientData]
    saved_disease: list[DiseaseData]

# Подключиться к базе данных SQLite
conn = sqlite3.connect('./Interface3000bTest2.db')
cursor = conn.cursor()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200",
                   "http://5.35.4.74"],  # Разрешить только определённый источник
    allow_credentials=True,                  # Разрешить отправку cookie
    allow_methods=["*"],                     # Разрешить все HTTP методы (GET, POST, PUT и т.д.)
    allow_headers=["*"],                     # Разрешить все заголовки
)


@app.get("/patient/{name_client}")
async def root(name_client: str):
    # Первый запрос к базе данных
    query = f"select * from Клиент k    join Ведение v on k.id_clienta = v.id_clienta    join ПриемПоказатели pp on v.id_introduction = pp.id_introduction    join Показатели p on pp.id_indicator = p.id_indicator    join Анализы a on p.id_analys = a.id_analys where k.FIO LIKE '{name_client}'"
    cursor.execute(query)
    rows1 = cursor.fetchall()

    # Преобразовать данные первого запроса в список словарей
    data1 = []
    for row in rows1:
        data1.append(dict(zip([column[0] for column in cursor.description], row)))

    # Второй запрос к базе данных с использованием переменной
    query = f"WITH Result AS (    SELECT         bp.id_disease,         b.name_disease,         p.id_indicator,         p.title,        bp.status_indicatora    FROM Показатели p    JOIN БолезньПоказатель bp ON bp.id_indicator = p.id_indicator    JOIN Болезнь b ON bp.id_disease = b.id_disease    WHERE         bp.id_indicator IN (            SELECT pp.id_indicator             FROM Показатели p            JOIN ПриемПоказатели pp ON p.id_indicator = pp.id_indicator            join Ведение v on pp.id_introduction = v.id_introduction            join Клиент k on v.id_clienta = k.id_clienta            WHERE                (((pp.status_norma = 'Повышен') AND (bp.status_indicatora = 'Повышен') and (pp.status = 'Действителен'))                 OR ((pp.status_norma = 'Понижен') AND (bp.status_indicatora = 'Понижен') and (pp.status = 'Действителен')))                AND k.FIO = '{name_client}'        ))SELECT         r.id_disease,         r.name_disease,         COUNT(r.id_disease) OVER (PARTITION BY r.id_disease) AS 'Частота_болезни',        r.id_indicator,         r.title ,         r.status_indicatora FROM     Result r;"
    cursor.execute(query)
    rows2 = cursor.fetchall()

    # Преобразовать данные второго запроса в список словарей
    data2 = []
    for row in rows2:
        data2.append(dict(zip([column[0] for column in cursor.description], row)))

    # Третий запрос к базе данных
    query = f"select b.name_disease, bpp.date_save, bpp.number_matches, p.title, pp.status_norma from БолезньПриемПоказатель bpp  join Болезнь b on bpp.id_disease = b.id_disease join Показатели p on bpp.id_indicator = p.id_indicator join ПриемПоказатели pp on bpp.id_indicator = pp.id_indicator join Ведение v on pp.id_introduction = v.id_introduction  join Клиент k on v.id_clienta = k.id_clienta where k.FIO = '{name_client}' and bpp.id_introduction = pp.id_introduction and bpp.id_indicator = pp.id_indicator"
    cursor.execute(query)
    rows3 = cursor.fetchall()

    # Преобразовать данные третий запроса в список словарей
    data3 = []
    for row in rows3:
        data3.append(dict(zip([column[0] for column in cursor.description], row)))

    # Создать структуру с двумя результатами
    result = {
        "Analizy": data1, #Все данные, необходимые вывода в окно с анализами 
        "Bolezni": data2, #Все данные, необходимые вывода в окно с предположительные болезни
        "Save_data": data3  #Все данные, необходимые вывода в окно c сохраненными болезнями
    }

    return result



@app.post('/write_data')
async def save_data(data: RequestData):
    print(data)
    with sqlite3.connect('./Interface3000bTest2.db') as conn:
        cursor = conn.cursor()
        
        # Получаем id_clienta по FIO
        name_client = data.name_clienta[0].FIO
        cursor.execute("SELECT id_clienta FROM Клиент WHERE FIO = ?", (name_client,))
        id_clienta = cursor.fetchone()
        
        id_clienta = id_clienta[0]
        
        print(id_clienta)

        # Получаем id_introduction по id_clienta
        query = f"SELECT v.id_introduction FROM ПриемПоказатели pp join Ведение v on pp.id_introduction = v.id_introduction WHERE id_clienta = '{id_clienta}' and pp.status = 'Действителен' group by v.id_introduction"
        cursor.execute(query)
        id_introduction = cursor.fetchone()
        
        id_introduction = id_introduction[0]

        print(id_introduction)
        
        now = datetime.now()
        formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")  

        # Вставляем данные в таблицу БолезньПриемПоказатель
        for disease in data.saved_disease:
            cursor.execute("""
                INSERT INTO БолезньПриемПоказатель (date_save, id_introduction, id_indicator, id_disease, number_matches)
                VALUES (?, ?, ?, ?, ?)
            """, (formatted_date, id_introduction, disease.id_indicator, disease.id_disease, disease.Частота_болезни))
        
        conn.commit()

    return

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)