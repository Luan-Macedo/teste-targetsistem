const dados = require('./dados.json')

let faturamentoDiario = dados.map(dia => dia.valor)

function calcularFaturamento(faturamento){

    let diasComFaturamento = faturamento.filter(valor => valor > 0)

    let menorValor = Math.min(...diasComFaturamento)
    let maiorValor = Math.max(...diasComFaturamento)

    let soma = diasComFaturamento.reduce((acumulador, valor) => acumulador + valor, 0)
    let media = soma / diasComFaturamento.length

    let diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > media).length

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}

let resultado = calcularFaturamento(faturamentoDiario)
console.log(`Menor valor de faturamento: ${resultado.menorValor}`)
console.log(`Maio valor de faturamento: ${resultado.maiorValor}`)
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`)
