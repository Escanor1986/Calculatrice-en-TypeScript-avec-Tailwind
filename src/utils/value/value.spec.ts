import { describe, it, expect, beforeEach } from "vitest";
import { changeSign } from "./value";

describe("changeSign function", () => {
  let cadran: HTMLInputElement;

  beforeEach(() => {
    // Set up document body
    document.body.innerHTML = `<input id="cadran" type="text" class="text-blue-500" />`;
    cadran = document.getElementById("cadran") as HTMLInputElement;
  });

  it("should prefix the input value with a negative sign if it's positive", () => {
    cadran.value = "5";
    changeSign(cadran);
    expect(cadran.value).toBe("-5");
    expect(cadran.classList.contains("text-red-500")).toBe(true);
    expect(cadran.classList.contains("text-blue-500")).toBe(false);
  });

  it("should set the input value to '-' if it's empty", () => {
    cadran.value = "";
    changeSign(cadran);
    expect(cadran.value).toBe("-");
    expect(cadran.classList.contains("text-red-500")).toBe(true);
  });

  it("should remove the negative sign if it's already prefixed", () => {
    cadran.value = "-5";
    changeSign(cadran);
    expect(cadran.value).toBe("5");
    expect(cadran.classList.contains("text-red-500")).toBe(false);
    expect(cadran.classList.contains("text-blue-500")).toBe(true);
  });
});
