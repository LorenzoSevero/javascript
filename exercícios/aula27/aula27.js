const caixa1=document.querySelector('#caixa1');
const caixa2=document.querySelector('#caixa2');
const botaocopiar=document.querySelector('#btn_copiar');
const cursotodos=document.querySelectorAll('.curso');
const botaovoltar=document.querySelector('#btn_voltar');

cursotodos.forEach((el) => {
el.addEventListener('click', (evt) => {
        const curso=evt.target;
        curso.classList.toggle('selecionado');
})
});

botaocopiar.addEventListener('click', () => {
        const cursosSelecionados=[...document.querySelectorAll('.selecionado')];
        cursosSelecionados.forEach((el) => {
            caixa2.appendChild(el);
        })
 })

botaovoltar.addEventListener('click', () => {
        const cursosSelecionados=[...document.querySelectorAll('.selecionado')];
        cursosSelecionados.forEach((el) => {
            caixa1.appendChild(el);
        })
 })