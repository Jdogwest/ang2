export interface gettedData {
  Analizy: {
    id_clienta: string;
    FIO: string;
    сontact_phone: number;
    date_birth: string;
    gender: string;
    height: number;
    id_introduction: string;
    visit_number: string;
    duration: number;
    units_measurement: string;
    id_employee: string;
    id_indicator: string;
    result: number;
    date: string;
    status: string;
    status_norma: string;
    title: string;
    lower_bound: number;
    upper_bound: number;
    id_analys: string;
    designation: string;
    validity_period: string;
  }[];
  Bolezni: {
    id_disease: string;
    name_disease: string;
    'Частота болезни': number;
    id_indicator: string;
    title: string;
    status_indicatora: string;
  }[];
}
