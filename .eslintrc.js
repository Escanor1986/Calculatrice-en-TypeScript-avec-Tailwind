module.exports = {
  parser: "@typescript-eslint/parser", // Spécifie le parser TypeScript pour ESLint
  extends: [
    "eslint:recommended", // Utilise les règles ESLint recommandées
    "plugin:@typescript-eslint/recommended", // Utilise les règles recommandées pour TypeScript
    "prettier/@typescript-eslint", // Intègre les règles de Prettier pour TypeScript
  ],
  parserOptions: {
    ecmaVersion: 2018, // Active des fonctionnalités ES2018 (peut être ajusté selon vos besoins)
    sourceType: "module", // Indique que votre code utilise les modules (ES6)
  },
  rules: {
    // Personnalisez les règles ici selon vos préférences
  },
};
