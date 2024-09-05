function pertenceFibonacci(n){
    let a = 0, b = 1, proximo

    if (n === 0 || n === 1){
        return `${n} pertence a sequencia de Fibonacci`
    }
    
    while (b < n){
        proximo = a + b
        a = b
        b = proximo
    }
    
    if (b === n){
        return `${n} pertence à sequência de Fibonacci.`;
        } else {
        return `${n} não pertence à sequência de Fibonacci.`;
    }
}

let numero = 2584;
console.log(pertenceFibonacci(numero))


