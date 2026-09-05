function aluno(nome,nota) {
    this.nome=nome
    this.nota=nota

    this.dados_anonimos=function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }

    this.dados_arrows=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
}

const al1=new aluno("Lorenzo", 100)
al1.dados_arrows()
al1.dados_anonimos()