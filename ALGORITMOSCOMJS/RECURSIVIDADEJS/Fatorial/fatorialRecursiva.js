function main(){
    let num = 0;

    let fatorial = fatorialRecursiva(num)

    function fatorialRecursiva(num){
        if(num <= 1){
            return 1
        }
        return num * fatorialRecursiva(num-1)
    }

    console.log(fatorial)
}main()