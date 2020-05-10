interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IParseTemplateMailDTO {
  file: string;
  variables: ITemplateVariables;
}
