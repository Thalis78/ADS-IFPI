function main() {
    let a = 5, b = 10

    let calcularProduto = calcularProdutoWhile(a, b)

    function calcularProdutoWhile(a,b){
        let soma = 0, count = 0;
        while (count < b) {
            soma += a
            count++
        }
        return soma
    }
    console.log(calcularProduto)
}main()