function main(){
    let a = 5, b = 5;

    let sequenciaSimples = sequenciaSimplesWhile(a,b)

    function sequenciaSimplesWhile(a,b){
        let String = " "
        while(a <= b){
            String += a + " "
            a++;
        }
        return String
    }

    console.log(sequenciaSimples)
}main()