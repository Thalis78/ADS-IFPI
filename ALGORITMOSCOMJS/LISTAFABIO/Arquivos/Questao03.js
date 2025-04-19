function main(){
    let String = "THALISSON24052004AVENIDA BUENOS AIRES"
    let Array  = String.split("");
    console.log(`
    NOME: ${nome(Array)}
    DATA: ${data(Array)}
    END : ${End(Array)}
    `)
}
function nome(Array){
    let formarNome = "";
    for(let i = 0; i < Array.length;i++){
        if(parseInt(Array[i]) >= 0){
            break;
        }else{
            formarNome += Array[i];
        }
    }
    return formarNome;
}
function data(Array){
    let formarData = "";
    let count = 0;
    for(let i = 0; i < Array.length;i++){
        if(parseInt(Array[i]) >= 0){
            
            formarData += Array[i];
            count++;
            if(count == 2 || count == 4){
                formarData +="/"
            }
        }
    }
    return formarData;
}
function End(Array){
    let formarEnd = "";
    for(let i = 0; i < Array.length;i++){
        if(parseInt(Array[i]) >= 0){
            formarEnd = "";
        }else if(Array[i] == " "){
            formarEnd += " ";
        }else{
            formarEnd += Array[i];
        }
    }
    return formarEnd;
}
main()