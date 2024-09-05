const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((acumulador, valor) => acumulador + valor, 0);

function calcularPercentuais(faturamentoPorEstado, faturamentoTotal) {
    const percentuais = {};

    for (let estado in faturamentoPorEstado) {
        let percentual = (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
        percentuais[estado] = percentual.toFixed(2);
    }

    return percentuais;
}

const percentuaisPorEstado = calcularPercentuais(faturamentoPorEstado, faturamentoTotal);

console.log("Percentual de representação por estado:");
for (let estado in percentuaisPorEstado) {
    console.log(`${estado}: ${percentuaisPorEstado[estado]}%`);
}