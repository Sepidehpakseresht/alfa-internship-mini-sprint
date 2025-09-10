const { validateEmail } = require("../02-js-problems");

test("validateEmail basic cases", () => {
  expect(validateEmail("a@b.com")).toBe(true);
  expect(validateEmail("bad@x")).toBe(false);
});
