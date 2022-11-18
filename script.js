let NumberOne = prompt("Digite o primeiro número: ")
let NumberTwo = prompt("Digite o segundo número: ")

NumberOne = Number(NumberOne);
NumberTwo = Number(NumberTwo);

const sum = NumberOne + NumberTwo;
alert('A soma entre os dois números é: ' + sum);
const restDiv = sum % 2;
if (restDiv == 0) {
  alert(`E o número ${sum} é par.`)
} else {
  alert(`E o número ${sum} é impar.`)
};
const sub = NumberOne - NumberTwo;
alert('A subtração entre os dois números é: ' + sub);
const multi = NumberOne * NumberTwo;
alert('A multiplação entre os dois números é: ' + multi);
const div = NumberOne / NumberTwo;
alert('A divisão entre os dois números é: ' + div.toFixed(2));

if (NumberOne == NumberTwo) {
  alert('Os números inseridos são iguais.')
} else {
  alert('Os números inseridos são diferentes.')
};