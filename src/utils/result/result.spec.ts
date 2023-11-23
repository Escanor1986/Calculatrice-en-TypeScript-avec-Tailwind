import { describe, it, expect, beforeEach, vi } from "vitest";
import { operation } from "./result";
import { fieldValue, operations } from "../types/interfaces";

describe("operation function", () => {
  let cadran: HTMLInputElement;

  beforeEach(() => {
    // Dom initialisation
    document.body.innerHTML = '<input id="cadran" type="text" />';
    cadran = document.getElementById("cadran") as HTMLInputElement;

    // values & operations initialisation
    fieldValue.current = "0";
    fieldValue.second = "0";
    for (const key in operations) {
      operations[key] = false;
    }
  });

  it("should divide two numbers correctly", () => {
    // Test environment
    fieldValue.current = "8";
    fieldValue.second = "2";
    operations.divide = true;

    // Test execution
    operation(cadran);

    // Check result
    expect(cadran.value).toBe("4");
  });

  // Répétez pour les autres opérations: multiply, plus, minus...
});
