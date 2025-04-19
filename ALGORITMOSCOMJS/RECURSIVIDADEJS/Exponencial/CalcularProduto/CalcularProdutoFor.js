function main() {
    let a = 5, b = 10

    let calcularProduto = calcularProdutoFor(a, b)

    function calcularProdutoFor(a, b) {
        let soma = 0;
        for (let i = 0; i < b; i++) {
            soma += a
        }
        return soma
    }
    console.log(calcularProduto)
}main()