function main(){
    let num = 5;

    fatorialFor = fatorialFor(num)

    function fatorialFor(num){
        let fatorial = 1;
        for(num; num > 0; num--){
            fatorial *= num;
        }
        return fatorial;
    }
    
    console.log(fatorialFor)
}main()
