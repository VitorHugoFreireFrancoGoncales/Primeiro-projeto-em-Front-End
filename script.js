//INICIO SUMIR E APARECER A DIV
var btn = document.querySelector('#show-or-hider')
var divpai = document.querySelector('.divpai')

btn.addEventListener('click', function(){

    if(divpai.style.display === 'block') {
        divpai.style.display = 'none';
    } else {
        divpai.style.display = 'block';
    }

})
//FIM SUMIR E APARECER A DIV



//INICIO CALCULAR DATA DE ANIVERSARIO
var data = document.querySelector('#data')
var idade = document.querySelector('#idade')

var resultado = document.querySelector('span')

function somar(){
    resultado.innerHTML = parseInt(data.value) - parseInt(idade.value)
}
//FIM CALCULAR DATA DE ANIVERSARIO



//INICIO APARECER O NOME DIGITADO E APARECE NA OUTRA DIV
var capturando = "";
function capturar () {
    var sexo = "Menina"
    if(document.getElementById('M').checked==true){
        sexo = "Menino"
    }



    capturando = document.getElementById('valor').value;
    document.getElementById('valorDigitado').innerHTML = `<strong><h3>Olá ${capturando}, você é ${sexo}!</h3></strong>`;
}
//FIM APARECER O NOME DIGITADO


//INICIO APARECER O "SEXO" QUE FOI SELECIONADO
/*var radio = document.querySelectorAll(".F-M");

var M = "Menino";
var F = "Menina";

var btn = document.querySelector(".botao-pink");

btn.addEventListener("click", function(e) {

    e.preventDefault();

    F = Menina;
    M = Menino;
    


    radio.forEach(function(el){
    if(el.checked){
    F++;
    M++; 
    }

    });

});*/
//FIM APARECER O "SEXO" QUE FOI SELECIONADO


//INICIO TROCAR A COR CHEKBOX
function trocarcor(id) {
    if (id == "") {
    }
    if(id == "vermelho"){
        if(document.getElementById('vermelho').checked==true){
            document.getElementsByClassName("bloco1")[0].style.background = "red";
        }else{
            document.getElementsByClassName("bloco1")[0].style.background = "dodgerblue";
        }
    }


    if(id == "azul"){
        if(document.getElementById('azul').checked==true){
            document.getElementsByClassName("bloco2")[0].style.background = "blue";
        }else{
            document.getElementsByClassName("bloco2")[0].style.background = "dodgerblue";
        }
    }


    if(id == "amarelo"){
        if(document.getElementById('amarelo').checked==true){
            document.getElementsByClassName("bloco3")[0].style.background = "yellow";
        }else{
            document.getElementsByClassName("bloco3")[0].style.background = "dodgerblue";
        }
    }


    if(id == "verde"){
        if(document.getElementById('verde').checked==true){
            document.getElementsByClassName("bloco4")[0].style.background = "green";
        }else{
            document.getElementsByClassName("bloco4")[0].style.background = "dodgerblue";
        }
    }


    if(id == "branco"){
        if(document.getElementById('branco').checked==true){
            document.getElementsByClassName("bloco5")[0].style.background = "white";
        }else{
            document.getElementsByClassName("bloco5")[0].style.background = "dodgerblue";
        }
    }


    if(id == "preto"){
        if(document.getElementById('preto').checked==true){
            document.getElementsByClassName("bloco6")[0].style.background = "black";
        }else{
            document.getElementsByClassName("bloco6")[0].style.background = "dodgerblue";
        }
    }
    console.log(id)
}
//FIM TROCAR A COR CHEKBOX

//INICIO FUNÇÃO ONCLICK
function acao1() {
    alert('Maneiro')
}
//FIM FUNÇÃO ONCLICK