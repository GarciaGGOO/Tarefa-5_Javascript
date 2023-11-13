// Percorra o array [1,2,3,4,5,6,7,8,9,10] e exiba apenas os valores pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter(numero => numero % 2 === 0);

const output = document.createElement('div');

numerosPares.forEach((numeroPar) => {
  const para = document.createElement('p');
  para.textContent = `${numeroPar} é par`;
  output.appendChild(para);
});

document.body.appendChild(output);