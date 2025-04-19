import { get_number, print } from "./apelidos.js";


function main() {
  let num1 = get_number("DIGITE SEU PRIMEIRO NUMERO: ");
  let num2 = get_number("DIGITE SEU SEGUNDO NUMERO: ");

  let resultadoMDC = mdc(num1,num2)
  let resultadoMMC = mmc(num1, num2,resultadoMDC);
  print(`
      NUMERO 01 = ${num1}
      NUMERO 02 = ${num2}
      MDC = ${resultadoMDC}
      MMC = ${resultadoMMC}
  `)
}
function mdc(a, b) {
  while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}
function mmc(a, b,mdc) {
  return a * (b / mdc);
}

main();
