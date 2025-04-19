function main(){
    let a = 5 ,b = 15;

    let sequenciaSimples = sequenciaSimplesFor(a,b)

    function sequenciaSimplesFor(a,b){
        let String = " "
        for(a; a <= b;a++){
            String += a + " "
        }
        return String
    }

    console.log(sequenciaSimples)
}main()