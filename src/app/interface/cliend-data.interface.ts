export interface ClientData {
  analysis: {
    name: string;
    status: string;
    date: string;
    result: {
      parameter: string;
      unit: string;
      value: number;
      lower_limit: number;
      upper_limit: number;
      difference: string;
    }[];
  }[];
  current_diagnosis: {
    name: string;
    score: number;
    id_disease: string;
    result: {
      id_indicator: string;
      parameter: string;
      difference: string;
    }[];
  }[];
  saved_diagnosis: {
    name: string;
    score: number;
    date: string;
    result: {
      parameter: string;
      difference: string;
    }[];
  }[];
}

export interface ClientCharacteristics {
  dateOfBirth: string;
  gender: string;
  height: number;
}

export interface savedDiagnosis {
  name: string;
  score: number;
  id_disease: string;
  result: {
    id_indicator: string;
    parameter: string;
    difference: string;
  }[];
}
export interface formedSavedDiagnosis {
  id_disease: string;
  'Частота болезни': number;
  id_indicator: string;
  difference: string;
}
