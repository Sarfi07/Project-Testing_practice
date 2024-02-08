export default function caesarCipher(str, shift) {
    let cipherText = ''

    for (let char of str) {
        let charCode = char.charCodeAt(0);

        if (charCode >= 65 && charCode <= 90) {
            cipherText = cipherText + String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        }
        else if (charCode >= 97 && charCode <= 122) {
            cipherText = cipherText + String.fromCharCode(((charCode - 97 + shift) % 26) + 97)
        }
        else  {
            cipherText = cipherText + char
        }
    }

    return cipherText;
}