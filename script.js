// input bilangan dan operator
const operator = prompt('Masukan operator ( salah satu dari: +, -, * dan / )');
const number1 = parseFloat(prompt('Masukan angka pertama:'));
const number2 = parseFloat(prompt('Masukan angka ke dua:')); 

let result;
// operasi bilangan
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

// hasil operasi bilangan
document.writeln(`${number1} ${operator} ${number2} = ${result}`);