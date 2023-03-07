var input = document.querySelector('input#number')
var button = document.querySelector('input#button')
var valores = []
var maiornum = 0

input.addEventListener('input', function() {
    if (input.value > 100) {
      input.value = 100
    }
  })

function adicionar(){
    let num = document.querySelector('input#number').value
    let opt = document.createElement('option')
    let select = document.querySelector('select')
    let div = document.querySelector('div#resultado')
    div.innerHTML = ""
    if(maiornum < num){
        maiornum = num
    }
    
   
    if(valores.indexOf(num) !== -1){
        alert('ERRO! Valor já informado!')
        return
    }
    if (num.length == 0) {
        alert('Por favor, informe um valor para adicionar!');
    } else {
        valores.push(num)
        opt.value = num;
        opt.text = `Valor ${num} adicionado.`;
        select.add(opt);
    }
}

function finalizar(){
    let opts = document.querySelectorAll('option')
    let numopt = opts.length
    let div = document.querySelector('div#resultado')
    let menornum = Math.min(...valores)
    let soma = 0
    if(valores.length === 0){
        alert('ERRO! Adicione valores antes de finalizar!')
        return
    }
    for(c = 0; c < valores.length ; c++){
       soma += Number(valores[c])
    }
    let media = Number(soma/valores.length)


    div.innerHTML = ` <br> <br> Ao todo, temos ${numopt} números cadastrados. <br> <br>
    O maior valor informado foi ${maiornum}. <br> <br>
    O menor valor informado foi ${menornum}. <br> <br>
    Somando todos os valores, temos ${soma}. <br> <br>
    A média dos valores digitados é ${media}.`
}


