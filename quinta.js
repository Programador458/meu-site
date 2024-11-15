

//  VARIAVEIS

var quintaPergunta1 = document.querySelector(".quintaPergunta1");
var quintaPergunta2 = document.querySelector(".quintaPergunta2");
var quintaPergunta3 = document.querySelector(".quintaPergunta3");
var quintaPergunta4 = document.querySelector(".quintaPergunta4");
var quintoponto = document.getElementById("quintoPontos");
var quintoprogresso5 = document.querySelector(".quintoProgresso5");
var quintofimGame = document.getElementById("quintoFim");
var quintaAjuda5 = document.getElementById('quintaAjuda5');


var Certosound = document.getElementById('Certo-sound'); 
quintoprogresso5.style.width = "80px";

quintaPergunta1.addEventListener('click', () =>{
    let quintofundoErrado = document.querySelector(".quintofundo-errado");
    quintofundoErrado.classList.add('erro5');    
    quintoponto.innerHTML = "40";
    quintoponto.style.color = "red";
    setTimeout(()=>{
    quintofundoErrado.classList.remove('erro5');
    document.location.href = "game.html";
    alert("VOÇÊ DEMOROU MUITO PARA RESPONDER\n\n");
}, 5000)
})

quintaPergunta2.addEventListener('click', () =>{
    let quintofundoErrado = document.querySelector(".quintofundo-errado");
    quintofundoErrado.classList.add('erro5');    
    quintoponto.innerHTML = "40";
    quintoponto.style.color = "red";
    setTimeout(()=>{
    quintofundoErrado.classList.remove('erro5');
    document.location.href = "game.html";
    alert("VOÇÊ DEMOROU MUITO PARA RESPONDER\n\n");
}, 5000)
})

function quintoRespect(){
    let quintofundoCerto = document.querySelector(".quintofundo-certo");
    quintofundoCerto.classList.add('abrir5');
    quintoprogresso5.style.width = "100px";
    quintoponto.innerHTML = "50";
    quintoponto.style.color = "green";
    Certosound.play();
}



quintaPergunta4.addEventListener('click', () =>{
    let quintofundoErrado = document.querySelector(".quintofundo-errado");
    quintofundoErrado.classList.add('erro5');    
    quintoponto.innerHTML = "40";
    quintoponto.style.color = "red";
    setTimeout(()=>{
    quintofundoErrado.classList.remove('erro5');
    document.location.href = "game.html";
    alert("VOÇÊ DEMOROU MUITO PARA RESPONDER\n\n");
}, 5000)
})


function quintaAjuda(){
    quintofimGame.innerHTML = "Voçê foi ajudado !!";
    quintofimGame.style.color = "red";
    quintofimGame.style.fontWeight = "normal";
    quintofimGame.style.fontSize = "24px";
    quintaPergunta1.style.backgroundColor = "red";
    quintaPergunta2.style.backgroundColor = "green";
    quintaPergunta3.style.backgroundColor = "green";
    quintaPergunta4.style.backgroundColor = "red";
    quintaPergunta1.style.color = "black";
    quintaPergunta4.style.color = "black";
    quintaPergunta2.style.color = "white";
    quintaPergunta3.style.color = "white";
    }



