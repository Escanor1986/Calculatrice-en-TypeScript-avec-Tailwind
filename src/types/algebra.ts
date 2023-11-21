import { fieldValue, operations } from "./interfaces";

// Factorial Logic
export function factorial(cadran: HTMLInputElement): void {
  const baseFactorial: number = parseFloat(cadran.value);

  function factorialNumber(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      return n * factorialNumber(n - 1);
    }
  }

  const result: number = factorialNumber(baseFactorial); // Appeler la fonction ici
  const stringValue: string = result.toString();
  cadran.value = stringValue;
}

export function baseSquare(cadran: HTMLInputElement): void {
  const baseSquare: number = parseFloat(cadran.value);
  const square: number = Math.pow(baseSquare, 2);
  cadran.value = square.toString();
}

export function baseCube(cadran: HTMLInputElement): void {
  const baseCube: number = parseFloat(cadran.value);
  const cube: number = Math.pow(baseCube, 3);
  cadran.value = cube.toString();
}

export function baseCubeRoot(cadran: HTMLInputElement): void {
  const baseCubeRoot: number = parseFloat(cadran.value);
  const cubeRoot: number = Math.cbrt(baseCubeRoot);
  cadran.value = cubeRoot.toString();
}

export function squareRoot(cadran: HTMLInputElement): void {
  const baseSquareRoot: number = parseFloat(cadran.value);
  const squareRoot: number = Math.sqrt(baseSquareRoot);
  cadran.value = squareRoot.toString();
}

export function percent(cadran: HTMLInputElement): void {
  const basePercent: number = parseFloat(cadran.value);
  const percent: number = basePercent / 100;
  cadran.value = percent.toString();
}

export function divide(cadran: HTMLInputElement): void {
  if (!cadran.value.length) {
    return;
  }
  
  fieldValue.current = cadran.value;
  cadran.value = "";
  operations.divide = true;

  for (const key in operations) {
    if (key !== "divide") {
      operations[key] = false;
    }
  }
}

export function multiply(cadran: HTMLInputElement): void {
  if (!cadran.value.length) {
    return;
  }
  fieldValue.current = cadran.value;
  cadran.value = "";
  operations.multiply = true;
  for (const key in operations) {
    if (key !== "multiply") {
      operations[key] = false;
    }
  }
}

export function minus(cadran: HTMLInputElement): void {
  if (!cadran.value.length) {
    return;
  }
  fieldValue.current = cadran.value;
  cadran.value = "";
  operations.minus = true;
  for (const key in operations) {
    if (key !== "minus") {
      operations[key] = false;
    }
  }
}

export function plus(cadran: HTMLInputElement): void {
  if (!cadran.value.length) {
    return;
  }
  fieldValue.current = cadran.value;
  cadran.value = "";
  operations.plus = true;
  for (const key in operations) {
    if (key !== "plus") {
      operations[key] = false;
    }
  }
}
