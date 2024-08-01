const form = document.querySelector("#form");

form.addEventListener("submit", function (evento) {

evento.preventDefault();

const inputPeso = evento.target.querySelector("#peso");
const inputAltura = evento.target.querySelector("#altura");

const peso = Number(inputPeso.value)
const altura = Number(inputAltura.value)

if (!peso) {
    setResult("Peso invalido", false);
    return;
}

if (!altura) {
    setResult("altura invalida", false);
    return;
}

console.log(peso, altura)
});

const criaP = () => {
    const p = document.createElement("p");
    return p;
};


const setResult = (message, isValid) => {
    const result = document.querySelector("#resultado");
    result.innerHTML = (" ");
    const p = criaP();
    p.innerHTML = message;
    result.appendChild(p);
}