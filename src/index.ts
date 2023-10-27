import "./style/style.css";

export function narcissistic(value: number): boolean {
  // your code here
  const str: string = value.toString();
  const strLength: number = str.split("").length;
  let total: number = 0;

  for (let i: number = 0; i < strLength; i++) {
    const result: number = Math.pow(parseInt(str[i]), strLength);
    total += result;
  }

  return total === value;
}

console.log(narcissistic(153));
console.log(narcissistic(1634));

const a: string = "Test";
const b: string = "Test b";

console.log(a, b);

abstract class Personne {
  constructor(public genre: string) {}
}

// Je définies explicitement un type aux constantes firstName et age
const firstName: string = "Thomas";
let age: number = 34;

// Je laisse TypeScript s'occuper de la déclaration du type pour moi
const lastName = "Dimnet";
let postCode = 75020;

// Je définis un type plus "complexe"
const friends: string[] = ["Alex", "Karl", "Ashley"];
const friendsAge: number[] = [31, 33, 29];

console.log(friends);
