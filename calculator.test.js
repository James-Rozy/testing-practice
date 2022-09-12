const calculator = require("./calculator");

test("Can add: 1 + 2 = 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Can subtract: 5 - 2 = 3", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test("Can add: 1 / 2 = 0.5", () => {
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
});

test("Can add: 2 * 2 = 4", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});
