// Captura o elemento onde os números serão exibidos
const output = document.getElementById("output");
for (let index = 10; index <= 100; index++) {
  const para = document.createElement("p");
  para.textContent = index;
  output.appendChild(para);
}
