
function contar(){
let inicio = document.querySelectorAll('input')[0]
let iniciov = Number(inicio.value)
let fim = document.querySelectorAll('input')[1]
let fimv = Number(fim.value)
let passo = document.querySelectorAll('input')[2]
let passov = Number(passo.value)
let div = document.querySelector('div#resultado')

div.innerHTML = ""
if(passov == 0){
    passov = 1
    alert("ERRO! NÃO É POSSÍVEL CONTAR COM 0, CONSIDERAR 1!")
}
if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || fimv == 0){
alert("ERRO! DIGITE UM VALOR EM TODOS OS CAMPOS!")
}else{
for(let contador = iniciov; contador <= fimv; contador += passov){
    div.innerHTML += `👉${contador}`  
} 
div.innerHTML +="🚩"
}
}                   