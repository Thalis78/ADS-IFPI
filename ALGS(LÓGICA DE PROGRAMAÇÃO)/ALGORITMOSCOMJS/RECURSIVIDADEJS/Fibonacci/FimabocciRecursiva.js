function main(){
    let comprimento = 6,String = "",finabocci = 0, resultAnterior = 1;


    let resultFibonacci = finabocciRecursiva(comprimento,String,finabocci,resultAnterior)

    function finabocciRecursiva(comprimento,String,fibonacci,resultAnterior){
        
        if(comprimento == 0){
            return String;
        }
        String += finabocci + " "
        resultAnterior = finabocci + resultAnterior   
        if(comprimento - 2 >= 0) {
            String += resultAnterior + " "
            comprimento-=1
        }
        finabocci += resultAnterior
        return finabocciRecursiva(comprimento-=1,String,fibonacci,resultAnterior);
    }

    console.log(resultFibonacci)
}main()