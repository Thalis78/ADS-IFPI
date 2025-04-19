function main(){
    let a = 5, b = 3;
    let exponenciacao = 1;

    exponenciacao = exponenciacaoDeNumero(a,b,exponenciacao)

    function exponenciacaoDeNumero(a,b,exponenciacao){
        for(let i = 0; i < b; i++){
            exponenciacao*=a;
        }
        return exponenciacao 
    }

    console.log(exponenciacao)
}main()