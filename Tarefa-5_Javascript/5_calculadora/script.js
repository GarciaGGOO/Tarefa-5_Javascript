// Fazer um calculadora que receberá dois valores e a operação (+,-,*,/).
// Ao clicar no botão calcular o resultado é demonstrado.

const fatoresInput = document.querySelectorAll('input');
const select = document.querySelector('select');
const resultado = document.querySelector('.resultado');

const handleCalculate = () => {
  const primeiroFator = parseFloat(fatoresInput[0].value);
  const segundoFator = parseFloat(fatoresInput[1].value);
  const operacao = select.value;

  if (isNaN(primeiroFator) || isNaN(segundoFator)) {
    resultado.innerText = 'Erro';
    return;
  }

  let resultadoOperacao;

  switch (operacao) {
    case '+':
      resultadoOperacao = primeiroFator + segundoFator;
      break;
    case '-':
      resultadoOperacao = primeiroFator - segundoFator;
      break;
    case '*':
      resultadoOperacao = primeiroFator * segundoFator;
      break;
    case '/':
      resultadoOperacao = segundoFator !== 0 ? primeiroFator / segundoFator : 'Erro: divisão por zero';
      break;
    default:
      resultadoOperacao = 'Erro';
  }

  resultado.innerText = resultadoOperacao;
};

fatoresInput.forEach((elementoAtual) => {
  elementoAtual.addEventListener('input', handleCalculate);
});

select.addEventListener('input', handleCalculate);
