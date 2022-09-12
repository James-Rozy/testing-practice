const reverseString = require("./reverseString");

test("Reverses the string 'word'", () => {
  expect(reverseString("word")).toBe("drow");
});
