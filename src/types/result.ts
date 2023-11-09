import { fieldValue, operations } from "./interfaces";

export function operation(cadran: HTMLInputElement): void {
  // Divide logic
  if (operations.divide === true) {
    if (parseFloat(fieldValue.second) !== 0) {
      cadran.value = (
        parseFloat(fieldValue.current) / parseFloat(fieldValue.second)
      ).toString();
    } else {
      cadran.value = "Error";
    }

    // Multiply logic
  } else if (operations.multiply === true) {
    if (parseFloat(fieldValue.second) !== 0) {
      cadran.value = (
        parseFloat(fieldValue.current) * parseFloat(fieldValue.second)
      ).toString();
    } else {
      cadran.value = "Error";
    }
  }

  // Plus logic
  else if (operations.plus === true) {
    if (parseFloat(fieldValue.second) !== 0) {
      cadran.value = (
        parseFloat(fieldValue.current) + parseFloat(fieldValue.second)
      ).toString();
    } else {
      cadran.value = "Error";
    }

    // Minus logic
  } else if (operations.minus === true) {
    if (parseFloat(fieldValue.second) !== 0) {
      cadran.value = (
        parseFloat(fieldValue.current) - parseFloat(fieldValue.second)
      ).toString();
    } else {
      cadran.value = "Error";
    }
  }
}
