export interface ClientData {
  analysis: {
    name: string;
    status: 'Действителен' | 'Не действителен';
    date: string;
    result: {
      parameter: string;
      value: number;
      lower_limit: number;
      upper_limit: number;
      difference: 'Повышен' | 'Нормально' | 'Ниже нормы';
    }[];
  }[];
  current_diagnosis: {
    name: string;
    score: number;
    result: {
      parameter: string;
      difference: 'Повышен' | 'Нормально' | 'Ниже нормы';
    }[];
  }[];
  saved_diagnosis: {
    name: string;
    score: number;
    date: string;
    result: {
      parameter: string;
      difference: 'Повышен' | 'Нормально' | 'Ниже нормы';
    }[];
  }[];
}
