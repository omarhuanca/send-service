import baseTemplate from './baseTemplate';

export const getTemplate = (name: string, params: any): string => {
  let response;

  switch (name) {
    case 'baseTemplate':
      response = baseTemplate(params);
      break;
    default:
      response = 'DEFAULT';
    break;
  }

  return response;
};
