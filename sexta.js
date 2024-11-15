
var sextaPergunta1 = document.querySelector(".sextaPergunta1");
var sextaPergunta2 = document.querySelector(".sextaPergunta2");
var sextaPergunta3 = document.querySelector(".sextaPergunta3");
var sextaPergunta4 = document.querySelector(".sextaPergunta4");
var sextoponto = document.getElementById("sextoPontos");
var sextoprogresso6 = document.querySelector(".sextoProgresso6");
var sextofimGame = document.getElementById("sextoFim");
var sextaAjuda6 = document.getElementById('sextaAjuda');
var sextofundo_errado = document.querySelector('.sextofundo-errado');
var sextoCerto = document.querySelector('.sexto_certo');

var Certosound = document.getElementById('Certo-sound'); 
sextoprogresso6.style.width = "100px";

sextaPergunta1.addEventListener('click', ()=>{
   sextofundo_errado.classList.add('errado');
})

sextaPergunta2.addEventListener('click', ()=>{
   sextofundo_errado.classList.add('errado');
})

sextaPergunta3.addEventListener('click', ()=>{
    sextoCerto.classList.add('certo6');
    Certosound.play();
})

sextaPergunta4.addEventListener('click', ()=>{
    sextofundo_errado.classList.add('errado');
 })
 

function sextaAjuda(){
    sextofimGame.innerHTML = "Voçê foi ajudado !!";
    sextofimGame.style.color = "black";
    sextofimGame.style.fontWeight = "normal";
    sextofimGame.style.fontSize = "24px";
    sextaPergunta1.style.backgroundColor = "green";
    sextaPergunta1.style.color = "white";
    sextaPergunta2.style.backgroundColor = "green";
    sextaPergunta2.style.color = "white";
    sextaPergunta3.style.backgroundColor = "green";
    sextaPergunta3.style.color = "white";
    sextaPergunta4.style.display = "none";
    sextaPergunta4.style.color = "black";
    }
