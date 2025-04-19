function main(){
    let a = 5, b = 15, string = ""

    let sequenciaSimples = sequenciaSimplesRecursiva(a,b,string)

    function sequenciaSimplesRecursiva(a,b,string){
        if(a > b){
            return string
        }
        return string += `${a} ` + sequenciaSimplesRecursiva(a+=1,b,string)
    }

    console.log(sequenciaSimples)
}main()