import { fieldValue, operations } from "../types/interfaces";

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

function prepareOperation(
  cadran: HTMLInputElement,
  operation: keyof typeof operations,
): void {
  if (!cadran.value.length) return;

  fieldValue.current = cadran.value;
  cadran.value = "";

  for (const key in operations) {
    operations[key] = false;
  }
  operations[operation] = true;
}

export function divide(cadran: HTMLInputElement): void {
  prepareOperation(cadran, "divide");
}

export function multiply(cadran: HTMLInputElement): void {
  prepareOperation(cadran, "multiply");
}

export function minus(cadran: HTMLInputElement): void {
  prepareOperation(cadran, "minus");
}

export function plus(cadran: HTMLInputElement): void {
  prepareOperation(cadran, "plus");
}
