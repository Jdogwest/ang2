import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { gettedData } from '../interface/getted-data.interface';
import {
  ClientCharacteristics,
  ClientData,
  formedSavedDiagnosis,
  savedDiagnosis,
} from './../interface/cliend-data.interface';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class StoreService {
  private clientName: string = '';

  messageService: MessageService = inject(MessageService);

  clientData: ClientData | undefined = undefined;
  clientCharacteristics: ClientCharacteristics | undefined = undefined;

  constructor(private http: HttpClient) {}

  getClientDataWithName(name: string) {
    this.clientName = name;

    let newClientData = this.http.get('http://127.0.0.1:8000/patient/' + name, {
      observe: 'response',
    });
    let subscription = newClientData.subscribe({
      next: (response: any) => {
        this.placeData(response.body); // Передаем только тело ответа в метод placeData
      },
      error: (error: any) => {
        this.messageService.sendError('Пациент не найден.');
      },
    });
  }

  clear() {
    this.clientData = undefined;
    this.clientCharacteristics = undefined;
    this.clientName = '';
    this.messageService.changeaState(false);
    this.messageService.sendMessage(false);
  }

  placeData(data: gettedData) {
    if (data.Analizy.length == 0)
      this.messageService.sendError('Пациент не имеет анализов.');
    this.clientData = this.formatData(data);
    this.clientCharacteristics = this.formatCharacteristics(data);
    this.messageService.changeaState(true);
  }

  getClientData() {
    return this.clientData;
  }

  getClientName() {
    return this.clientName;
  }

  getClientCharacteristics() {
    return this.clientCharacteristics;
  }

  addSavedDiagnosis(selectedItems: savedDiagnosis[]) {
    let formedItems: formedSavedDiagnosis[] = [];
    selectedItems.forEach((item) => {
      item.result.forEach((result) => {
        formedItems.push({
          id_disease: item.id_disease,
          'Частота болезни': item.score,
          id_indicator: result.id_indicator,
          difference: result.difference,
        });
      });
    });

    let finalData = {
      name_clienta: [
        {
          FIO: this.clientName,
        },
      ],
      saved_disease: formedItems,
    };

    this.http
      .post('http://127.0.0.1:8000/write_data', finalData)
      .subscribe()
      .unsubscribe();

    this.getClientDataWithName(this.clientName);
  }

  formatCharacteristics(data: gettedData): ClientCharacteristics | undefined {
    let clientCharacteristics: ClientCharacteristics | undefined = undefined;

    clientCharacteristics = {
      dateOfBirth: data.Analizy[0].date_birth,
      gender: data.Analizy[0].gender,
      height: data.Analizy[0].height,
    };
    return clientCharacteristics;
  }

  private formatData(data: gettedData): ClientData | undefined {
    let clientData: ClientData | undefined = undefined;

    clientData = {
      analysis: [
        {
          name: data.Analizy[0].designation,
          status: data.Analizy[0].status,
          date: data.Analizy[0].date,
          result: [
            {
              parameter: data.Analizy[0].title,
              unit: data.Analizy[0].units_measurement,
              value: data.Analizy[0].result,
              lower_limit: data.Analizy[0].lower_bound,
              upper_limit: data.Analizy[0].upper_bound,
              difference: data.Analizy[0].status_norma,
            },
          ],
        },
      ],
      current_diagnosis: [
        {
          name: data.Bolezni[0].name_disease,
          score: data.Bolezni[0]['Частота болезни'],
          id_disease: data.Bolezni[0].id_disease,
          result: [
            {
              id_indicator: data.Bolezni[0].id_indicator,
              parameter: data.Bolezni[0].title,
              difference: data.Bolezni[0].status_indicatora,
            },
          ],
        },
      ],
      saved_diagnosis: [],
    };

    let check: boolean = false;

    data.Analizy.forEach((element) => {
      if (check === true) {
        let new_analys: boolean = true;
        clientData.analysis.forEach((item, index) => {
          if (item.name === element.designation && item.date === element.date) {
            clientData.analysis[index].result.push({
              parameter: element.title,
              unit: element.units_measurement,
              value: element.result,
              lower_limit: element.lower_bound,
              upper_limit: element.upper_bound,
              difference: element.status_norma,
            });
            new_analys = false;
          }
        });

        if (new_analys === true) {
          clientData.analysis.push({
            name: element.designation,
            status: element.status,
            date: element.date,
            result: [
              {
                parameter: element.title,
                unit: element.units_measurement,
                value: element.result,
                lower_limit: element.lower_bound,
                upper_limit: element.upper_bound,
                difference: element.status_norma,
              },
            ],
          });
        }
      }

      check = true;
    });

    data.Bolezni.forEach((element) => {
      if (check === true) {
        let new_analys: boolean = true;
        clientData.current_diagnosis.forEach((item, index) => {
          if (item.name === element.name_disease) {
            clientData.current_diagnosis[index].result.push({
              id_indicator: element.id_indicator,
              parameter: element.title,
              difference: element.status_indicatora,
            });
            new_analys = false;
          }
        });

        if (new_analys === true) {
          clientData.current_diagnosis.push({
            name: element.name_disease,
            score: element['Частота болезни'],
            id_disease: element.id_disease,
            result: [
              {
                id_indicator: element.id_indicator,
                parameter: element.title,
                difference: element.status_indicatora,
              },
            ],
          });
        }
      }

      check = true;
    });

    return clientData;
  }
}
