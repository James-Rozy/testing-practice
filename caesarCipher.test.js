const caesarCipher = require("./caesarCipher");

test("Correctly performs caesar cipher shift", () => {
  expect(caesarCipher.caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});
