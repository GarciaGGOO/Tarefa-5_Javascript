// Crie uma variável que recebe o valor fixo 5. Mostre a tabuada desse número.

const numeroDaTabuada = 5;
const output = document.createElement("div");

for (let index = 1; index <= 10; index++) {
  const result = numeroDaTabuada * index;

  const para = document.createElement("p");
  para.textContent = `${numeroDaTabuada} x ${index} = ${result}`;

  output.appendChild(para);
}
document.body.appendChild(output);
