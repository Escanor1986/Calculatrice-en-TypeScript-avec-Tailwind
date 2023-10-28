import "./style/style.css";

let cadran = document.getElementById("cadran") as HTMLInputElement; // Valeur affichée sur le cadran
const allButton = document.querySelectorAll("button");
const resetCadran = document.getElementById("reset");

const reset = () => {
  resetCadran.addEventListener("click", (event) => {
    event.preventDefault;
    cadran.value = "";
  });
};

const allValue = () => {
  allButton.forEach((element: HTMLElement) => {
    element.addEventListener("click", (event) => {
      event.preventDefault;
      switch (element.id) {
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
    });
  });
};

allValue();
reset();
// function getValue()
