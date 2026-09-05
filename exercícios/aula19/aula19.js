function* cores(){
    yield 'vermelho'
    yield 'azul'
    yield 'amarelo'
}

const itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)