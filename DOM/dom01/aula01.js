let contador = 0;

// 1. Seleciona os elementos no HTML
const botao = document.getElementById("btn");
const valor = document.getElementById("valor_contador");

valor.textContent = "Comece a contar!"

// 2. Adiciona o evento de clique no botão
botao.addEventListener("click", function() {
  // Incrementa a variável
  contador++; 
  
  // Atualiza o texto exibido no HTML
  valor.textContent = contador;
  if(contador <= 5){
    valor.textContent = "Você está começando!";
  }
  else if(contador > 5 && contador <= 10){ 
    valor. textContent = "você está avançando!";
  }
  else{
    valor.textContent="Limite atingido.";
  }

});
console.log(document.getElementById("#titulo"));
