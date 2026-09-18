const sum = require('./jest1');

describe('add', () => {
    test('adds 1 + 2', () => {
        expect(sum(1, 2)).toBe(3);
    });
    test('adds -2 + 4', () => {
        expect(sum(-2, 4)).toBe(2);
    });
    test('adds 5 + 5', () => {
        expect(sum(5, 5)).toBe(10);
    });
    test('adds 5 + 0', () => {
        expect(sum(5, 0)).toBe(5);
    });
});