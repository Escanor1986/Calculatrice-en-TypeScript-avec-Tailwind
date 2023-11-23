export const changeTheme = (): void => {
  const themeInput = document.getElementById("theme") as HTMLInputElement;

  applyTheme(themeInput.value || "3");

  themeInput.addEventListener("input", () => {
    const value = themeInput.value;
    applyTheme(value);
  });
};

const applyTheme = (themeValue: string): void => {
  const root = document.documentElement;

  switch (themeValue) {
    case "1":
      root.classList.add("theme-1");
      root.classList.remove("theme-2", "theme-3");
      break;
    case "2":
      root.classList.add("theme-2");
      root.classList.remove("theme-1", "theme-3");
      break;
    case "3":
      root.classList.add("theme-3");
      root.classList.remove("theme-1", "theme-2");
      break;
  }
};
