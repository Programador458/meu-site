

// I N T E R A Ç Õ E S   G L O B A I S


var correctSound = document.getElementById('correct-sound');


var nomeJogador = document.getElementById('nomeJogador');
var pontosFeitos = document.getElementById('pontosFeitos');
var AjudaLimite = document.getElementById('AjudaLimite');
var nome = document.getElementById('nome');


function content(){
let comentaBox = document.querySelector(".fundo-comenta");
comentaBox.classList.add('open');
}

function closeBox(){
let comentaBox = document.querySelector(".fundo-comenta");
comentaBox.classList.remove('open');
}

/*FUNÇÃO DA INICIAÇÃO DO JOGO*/

function Bemvindo(){
if(nomePlayer.value ===""){
    var nome = document.getElementById('nome');
    nome.style.borderBottom = "2px solid red";
    return;
}
var nome = document.getElementById('nome');
var Jogador = document.getElementById('jogador');
let welcomeGame = document.querySelector(".welcome");
welcomeGame.classList.add('vindo');

Jogador.innerHTML = ""+nome.value;
Jogador.style.color = "black";
Jogador.style.textShadow = "2px 2px white";
Jogador.style.fontWeight = "bold";
Jogador.style.textTransform = "uppercase";

}

/*FIM*/

var nomePlayer = document.getElementById('nome');
function inicio(){
let player = document.querySelector(".player");
player.classList.add('playerName');
correctSound.play();
}



function playerStart(){
let firstQuestion = document.querySelector(".first");
firstQuestion.classList.add('questao1');

nomeJogador.innerHTML = ""+nome.value;
nomeJogador.style.color = "white";
nomeJogador.style.fontWeight = "bold";
nomeJogador.style.textTransform = "uppercase";

}




/* ABRIR SEGUNDA PERGUNTA*/

function question22(){

var segundoJogador = document.getElementById('segundoJogador');
var AjudaLimite = document.getElementById('AjudaLimite');
var segundaPerguntaabrir = document.querySelector(".second");
    segundaPerguntaabrir.classList.add('questao2');

    segundoJogador.innerHTML = ""+nome.value;
    segundoJogador.style.color = "white";
    segundoJogador.style.fontWeight = "bold";
    segundoJogador.style.textTransform = "uppercase";
    
}

// ABRIR TERCEIRA PERGUNTA

function question33(){
var terceiroJogador = document.getElementById('terceiroJogador');
var terceiraAbrir = document.querySelector(".terceira");
terceiraAbrir.classList.add('questao3');

    terceiroJogador.innerHTML = ""+nome.value;
    terceiroJogador.style.color = "white";
    terceiroJogador.style.fontWeight = "bold";
    terceiroJogador.style.textTransform = "uppercase";
    
}

// ABRIR QUARTA PERGUNTA

function question44(){
var quartoJogador = document.getElementById('quartoJogador');
var quarta = document.querySelector(".quarta");
quarta.classList.add('questao4');


quartoJogador.innerHTML = ""+nome.value;
quartoJogador.style.color = "white";
quartoJogador.style.fontWeight = "bold";
quartoJogador.style.textTransform = "uppercase";

}


// ABRIR QUINTA PERGUNTA

function question55(){
var quintoJogador = document.getElementById('quintoJogador');
var quinto = document.querySelector(".quinto");
quinto.classList.add('questao5');


quintoJogador.innerHTML = ""+nome.value;
quintoJogador.style.color = "white";
quintoJogador.style.fontWeight = "bold";
quintoJogador.style.textTransform = "uppercase";

}

// Abrir Regras Do Jogo

function Firstfase(){
    var regrasGame = document.querySelector('.regrasGeral');
    regrasGame.classList.add('openRegra');
}

function fecharRegra(){
    var regrasGame = document.querySelector('.regrasGeral');
    regrasGame.classList.remove('openRegra');
}

// Abrir Regras da 1 fase

function primeiraFase(){
    var primeiraFaseRegras = document.querySelector('.primeiraFaseRegras');
    primeiraFaseRegras.classList.add('openRegra2');
}

function closeFase1(){
    var primeiraFaseRegras = document.querySelector('.primeiraFaseRegras');
    primeiraFaseRegras.classList.remove('openRegra2');
}
// ************************ Segunda Fase *****************************************

function fase2(){
    let Secondsound = document.getElementById('Secondsound');
    let segundaFase = document.querySelector('.segundaFase');
    segundaFase.classList.add('entrar');
    Secondsound.play();
}

function regras2(){
    var regras = document.querySelector('.regras22');
    regras.classList.add('ver');
}

function fecharRegras(){
    var regras = document.querySelector('.regras22');
    regras.classList.remove('ver');
}

function estatistica1(){
        var estatisticaJogador = document.querySelector('.estatisticaJogador');
        var jogadorEsta = document.getElementById('jogadorEsta');
        estatisticaJogador.classList.add('estaOpen');
        jogadorEsta.innerHTML = ""+nome.value;
        jogadorEsta.style.color = "blue";    
        jogadorEsta.style.fontWeight = "bold";
        jogadorEsta.style.textTransform = "uppercase";
}

function sairEsta(){
    var estatisticaJogador = document.querySelector('.estatisticaJogador');
    estatisticaJogador.classList.remove('estaOpen');
}

function comecarSegunda(){
    var adm = document.querySelector('.adm');
    var jogadorAdm = document.getElementById('jogadorAdm');
    var jogadorAdm2 = document.getElementById('jogadorAdm2');
    var nome = document.getElementById('nome');
    adm.classList.add('aparecer');
    jogadorAdm.innerHTML = ""+nome.value;
    jogadorAdm.style.color = "blue";    
    jogadorAdm.style.fontWeight = "bold";
    jogadorAdm.style.textTransform = "uppercase";

    jogadorAdm2.innerHTML = ""+nome.value;
    jogadorAdm2.style.color = "blue";    
    jogadorAdm2.style.fontWeight = "bold";
    jogadorAdm2.style.textTransform = "uppercase";
}


function inicioSegunda(){
    var sextoJogador = document.getElementById('sextoJogador');
    var sexta = document.querySelector(".sexta");
    sexta.classList.add('questao6');


    sextoJogador.innerHTML = ""+nome.value;
    sextoJogador.style.color = "white";
    sextoJogador.style.fontWeight = "bold";
    sextoJogador.style.textTransform = "uppercase";
}