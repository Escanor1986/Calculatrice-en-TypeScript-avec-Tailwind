// propriété "globals" set à true pour éviter l'import ci-dessous...
// import { describe, it, expect, suite, test } from "vitest";

import { baseSquare, factorial, divide } from "./algebra";
// import { operations } from "./types/result";
import * as interfaces from "./interfaces";

describe("Algebra Unit Test Suites", () => {
  const cadran = document.createElement("input") as HTMLInputElement;

  it("should return the square of 4 (16)", () => {
    cadran.value = "4";
    baseSquare(cadran);
    expect(cadran.value).toBe("16");
  });

  it("should return the factoriel of 4 (24)", () => {
    cadran.value = "4";
    factorial(cadran);
    expect(cadran.value).toBe("24");
  });

  it('divide devrait enregistrer la valeur actuelle de l\'input, \n la réinitialiser à "", \n set la propriété opérationnelle divide à true, \n et la valeur de [key] à false', () => {
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
