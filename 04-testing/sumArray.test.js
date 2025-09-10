const { sumArray } = require("../02-js-problems");

test("sumArray sums numbers", () => {
  expect(sumArray([1,2,3])).toBe(6);
  expect(sumArray([5,-2,7])).toBe(10);
});
