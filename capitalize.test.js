const capitalize = require("./capitalize");

test("capatalizes 'word'", () => {
  expect(capitalize("word")).toBe("Word");
});
