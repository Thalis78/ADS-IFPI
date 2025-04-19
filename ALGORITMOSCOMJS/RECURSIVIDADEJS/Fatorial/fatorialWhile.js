function main(){
    let num = 5;

    let fatorial = fatorialWhile(num)

    function fatorialWhile(num){
        let fatorial = 1;
        while(num > 0){
            fatorial*=num
            num--
        }
        return fatorial
    }

    console.log(fatorial)
}main()