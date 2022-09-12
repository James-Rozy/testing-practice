const functions = require("./functions");

test("capatalizes 'word'", () => {
  expect(functions.capatalize("word")).toBe("Word");
});
