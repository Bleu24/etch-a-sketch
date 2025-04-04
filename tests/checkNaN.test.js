const checkNaN = require("./checkNaN");

test("Checks if num is NaN", () => {
    expect(checkNaN("3")).toBe(true);
});

test("Checks if num is not NaN", () => {
    expect(checkNaN(3)).toBe(false);
});