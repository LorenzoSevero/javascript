function produto(nome,preco,quant) {
    this.nome=nome
    this.preco=preco
    this.quant=quant
    this.calcular_total=function(){
    return this.preco*this.quant
    }
}

const produto1=new produto("caixa",15,20)

console.log("produto: " + produto1.nome)
console.log("total em estoque: " + produto1.quant + " Valor por unidade: " + produto1.preco)
console.log("total do estoque: R$ " + produto1.calcular_total());