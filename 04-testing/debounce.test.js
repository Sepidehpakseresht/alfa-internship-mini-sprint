jest.useFakeTimers();
const { debounce } = require("../02-js-problems");

test("debounce executes after delay", () => {
  const fn = jest.fn();
  const d = debounce(fn, 200);
  d(); d(); d(); // only last should run
  expect(fn).not.toBeCalled();
  jest.advanceTimersByTime(199);
  expect(fn).not.toBeCalled();
  jest.advanceTimersByTime(1);
  expect(fn).toBeCalledTimes(1);
});
