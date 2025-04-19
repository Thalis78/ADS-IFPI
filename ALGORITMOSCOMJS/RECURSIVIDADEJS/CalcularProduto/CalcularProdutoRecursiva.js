function main(){
    let a = 5, b = 10,soma = 0, count = 0;

    let calcularProduto = calcularProdutoRecursiva(a,b,soma,count)
     
    function calcularProdutoRecursiva(a,b,soma,count){
        if(count >= b){
            return soma
        }
        return calcularProdutoRecursiva(a,b, soma += a,count+=1)
    }

    console.log(calcularProduto)
}main()