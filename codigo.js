var conta = new Array()
//adiciona um caracter
function inserir(v){
conta.push(v)
cconta=conta+""
document.querySelector("#resultado").innerText=cconta.replaceAll(",", "")
}
function back(){
//deleta o ultimo caracter
conta.pop()
cconta=conta+""
document.querySelector("#resultado").innerText=cconta.replaceAll(",", "")
}
function operar(){
    var op=0
    var conta2
    conta2=new Array    
    conta2[op]=''
    // organização de dados para os calculos
    var len=conta.length
    for(var i=0;i<len;i++){
       if (conta[i]>=0){
        conta2[op]+=conta[i].toString()
       }
       else{
           op1=op+1
           conta2[op1]=conta[i].toString()
           op+=2
           conta2[op]=''
       }
    }
    // Calculando a expreção
    // Multiplicação e divisão
    var len2=conta2.length
    var j=0
    for(i=0;i<len2;i++){
        if (conta2[i]==="."){
           conta2[i-1]=multiplicação(conta2[i-1],conta2[i+1])
           conta2.splice(i,2)
           i=i-2
           
        }
        else if(conta2[i]==="/"){
            conta2[i-1]=divisão(conta2[i-1],conta2[i+1])
            conta2.splice(i,2)
            i=i-2
        }
    }
    // Soma e adição
    len2=conta2.length
    for(i=0;i<len2;i++){
        if (conta2[i]==="+"){
           conta2[i-1]=soma(conta2[i-1],conta2[i+1])
           conta2.splice(i,2)
           i=i-2
           
        }
        else if(conta2[i]==="-"){
            conta2[i-1]=subtração(conta2[i-1],conta2[i+1])
            conta2.splice(i,2)
            i=i-2
        }
    }
    del()
    inserir(conta2)
}
function soma(v1,v2){
    v3=Number(v1)+Number(v2)
    return v3
}
function subtração(v1,v2){
    v3=Number(v1)-Number(v2)
    return v3
}
function multiplicação(v1,v2){
    v3=Number(v1)*Number(v2)
    return v3
}
function divisão(v1,v2){
    v3=Number(v1)/Number(v2)
    return v3
}
function del(){
    conta.splice(0,conta.length)
    cconta=conta
    document.querySelector("#resultado").innerText=cconta
}