
//  VARIAVEIS

var quartaPergunta1 = document.querySelector(".quartaPergunta1");
var quartaPergunta2 = document.querySelector(".quartaPergunta2");
var quartaPergunta3 = document.querySelector(".quartaPergunta3");
var quartaPergunta4 = document.querySelector(".quartaPergunta4");
var quartoponto = document.getElementById("quartoPontos");
var quartoprogresso4 = document.querySelector(".quartoProgresso4");
var quartofimGame = document.getElementById("quartoFim");
var quartaAjuda = document.getElementById('quartaAjuda');

var Certosound = document.getElementById('Certo-sound'); 

quartoprogresso4.style.width = "60px";


quartaPergunta1.addEventListener('click', () =>{
    let quartofundoErrado = document.querySelector(".quartofundo-errado");
    quartofundoErrado.classList.add('erro4');    
    quartoponto.innerHTML = "30";
    quartoponto.style.color = "red";
    setTimeout(()=>{
    quartofundoErrado.classList.remove('erro4');
    document.location.href = "game.html";
    alert("VOÇÊ DEMOROU MUITO PARA RESPONDER\n\n");
}, 5000)
})

quartaPergunta2.addEventListener('click', () =>{
    let quartofundoErrado = document.querySelector(".quartofundo-errado");
    quartofundoErrado.classList.add('erro4');    
    quartoponto.innerHTML = "30";
    quartoponto.style.color = "red";
    setTimeout(()=>{
    quartofundoErrado.classList.remove('erro4');
    document.location.href = "game.html";
    alert("VOÇÊ DEMOROU MUITO PARA RESPONDER\n\n");
}, 5000)
})

quartaPergunta3.addEventListener('click', () =>{
    let quartofundoErrado = document.querySelector(".quartofundo-errado");
    quartofundoErrado.classList.add('erro4');    
    quartoponto.innerHTML = "30";
    quartoponto.style.color = "red";
    setTimeout(()=>{
    quartofundoErrado.classList.remove('erro4');
    document.location.href = "game.html";
    alert("VOÇÊ DEMOROU MUITO PARA RESPONDER\n\n");
}, 5000)
})

function quartoRespect(){
    let quartofundoCerto = document.querySelector(".quartofundo-certo");
    quartofundoCerto.classList.add('abrir4');
    quartoprogresso4.style.width = "80px";
    quartoponto.innerHTML = "30";
    quartoponto.style.color = "green";
    Certosound.play();
}




    
function quartaAjuda4(){
quartofimGame.innerHTML = "Voçê foi ajudado !!";
quartofimGame.style.color = "red";
quartofimGame.style.fontWeight = "normal";
quartofimGame.style.fontSize = "24px";
quartaPergunta1.style.backgroundColor = "red";
quartaPergunta2.style.backgroundColor = "red";
quartaPergunta3.style.backgroundColor = "green";
quartaPergunta4.style.backgroundColor = "green";
quartaPergunta1.style.color = "black";
quartaPergunta4.style.color = "white";
quartaPergunta2.style.color = "black";
quartaPergunta3.style.color = "white";
}