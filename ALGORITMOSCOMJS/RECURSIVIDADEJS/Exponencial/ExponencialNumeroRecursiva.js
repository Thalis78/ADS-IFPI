function main(){
    let a = 5, b = 3;
    let exponenciacao = 1;

    exponenciacao = exponenciacaoDeNumero(a,b,exponenciacao)

    function exponenciacaoDeNumero(a,b,exponenciacao){
        if(b <= 0){
            return exponenciacao
        }
        exponenciacao *= a
        return exponenciacaoDeNumero(a,b-=1,exponenciacao)
    }

    console.log(exponenciacao)
}main()