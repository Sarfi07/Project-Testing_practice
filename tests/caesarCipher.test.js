import caesarCipher from "../fns/caesarCipher";

test('Cipher test', () => {
    expect(caesarCipher('Hello', 1)).toBe('Ifmmp');
    expect(caesarCipher('Bye!', 2)).toBe('Dag!');
    expect(caesarCipher('@Ze', 3)).toBe('@Ch');
})