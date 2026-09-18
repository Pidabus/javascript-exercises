const jest2 = require('./jest2');

describe("sum", () => {
    test("adds 1 + 1 = 2", () => {
        expect(jest2.sum(1, 2)).toBe(3);
    });
    test("adds 1 + 0 = 1", () => {
        expect(jest2.sum(1, 0)).toBe(1);
    });
    test("adds -1 + 3 = 2", () => {
        expect(jest2.sum(-1, 3)).toBe(2);
    });
});

describe("subtract", () => {
    test("1 - 2 = -1", () => {
        expect(jest2.subtract(1, 2)).toBe(-1);
    });
});