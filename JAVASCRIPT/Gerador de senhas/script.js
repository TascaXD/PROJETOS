var input = document.querySelector('input#number')

input.addEventListener('change', () => {
    if (input.value > 100) {
      input.value = 100;
    }
    if(input.value < 0){
        input.value = 0
    }
  })

function gerar(){
let maiuscula = document.querySelector('input#maiuscula')
let minuscula = document.querySelector('input#minuscula')
let número = document.querySelector('input#número')
let símbolo = document.querySelector('input#símbolo')
let inputsenha = document.querySelector('input#number').value
let div = document.querySelector('div#senha')
let letrasm = "abcdefghijklmnopqrstuvwxyz"
let letrasM = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let números = "0123456789"
let especiais = "!@#$%^&*()_+"
let quantity = inputsenha
let senha = ""
let copiar = document.createElement('input')

copiar.type = "button"
copiar.setAttribute('value', 'Copiar');
copiar.className = "button"
copiar.id = "botao"
copiar.addEventListener('click', copy)

if(inputsenha.length == 0 ){
    alert('ERRO! Digite quantos caracteres a senha deve ter.')
}

if(maiuscula.checked == false && minuscula.checked == false && número.checked == false && símbolo.checked == false){
alert('ERRO! Selecione alguma opção antes de gerar.')
return
}

for(c = 0; c < quantity ; c++){

if(maiuscula.checked && minuscula.checked && símbolo.checked == false && número.checked == false){
let variaveis = [letrasm, letrasM]
let indice = Math.floor(Math.random()* variaveis.length)
let variavelsel = variaveis[indice]

senha += variavelsel.charAt(Math.floor(Math.random()* variavelsel.length))
}else

if(maiuscula.checked && número.checked && símbolo.checked == false && minuscula.checked == false){
variaveis = [letrasM, números]
indice = Math.floor(Math.random()* variaveis.length)
variavelsel = variaveis[indice]

senha += variavelsel.charAt(Math.floor(Math.random()* variavelsel.length))
}else

if(maiuscula.checked && símbolo.checked && minuscula.checked == false && número.checked == false){
variaveis = [letrasM, especiais]
indice = Math.floor(Math.random()* variaveis.length)
variavelsel = variaveis[indice]

senha += variavelsel.charAt(Math.floor(Math.random()* variavelsel.length))
}else

if(minuscula.checked && número.checked && símbolo.checked == false && maiuscula.checked == false){
variaveis = [letrasm, números]
indice = Math.floor(Math.random()* variaveis.length)
variavelsel = variaveis[indice]

senha += variavelsel.charAt(Math.floor(Math.random()* variavelsel.length))
}else

if(minuscula.checked && símbolo.checked && maiuscula.checked == false && número.checked == false){
variaveis = [letrasm, especiais]
indice = Math.floor(Math.random()* variaveis.length)
variavelsel = variaveis[indice]

senha += variavelsel.charAt(Math.floor(Math.random()* variavelsel.length))
}else

if(número.checked && símbolo.checked  && minuscula.checked == false && maiuscula.checked == false){
variaveis = [números, especiais]
indice = Math.floor(Math.random()* variaveis.length)
variavelsel = variaveis[indice]

senha += variavelsel.charAt(Math.floor(Math.random()* variavelsel.length))
}
else if(maiuscula.checked && minuscula.checked && símbolo.checked && número.checked == false) {
    let variaveis = [letrasm, especiais, letrasM];
    let indice = Math.floor(Math.random()* variaveis.length);
    let variavelsel = variaveis[indice];
  
    senha += variavelsel.charAt(Math.floor(Math.random()* variavelsel.length));
  }
else if(maiuscula.checked && número.checked && símbolo.checked && minuscula.checked == false) {
let variaveis = [números, especiais, letrasM];
let indice = Math.floor(Math.random()* variaveis.length);
let variavelsel = variaveis[indice];

senha += variavelsel.charAt(Math.floor(Math.random()* variavelsel.length));
}
else if(número.checked && minuscula.checked && símbolo.checked && maiuscula.checked == false) {
    let variaveis = [letrasm, especiais, números];
    let indice = Math.floor(Math.random()* variaveis.length);
    let variavelsel = variaveis[indice];
  
    senha += variavelsel.charAt(Math.floor(Math.random()* variavelsel.length));
  }
  else if(maiuscula.checked && minuscula.checked && número.checked && símbolo.checked == false) {
    let variaveis = [letrasm, números, letrasM];
    let indice = Math.floor(Math.random()* variaveis.length);
    let variavelsel = variaveis[indice];
  
    senha += variavelsel.charAt(Math.floor(Math.random()* variavelsel.length));
  } else if(maiuscula.checked && minuscula.checked && número.checked && símbolo.checked) {
    let variaveis = [letrasm, números, letrasM, especiais];
    let indice = Math.floor(Math.random()* variaveis.length);
    let variavelsel = variaveis[indice];
  
    senha += variavelsel.charAt(Math.floor(Math.random()* variavelsel.length));
  }


else{
if(maiuscula.checked){
senha += letrasM.charAt(Math.floor(Math.random()* letrasM.length))
}

if(minuscula.checked){
senha += letrasm.charAt(Math.floor(Math.random()* letrasm.length))
}
if(número.checked){
senha+= números.charAt(Math.floor(Math.random()* números.length))
}
if(símbolo.checked){
senha+= especiais.charAt(Math.floor(Math.random()* especiais.length))
}
}
div.innerHTML = `${senha}`
div.appendChild(copiar)
}
function copy(){
navigator.clipboard.writeText(senha)
}
}



