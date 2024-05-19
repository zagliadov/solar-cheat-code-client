export enum IFormField {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  EMAIL = "email",
  PASSWORD = "password",
}

export interface ISignUpData {
  [IFormField.FIRST_NAME]: string;
  [IFormField.LAST_NAME]: string;
  [IFormField.EMAIL]: string;
  [IFormField.PASSWORD]: string;
}

export interface ISignInData {
  [IFormField.EMAIL]: string;
  [IFormField.PASSWORD]: string;
}

export interface ISubscription {
  title: string;
  description: string[];
  price: string;
}