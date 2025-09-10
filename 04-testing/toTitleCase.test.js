const { toTitleCase } = require("../02-js-problems");

test("toTitleCase transforms string", () => {
  expect(toTitleCase("hello world")).toBe("Hello World");
  expect(toTitleCase("JAVASCRIPT rockS")).toBe("Javascript Rocks");
});
