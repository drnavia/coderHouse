console.log("Bienvenido al ejercicio 01");
console.log("============================");
console.log("APP calculadora");
//ingresar
alert("Bienvenido a la app calculadora");
let n1 = Number(prompt("ingresa el primer numero:"));
let operador = prompt("ingresa el operador:");
let n2 = Number(prompt("ingresa el segundo numero:"));
let resultado = "sin resultado";
if (isNaN(n1) || isNaN(n2)) {
  alert("Error en los datos ingresados");
  document.write("Error en los datos ingresados");
} else {
  if (operador == "-") resultado = n1 - n2;
  else if (operador == "+") resultado = n1 + n2;
  else if (operador == "/") resultado = n1 / n2;
  else if (operador == "*") resultado = n1 * n2;
  alert("El resultado es: " + resultado);
  document.write(n1 + operador + n2);
  document.write("=" + resultado);
}
