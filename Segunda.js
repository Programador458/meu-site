

/* VARIAVEIS DA SEGUNDA PERGUNDA*/

var segundaPergunta1 = document.querySelector(".segundaPergunta1");
var segundaPergunta2 = document.querySelector(".segundaPergunta2");
var segundaPergunta3 = document.querySelector(".segundaPergunta3");
var segundaPergunta4 = document.querySelector(".segundaPergunta4");
var segundoponto = document.getElementById("segundoPontos");
var segundaprogresso2 = document.querySelector(".segundoProgresso2");
var segundofimGame = document.getElementById("segundoFim");
var segundaAjuda2 = document.getElementById('segundaAjuda');


var Certosound = document.getElementById('Certo-sound'); 

segundaprogresso2.style.width = "20px";

segundaPergunta1.addEventListener('click', () =>{
        let segundofundoErrado = document.querySelector(".segundofundo-errado");
        segundofundoErrado.classList.add('erro2');    
        segundoponto.innerHTML = "10";
        segundoponto.style.color = "red";
    setTimeout(()=>{
        segundofundoErrado.classList.remove('erro2');
        document.location.href = "game.html";
        alert("VOÇÊ DEMOROU MUITO PARA RESPONDER\n\n");
    }, 5000)

})

function segundoRespect(){
    let segundofundoCerto = document.querySelector(".segundofundo-certo");
    segundofundoCerto.classList.add('abrir2');
    segundaprogresso2.style.width = "40px";
    segundoponto.innerHTML = "20";
    segundoponto.style.color = "green";
    Certosound.play();
}

segundaPergunta3.addEventListener('click', () =>{
        let segundofundoErrado = document.querySelector(".segundofundo-errado");
        segundofundoErrado.classList.add('erro2');
        segundoponto.innerHTML = "10";
        segundoponto.style.color = "red";

    setTimeout(()=>{
        segundofundoErrado.classList.remove('erro2');
        document.location.href = "game.html";
        alert("VOÇÊ DEMOROU MUITO PARA RESPONDER\n\n");
    }, 5000)
})

segundaPergunta4.addEventListener('click', () =>{
        let segundofundoErrado = document.querySelector(".segundofundo-errado");
        segundofundoErrado.classList.add('erro2');    
        segundoponto.innerHTML = "10";
        segundoponto.style.color = "red";

    setTimeout(()=>{
        segundofundoErrado.classList.remove('erro2');
        document.location.href = "game.html";
        alert("VOÇÊ DEMOROU MUITO PARA RESPONDER\n\n");
    }, 5000)
})

    /* SEGUNDA AJUDA*/

    segundaAjuda2.addEventListener('click', segundaAjuda);

    var helpPlayer = document.querySelector(".helpPlayer");
    var AjudaLimitePrimeiro = document.getElementById('AjudaLimitePrimeiro');
    
   

    function segundaAjuda(){
        segundofimGame.innerHTML = "Voçê foi ajudado !!";
        segundofimGame.style.color = "red";
        segundofimGame.style.fontWeight = "normal";
        segundofimGame.style.fontSize = "24px";
        segundaPergunta1.style.backgroundColor = "red";
        segundaPergunta2.style.backgroundColor = "green";
        segundaPergunta3.style.backgroundColor = "green";
        segundaPergunta4.style.backgroundColor = "red";
        segundaPergunta1.style.color = "black";
        segundaPergunta4.style.color = "black";
        segundaPergunta2.style.color = "white";
        segundaPergunta3.style.color = "white";
        
    }

