import { ClientData } from '../interface/cliend-data.interface';

export const clientDataTest: ClientData = {
  analysis: [
    {
      name: 'Имя анализа',
      status: 'Действителен',
      date: '01.01.2000',
      result: [
        {
          parameter: 'Имя параметра',
          unit: 'Ед. измерения',
          value: 10.0,
          lower_limit: 9.9,
          upper_limit: 10.1,
          difference: 'Нормально',
        },
        {
          parameter: 'Имя параметра 2',
          unit: 'Ед. измерения',
          value: 10.0,
          lower_limit: 9.9,
          upper_limit: 10.1,
          difference: 'Нормально',
        },
      ],
    },
    {
      name: 'Кровь',
      status: 'Не действителен',
      date: '01.01.2099',
      result: [
        {
          parameter: 'Имя параметра',
          unit: 'Ед. измерения',
          value: 15.2,
          lower_limit: 9.9,
          upper_limit: 10.1,
          difference: 'Повышен',
        },
        {
          parameter: 'Имя параметра 2',
          unit: 'Ед. измерения',
          value: 8.0,
          lower_limit: 9.9,
          upper_limit: 10.1,
          difference: 'Ниже нормы',
        },
      ],
    },
    {
      name: 'Слюни',
      status: 'Действителен',
      date: '01.01.1999',
      result: [
        {
          parameter: 'Имя параметра',
          unit: 'Ед. измерения',
          value: 10.0,
          lower_limit: 9.9,
          upper_limit: 10.1,
          difference: 'Нормально',
        },
        {
          parameter: 'Имя параметра 2',
          unit: 'Ед. измерения',
          value: 10.0,
          lower_limit: 9.9,
          upper_limit: 10.1,
          difference: 'Нормально',
        },
      ],
    },
    {
      name: 'Имя анализа 2',
      status: 'Не действителен',
      date: '01.01.2000',
      result: [
        {
          parameter: 'Имя параметра',
          unit: 'Ед. измерения',
          value: 10.0,
          lower_limit: 9.9,
          upper_limit: 10.1,
          difference: 'Нормально',
        },
        {
          parameter: 'Имя параметра 2',
          unit: 'Ед. измерения',
          value: 10.0,
          lower_limit: 9.9,
          upper_limit: 10.1,
          difference: 'Нормально',
        },
      ],
    },
  ],
  current_diagnosis: [
    {
      name: 'Имя диагноза',
      score: 10,
      id_disease: 'id',
      result: [
        {
          id_indicator: 'id',
          parameter: 'Имя параметра',
          difference: 'Ниже нормы',
        },
        {
          id_indicator: 'id',
          parameter: 'Имя параметра 2',
          difference: 'Ниже нормы',
        },
      ],
    },
    {
      name: 'Имя диагноза 2',
      score: 7,
      id_disease: 'id',
      result: [
        {
          id_indicator: 'id',
          parameter: 'Имя параметра 3',
          difference: 'Повышен',
        },
        {
          id_indicator: 'id',
          parameter: 'Имя параметра 2',
          difference: 'Ниже нормы',
        },
      ],
    },
  ],
  saved_diagnosis: [
    {
      name: 'Имя диагноза 2',
      score: 7,
      date: '01.01.2000',
      result: [
        {
          parameter: 'Имя параметра',
          difference: 'Ниже нормы',
        },
        {
          parameter: 'Имя параметра 2',
          difference: 'Ниже нормы',
        },
      ],
    },
    {
      name: 'Имя диагноза 4',
      score: 2,
      date: '01.01.2000',
      result: [
        {
          parameter: 'Имя параметра 3',
          difference: 'Повышен',
        },
        {
          parameter: 'Имя параметра 2',
          difference: 'Ниже нормы',
        },
      ],
    },
  ],
};
