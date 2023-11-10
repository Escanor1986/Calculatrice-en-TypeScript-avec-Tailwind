import { describe, it, expect, suite, test } from "vitest";

import { baseSquare } from "./types/algebra";

suite("baseSquare", (test) => {
  test("devrait retourner le carré de la valeur fournie", () => {
    const inputElement = document.createElement("input");

    inputElement.value = "5";

    baseSquare(inputElement);

    if (inputElement.value !== "25") {
      throw new Error(
        "La valeur de l'élément input n'a pas été mise à jour correctement.",
      );
    }
  });
});
