export interface ClientData {
  analysis: {
    name: string;
    status: string;
    date: string;
    result: {
      parameter: string;
      value: number;
      lower_limit: number;
      upper_limit: number;
      difference: string;
    }[];
  }[];
  current_diagnosis: {
    name: string;
    score: number;
    result: {
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
