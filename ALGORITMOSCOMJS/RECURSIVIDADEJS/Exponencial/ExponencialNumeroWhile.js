function main(){
    let a = 5, b = 3;
    let exponenciacao = 1;

    exponenciacao = exponenciacaoDeNumero(a,b,exponenciacao)

    function exponenciacaoDeNumero(a,b,exponenciacao){
        while(b > 0){
            exponenciacao*=a;
            b--;
        }
        return exponenciacao 
    }

    console.log(exponenciacao)
}main()