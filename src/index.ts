import "./style/style.css";

import { Value } from './types'


let cadran = document.getElementById("cadran") as HTMLInputElement; // Valeur affichée sur le cadran
const allButton = document.querySelectorAll("button");
const equal = document.getElementById("equal");

// Factorial Logic
function factorial(n: number): number {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Sign changing logic
function changeSign(str: string): void {
  if (cadran.value.length > 0 && !cadran.value.startsWith("-")) {
    if (parseFloat(cadran.value) >= 0) {
      cadran.value = "-" + cadran.value;
      document.getElementById("cadran").classList.add("text-red-500");
    }
  } else if (cadran.value.length === 0) {
    cadran.value = "-";
    document.getElementById("cadran").classList.add("text-red-500");
  } else {
    let tmp: string = cadran.value.replace("-", "");
    cadran.value = tmp;
    document.getElementById("cadran").classList.remove("text-red-500");
    document.getElementById("cadran").classList.add("text-blue-500");
  }
}

interface Operations {
  [key: string]: boolean;
  plus: boolean;
  minus: boolean;
  divide: boolean;
  multiply: boolean;
  interuptor: boolean;
}

const fieldValue: Value = {
  current: "",
  second: "",
  result: "",
};

const operations: Operations = {
  plus: false,
  minus: false,
  divide: false,
  multiply: false,
  interuptor: false,
};

// Click event logic
const getValue = () => {
  allButton.forEach((element: HTMLElement) => {
    element.addEventListener("click", (event) => {
      event.preventDefault;

      if (element.id === "equal") {
        operations.interuptor = false; // Out of Equal Loop
      }

      switch (element.id) {
        // Numbers Buttons
        case "point":
          if (cadran.value.includes(".")) {
            return;
          } else {
            if (cadran.value.length === 0) {
              cadran.value += "0.";
            } else if (cadran.value.length > 0) {
              cadran.value += ".";
            }
          }
          break;
        case "random": // random number between 1 and 9
          let randomNumber: number = Math.floor(Math.random() * 10);
          cadran.value = cadran.value + randomNumber.toString();
          break;
        case "zero":
          cadran.value += "0";
          break;
        case "one":
          cadran.value += "1";
          break;
        case "two":
          cadran.value += "2";
          break;
        case "three":
          cadran.value += "3";
          break;
        case "four":
          cadran.value += "4";
          break;
        case "five":
          cadran.value += "5";
          break;
        case "six":
          cadran.value += "6";
          break;
        case "seven":
          cadran.value += "7";
          break;
        case "eight":
          cadran.value += "8";
          break;
        case "nine":
          cadran.value += "9";
          break;

        // Operation buttons
        case "square":
          const baseSquare: number = parseFloat(cadran.value);
          const square: number = Math.pow(baseSquare, 2);
          cadran.value = square.toString();
          break;
        case "cube":
          const baseCube: number = parseFloat(cadran.value);
          const cube: number = Math.pow(baseCube, 3);
          cadran.value = cube.toString();
          break;
        case "factorial":
          const baseFactorial: number = parseFloat(cadran.value);
          const value: number = factorial(baseFactorial);
          const stringValue: string = value.toString();
          cadran.value = stringValue;
          break;
        case "cubeRoot":
          const baseCubeRoot: number = parseFloat(cadran.value);
          const cubeRoot: number = Math.cbrt(baseCubeRoot);
          cadran.value = cubeRoot.toString();
          break;
        case "squareRoot":
          const baseSquareRoot: number = parseFloat(cadran.value);
          const squareRoot: number = Math.sqrt(baseSquareRoot);
          cadran.value = squareRoot.toString();
          break;
        case "changeSign":
          changeSign(cadran.value);
          break;
        case "reset":
          cadran.value = "";
          break;
        case "percent":
          const basePercent: number = parseFloat(cadran.value);
          const percent: number = basePercent / 100;
          cadran.value = percent.toString();
          break;
        case "divide":
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
          break;
        case "multiply":
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
          break;
        case "minus":
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
          break;
        case "plus":
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
          break;
      }
    });
  });
};

// Equal logic for (divide, multiply, addition, minus)
const equalClick = () => {
  equal.addEventListener("click", (event) => {
    event.preventDefault;

    operations.interuptor = true;

    if (!operations.interuptor) {
      for (const key in operations) {
        if (key !== "interuptor") {
          operations[key] = false;
        }
      }
    }

    // Check if existing value
    if (fieldValue.current.length > 0) {
      fieldValue.second = cadran.value;

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
  });
};

getValue();
equalClick();
