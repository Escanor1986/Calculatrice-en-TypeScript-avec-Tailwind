//
const { JSDOM } = require("jsdom");
const { Environment } = require("vitest");

class CustomEnvironment extends Environment {
  async setup() {
    const jsdom = new JSDOM("<!doctype html><html><body></body></html>", {
      url: "http://localhost",
    });
    global.document = jsdom.window.document;
    global.window = jsdom.window;
    global.navigator = { userAgent: "node.js" };
    copyProps(window, global);

    // ... ajouter d'autres propriétés globales si nécessaire
  }

  async teardown() {
    // ... nettoyer l'environnement si nécessaire
  }
}

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter((prop) => typeof target[prop] === "undefined")
    .map((prop) => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

module.exports = CustomEnvironment;
