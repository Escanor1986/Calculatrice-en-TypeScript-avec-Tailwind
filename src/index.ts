import "./style/style.css";

let cadran = document.getElementById("cadran") as HTMLInputElement; // Valeur affichée sur le cadran
const allButton = document.querySelectorAll("button");
const equal = document.getElementById("equal") as HTMLElement;

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

// Equal / result logic
function secondStepDivide(str: string): void {
  let tmp = str;
}

// Divide operator logic
function firstStepDivide(str: string): void {
  if (!cadran.value.length) {
    return;
  } else {
    let tmp = cadran.value;
  }
}

// Click event logic
const allValue = () => {
  allButton.forEach((element: HTMLElement) => {
    element.addEventListener("click", (event) => {
      event.preventDefault;
      switch (element.id) {
        // Numbers Buttons
        case "point":
          if (cadran.value.length === 0) {
            cadran.value += "0.";
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
          // divide(cadran.value);
          break;
      }
    });
  });
};

allValue();
