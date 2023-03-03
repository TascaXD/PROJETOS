var resultado = document.querySelector('div#resultado')
var feminino = document.querySelector('input#Feminino')
var masculino = document.querySelector('input#Masculino')
var sexo = ""
var nascimento = document.querySelector('input#Nascimento')
var data = new Date();
var year = data.getFullYear()
var nascimentovalue = nascimento.value
var verificar = document.querySelector('input#Verificar')
var img = document.querySelector('img')

verificar.addEventListener("click", Resultado)

img.style.display = "none"

function Verificar(){
    let nascimentovalue = nascimento.value

    if(!masculino.checked && !feminino.checked){
        alert('ERRO! SELECIONE UM GÊNERO!')      
    }
    if(nascimentovalue <= 1923){
        alert('ERRO! VALOR INVÁLIDO!')
    }
    if(nascimentovalue >= 2023){
        alert('ERRO! VALOR INVÁLIDO!')
    }
}

function Resultado(){
    let nascimentovalue = nascimento.value
    let result = year - nascimentovalue

    if(sexo === "mulher" && nascimentovalue < 2023 && nascimentovalue > 1923){
        resultado.innerHTML = `Detectamos uma mulher de ${result} anos.`

    if(nascimentovalue > year - 13){
        img.style.display = "block"
         img.src = "images.jpg"
    }

    if(nascimentovalue < year - 12 && nascimentovalue > year - 19){
        img.src = "adolescente.jpg"
        img.style.display = "block"
        img.style.height = "16em"
        img.style.width = "12em"
    }
    if(nascimentovalue < year - 17 && nascimentovalue > year - 60){
        img.src = "adulta.jpg"
        img.style.display = "block"
        img.style.height = "16em"
        img.style.width = "15em"
    }
    if(nascimentovalue < year - 59){
        img.src = "idosa.png"
        img.style.display = "block"
        img.style.height = "15em"
        img.style.width = "15em"
        img.style.marginTop = "5em"
    }

    } 

    if(sexo === "homem"  && nascimentovalue < 2023 && nascimentovalue > 1923){
        resultado.innerHTML = `Detectamos um homem de ${result} anos.`

        if(nascimentovalue > year - 13){
            img.src = "menino.jpg"
            img.style.display = "block"
            img.style.height = "16em"
            img.style.width = "12em"
            img.style.marginTop = "5em"
        }
    
        if(nascimentovalue < year - 12 && nascimentovalue > year - 19){
            img.src = "adolescente2.jpg"
            img.style.display = "block"
            img.style.height = "14em"
            img.style.width = "16em"
        }
        if(nascimentovalue < year - 17 && nascimentovalue > year - 60){
            img.src = "adulto.png"
            img.style.display = "block"
            img.style.height = "15em"
            img.style.width = "16em"
            img.style.marginTop = "5em"
        }
        if(nascimentovalue < year - 59){
            img.src = "idoso.jpeg"
            img.style.display = "block"
            img.style.height = "17em"
            img.style.width = "18em"
        }
    }

}



function Radio(){
    if(feminino.checked = true){
    feminino.checked = false
    } 
    sexo = "homem"      
}

function Radio2(){
    if(masculino.checked = true){
    masculino.checked = false
    }       
    sexo = "mulher"
}

