import calculator from "../fns/calculator";

test('Calculator Operations: add', () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.add(222, 0)).toBe(222);
    expect(calculator.add(0, 0)).toBe(0);
})

test('Calculator Operations: subtract', () => {
    expect(calculator.subtract(2, 2)).toBe(0);
    expect(calculator.subtract(234, 34)).toBe(200);
    expect(calculator.subtract(2, 5)).toBe(-3);
})

test('Calculator Operations: multiply', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
    expect(calculator.multiply(24, 24)).toBe(576);
})

test('Calculator Operations: divide', () => {
    expect(calculator.divide(3, 0)).toBe('Cannot divide by zero');
    expect(calculator.divide(25, 5)).toBe(5);
})