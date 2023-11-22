// propriété "globals" set à true pour éviter l'import ci-dessous...
// import { describe, it, expect, suite, test } from "vitest";

import { baseSquare, factorial, divide } from "./algebra";
// import { operations } from "./types/result";
import * as interfaces from "../types/interfaces";

// refactoriser ==> fr -> en, it (au lieu de test)
describe("algebra", () => {
  const cadran = document.createElement("input") as HTMLInputElement;

  test("BaseSquare devrait retourner le carré de la valeur fournie", () => {
    cadran.value = "4";
    baseSquare(cadran);
    expect(cadran.value).toBe("16");
  });

  test("Factorial devrait retourner la factorielle de la valeur fournie dans l'input", () => {
    cadran.value = "4";
    factorial(cadran);
    expect(cadran.value).toBe("24");
  });

  test('divide devrait enregistrer la valeur actuelle de l\'input, \n la réinitialiser à "", \n set la propriété opérationnelle divide à true, \n et la valeur de [key] à false', () => {
    cadran.value = "4";
    divide(cadran);
    expect(interfaces.fieldValue.current).toBe("4");
    expect(cadran.value).toBe("");
    expect(interfaces.operations.divide).toBe(true);

    for (const key in interfaces.operations) {
      if (key !== "divide") {
        expect(interfaces.operations[key]).toBe(false);
      }
    }
  });

  // Reste le click sur "equal" à tester
});
