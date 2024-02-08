import capitalize from "../fns/capitalize";

test('Capitalizes strings', () => {
    expect(capitalize('hello')).toBe('Hello');
})