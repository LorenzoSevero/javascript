let contador=0
const botao=document.getElementById("btn");
const titulo=document.getElementById("atr");
const botaocontador=document.getElementById("contador");
const valorcontado=document.getElementById("valor_cont");
const todos=document.querySelectorAll(".lst");

todos.forEach(function(item){
    item.textContent=item.textContent+" -estudado hoje"
})

botaocontador.addEventListener("click", function(){
    contador++;
    valorcontado.textContent=contador;
}) 

botao.addEventListener("click", function(){
titulo.textContent="DOM é interessante"
 })

/*
A variável contador armazena o valor numérico.
A variável valor representa o parágrafo HTML que exibe esse valor.
*/

