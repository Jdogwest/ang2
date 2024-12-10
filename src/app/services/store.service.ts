import { Injectable } from '@angular/core';
import { ClientData } from '../interface/cliend-data.interface';
import { clientDataTest } from '../default-data/client-data-test';

@Injectable({ providedIn: 'root' })
export class StoreService {
  private clientName: string = '';

  clientData: ClientData | undefined = clientDataTest;

  constructor() {}

  getClientDataWithName(name: string) {
    this.clientName = name;

    //somehow get client data
    this.clientData = undefined;
  }

  getClientData() {
    return this.clientData;
  }

  getClientName() {
    return this.clientName;
  }
}
