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
export declare const fieldValue: Value;
export declare const operations: Operations;
