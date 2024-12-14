import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { gettedData } from '../interface/getted-data.interface';
import { ClientData } from './../interface/cliend-data.interface';

@Injectable({ providedIn: 'root' })
export class StoreService {
  private clientName: string = '';

  clientData: ClientData | undefined = undefined;

  constructor(private http: HttpClient) {}

  getClientDataWithName(name: string) {
    this.clientName = name;

    console.log(name);

    let newClientData = this.http.get('http://127.0.0.1:8000/' + name);

    newClientData.subscribe(
      (data: any) => (this.clientData = this.formatData(data))
    );

    console.log(this.clientData);
  }

  getClientData() {
    return this.clientData;
  }

  getClientName() {
    return this.clientName;
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
          result: [
            {
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
          if (item.name === element.designation) {
            clientData.analysis[index].result.push({
              parameter: element.title,
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
            result: [
              {
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
