function main(){
    let comprimento = 5;

    let fibonacci = finabocciFor(comprimento)

    function finabocciFor(comprimento){
        let String = "",finabocci = 0, resultAnterior = 1;
        
        for(comprimento;comprimento > 0;comprimento-=2){
            String += finabocci + " "
            resultAnterior = finabocci + resultAnterior   
            if(comprimento - 2 >= 0) {
                String += resultAnterior + " "
            }else{
                break;
            }
            finabocci += resultAnterior
        }
        return String;
    }

    console.log(fibonacci)
}main()