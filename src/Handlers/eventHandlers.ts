import * as Algebra from "../utils/algebra/algebra";
import * as Value from "../utils/value/value";
import * as Result from "../utils/result/result";
import { fieldValue, operations } from "../utils/types/interfaces";

let cadran = document.getElementById("cadran") as HTMLInputElement;

const valuesButton = document.querySelectorAll(".values");
const operationsButton = document.querySelectorAll(".operations");
const equal = document.getElementById("equal");

// Add comma to value for each group of three numbers
export const commaValue = () => {
  let cadranValue = cadran.value.replace(/,/g, ""); // Delete existing comma before couting
  let formattedValue = cadranValue.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Regex to add comma every three numbers
  cadran.value = formattedValue;
};

// Input logic
export const showValue = () => {
  cadran.addEventListener("input", (event) => {
    event.preventDefault();

    commaValue();
  });
};

// Click event logic
export const getValues = () => {
  valuesButton.forEach((element: HTMLElement) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();

      if (element.id === "equal") {
        operations.interuptor = false; // Out of Equal Loop
      }

      switch (element.id) {
        case "point":
          Value.point(cadran);
          break;
        case "random":
          Value.randomValue(cadran);
          break;
        case "changeSign":
          Value.changeSign(cadran);
          break;
        case "reset":
          cadran.value = "";
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
      }

      commaValue();
    });
  });
};

// Click event logic
export const makeOperations = () => {
  operationsButton.forEach((element: HTMLElement) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();

      if (element.id === "equal") {
        operations.interuptor = false; // Out of Equal Loop
      }

      // Algebric operation buttons
      switch (element.id) {
        case "square":
          Algebra.baseSquare(cadran);
          break;
        case "cube":
          Algebra.baseCube(cadran);
          break;
        case "factorial":
          Algebra.factorial(cadran);
          break;
        case "cubeRoot":
          Algebra.baseCubeRoot(cadran);
          break;
        case "squareRoot":
          Algebra.squareRoot(cadran);
          break;
        case "percent":
          Algebra.percent(cadran);
          break;
        case "divide":
          Algebra.divide(cadran);
          break;
        case "multiply":
          Algebra.multiply(cadran);
          break;
        case "minus":
          Algebra.minus(cadran);
          break;
        case "plus":
          Algebra.plus(cadran);
          break;
      }

      // Add comma to value
      commaValue();
    });
  });
};

// Equal logic for (divide, multiply, addition, minus)
export const equalClick = () => {
  equal.addEventListener("click", (event) => {
    event.preventDefault();

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

      Result.operation(cadran);
    }

    commaValue();
  });
};
