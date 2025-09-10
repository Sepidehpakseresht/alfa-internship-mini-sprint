const { uniqueValues } = require("../02-js-problems");

test("uniqueValues keeps order and deduplicates", () => {
  expect(uniqueValues([1,1,2,3,2,4])).toEqual([1,2,3,4]);
});
