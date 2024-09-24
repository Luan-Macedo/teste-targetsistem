function contarAs(string) {
    const contador = (string.match(/a/gi) || []).length;
    return contador;
}

const string = "AaAaAaAaAaAaAaAaAaAa";
console.log(`A letra 'a' aparece ${contarAs(string)} vez(es) na string.`);