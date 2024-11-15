
    /*TERCEIRA PERGUNTA*/


    /* VARIAVEIS DA SEGUNDA PERGUNDA*/

var terceiraPergunta1 = document.querySelector(".terceiraPergunta1");
var terceiraPergunta2 = document.querySelector(".terceiraPergunta2");
var terceiraPergunta3 = document.querySelector(".terceiraPergunta3");
var terceiraPergunta4 = document.querySelector(".terceiraPergunta4");
var terceiroponto = document.getElementById("terceiroPontos");
var terceiroprogresso3 = document.querySelector(".terceiroProgresso3");
var terceirafimGame = document.getElementById("terceiraFim");
var terceiraAjuda3 = document.getElementById('terceiraAjuda');



terceiroprogresso3.style.width = "40px";

terceiraPergunta1.addEventListener('click', () =>{
    let terceirofundoErrado = document.querySelector(".terceirofundo-errado");
    terceirofundoErrado.classList.add('erro3');    
    terceiroponto.innerHTML = "20";
    terceiroponto.style.color = "red";
    setTimeout(()=>{
    terceirofundoErrado.classList.remove('erro3');
    document.location.href = "game.html";
    alert("VOÇÊ DEMOROU MUITO PARA RESPONDER\n\n");
}, 5000)
})

terceiraPergunta2.addEventListener('click', () =>{
    let terceirofundoErrado = document.querySelector(".terceirofundo-errado");
    terceirofundoErrado.classList.add('erro3');    
    terceiroponto.innerHTML = "20";
    terceiroponto.style.color = "red";
    setTimeout(()=>{
    terceirofundoErrado.classList.remove('erro3');
    document.location.href = "game.html";
    alert("VOÇÊ DEMOROU MUITO PARA RESPONDER\n\n");
}, 5000)
})

terceiraPergunta3.addEventListener('click', () =>{
    let terceirofundoErrado = document.querySelector(".terceirofundo-errado");
    terceirofundoErrado.classList.add('erro3');    
    terceiroponto.innerHTML = "20";
    terceiroponto.style.color = "red";
    setTimeout(()=>{
    terceirofundoErrado.classList.remove('erro3');
    document.location.href = "game.html";
    alert("VOÇÊ DEMOROU MUITO PARA RESPONDER\n\n");
}, 5000)
})

function terceiroRespect(){
    
    var Certosound = document.getElementById('Certo-sound'); 
    let terceirofundoCerto = document.querySelector(".terceirofundo-certo");
    terceirofundoCerto.classList.add('abrir3');
    terceiroprogresso3.style.width = "60px";
    terceiroponto.innerHTML = "30";
    terceiroponto.style.color = "green";
    Certosound.play();
}







    terceiraAjuda3.addEventListener('click', terceiraAjuda);

    
    function terceiraAjuda(){
    var helpPlayer = document.querySelector(".helpPlayer");
    terceirafimGame.innerHTML = "Voçê foi ajudado !!";
    terceirafimGame.style.color = "red";
    terceirafimGame.style.fontWeight = "normal";
    terceirafimGame.style.fontSize = "24px";
    terceiraPergunta1.style.backgroundColor = "red";
    terceiraPergunta2.style.backgroundColor = "green";
    terceiraPergunta3.style.backgroundColor = "red";
    terceiraPergunta4.style.backgroundColor = "green";
    terceiraPergunta1.style.color = "black";
    terceiraPergunta4.style.color = "white";
    terceiraPergunta2.style.color = "white";
    terceiraPergunta3.style.color = "black";
}