
const page1 = document.querySelector(".page1")
const page2 = document.querySelector(".page2")
const OpenCookie = document.querySelector("#OpenCookie")
const btnReset= document.querySelector("#btnReset")
let randomNumber = Number(Math.round(Math.random()*10))
let phrases = [
    "Sorte é torcer para o Sport!",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
    "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
    "Todas as coisas são difíceis antes de se tornarem fáceis.",
    "Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho.",
]


OpenCookie.addEventListener("click", OpenClick)
btnReset.addEventListener("click", ResetClick)

function togglePage() {
    page1.classList.toggle("hide")
    page2.classList.toggle("hide")
}

function OpenClick(event) {
    event.preventDefault();
    togglePage();
    randomNumber = Number(Math.round(Math.random()*10))
    page2.querySelector("p").innerText = phrases[randomNumber]
    
}

function ResetClick() {
    togglePage();
}

