export interface Value {
  current: string;
  second: string;
  result: string;
}

export interface Operations {
  [key: string]: boolean;
  plus: boolean;
  minus: boolean;
  divide: boolean;
  multiply: boolean;
  interuptor: boolean;
}

export const fieldValue: Value = {
  current: "",
  second: "",
  result: "",
};

export const operations: Operations = {
  plus: false,
  minus: false,
  divide: false,
  multiply: false,
  interuptor: false,
};
