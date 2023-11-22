// tester la fonction
export function changeSign(cadran: HTMLInputElement): void {
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

export function point(cadran: HTMLInputElement): void {
  if (cadran.value.includes(".")) {
    return;
  } else {
    if (cadran.value.length === 0) {
      cadran.value += "0.";
    } else if (cadran.value.length > 0) {
      cadran.value += ".";
    }
  }
}

export function randomValue(cadran: HTMLInputElement): void {
  let randomNumber: number = Math.floor(Math.random() * 10);
  cadran.value = cadran.value + randomNumber.toString();
}
