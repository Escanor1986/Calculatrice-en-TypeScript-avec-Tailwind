import { fieldValue, operations } from "../types/interfaces";

// Tester result
export function operation(cadran: HTMLInputElement): void {
  const firstNumber = parseFloat(fieldValue.current);
  const secondNumber = parseFloat(fieldValue.second);
  let result: number | string;

  if (secondNumber === 0) {
    cadran.value = "Error";
    return;
  }

  if (operations.divide) {
    result = firstNumber / secondNumber;
  } else if (operations.multiply) {
    result = firstNumber * secondNumber;
  } else if (operations.plus) {
    result = firstNumber + secondNumber;
  } else if (operations.minus) {
    result = firstNumber - secondNumber;
  } else {
    result = "No operation selected";
  }

  cadran.value = result.toString();
}
