// input
const operator = prompt('Masukan operator ( salah satu dari: +,-,* atau /):');

const number1 = parseFloat(prompt('Masukan angka pertama:'));
const number2 = parseFloat(prompt('Masukan angka ke dua:')); 

let result;
// mwnggunakan if 
if (operator == '+') {
    result = number1 + number2
}
if (operator == '-') {
    result = number1 - number2
}
if (operator == '*') {
    result = number1 * number2
}
if (operator == '/') {
    result = number1 / number2
}

document.writeln(`${number1} ${operator} ${number2} = ${result}`);