import { describe, it, expect } from "vitest";
import {
  baseSquare,
  factorial,
  divide,
  multiply,
  minus,
  plus,
} from "./algebra";
import * as interfaces from "../types/interfaces";

describe("Algebra operations", () => {
  let cadran: HTMLInputElement;

  beforeEach(() => {
    // For initialisation of "cadran" before each test (it)
    cadran = document.createElement("input");
  });

  it("baseSquare should return the square of the provided value", () => {
    cadran.value = "4";
    baseSquare(cadran);
    expect(cadran.value).toBe("16");
  });

  it("factorial should return the factorial of the input value", () => {
    cadran.value = "4";
    factorial(cadran);
    expect(cadran.value).toBe("24");
  });

  it("divide should set the current input value, reset it, set the divide operation to true, and all other operations to false", () => {
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
});
