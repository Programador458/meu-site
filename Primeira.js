

var resposta1 = document.querySelector(".resposta1");
var resposta2 = document.querySelector(".resposta2");
var resposta3 = document.querySelector(".resposta3");
var resposta4 = document.querySelector(".resposta4");
var pontos = document.getElementById("pontos");
var progresso = document.querySelector(".progresso");
var fimGame = document.getElementById("fim");
var nomeJogador = document.getElementById('nomeJogador');
var pontosFeitos = document.getElementById('pontosFeitos');
var AjudaLimitePrimeiro = document.getElementById('AjudaLimitePrimeiro');
var nome = document.getElementById('nome');


/*F I R S T - Q U E S T I O N*/

var Certosound = document.getElementById('Certo-sound'); 


function respect(){
Certosound.play();
let fundoCerto = document.querySelector(".fundo-certo");
fundoCerto.classList.add('abrir');   
pontos.innerHTML = "10";
pontos.style.color = "green";
progresso.style.width = "20px";
}


resposta2.addEventListener('click', ()=>{
    let fundoErrado = document.querySelector(".fundo-errado");
    fundoErrado.classList.add('erro1');
    
    setTimeout(()=>{
        fundoErrado.classList.add('erro1');
        document.location.href = "game.html";
        alert("VOÇÊ DEMOROU MUITO PARA RESPONDER\n\n");
    }, 5000)
})

resposta3.addEventListener('click', ()=>{
    let fundoErrado = document.querySelector(".fundo-errado");
    fundoErrado.classList.add('erro1');

    setTimeout(()=>{
        fundoErrado.classList.add('erro1');
        document.location.href = "game.html";
        alert("VOÇÊ DEMOROU MUITO PARA RESPONDER\n\n");
    }, 5000)
})

resposta4.addEventListener('click', ()=>{
    let fundoErrado = document.querySelector(".fundo-errado");
    fundoErrado.classList.add('erro1');

    setTimeout(()=>{
        fundoErrado.classList.add('erro1');
        document.location.href = "game.html";
        alert("VOÇÊ DEMOROU MUITO PARA RESPONDER\n\n");
    }, 5000)
})




/*E N D*/

function ajuda(){ 
    var helpPlayer = document.querySelector(".helpPlayer");
    fimGame.innerHTML = "Voçê foi ajudado !!";
    fimGame.style.color = "red";
    fimGame.style.fontWeight = "normal";
    fimGame.style.fontSize = "24px";
    resposta1.style.backgroundColor = "green";
    resposta2.style.backgroundColor = "red";
    resposta3.style.backgroundColor = "red";
    resposta4.style.backgroundColor = "green";
    resposta1.style.color = "white";
    resposta4.style.color = "white";
    AjudaLimitePrimeiro.innerHTML = "1";
    helpPlayer.innerHTML = "1";
 }

 