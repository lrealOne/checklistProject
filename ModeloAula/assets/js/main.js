const form = document.querySelector("#form");

form.addEventListener("submit", function (evento) {
evento.preventDefault();

const inputPeso = evento.target.querySelector("#peso");
const inputAltura = evento.target.querySelector("#altura");

const peso = Number(inputPeso.value)
const altura = Number(inputAltura.value)

if (!peso && !altura){
    setResult("Respostas invalidas. Tente novamente", false)
    return;
}

if (!peso) {
    setResult("Peso invalido", false);
    return;
}

if (!altura) {
    setResult("altura invalida", false);
    return;
}

const imc = getImc(peso, altura)
const nivelImc = getNivel(imc)

const message = `Seu IMC é ${imc}, ${nivelImc}`;
setResult(message, true)
});

//função para checar o nivel do imc
const getNivel = (imc) => {
    const nivel = ["abaixo do peso", "peso normal", "sobrepeso", 
        "obesidade grau 1", "obesidade grau 2", "obesidade grau 3"
    ]

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]

}

// função para calcular o imc
const getImc = (peso, altura) => {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// função criar paragrafo
const criaP = () => {
    const p = document.createElement("p");
    return p;
};

// setando resultado
const setResult = (message, isValid) => {
    const result = document.querySelector("#resultado");
    result.innerHTML = (" ");

    const p = criaP();

    if (isValid) {
        p.classList.add("paragrafoResultado");
    } else {
        p.classList.add("bad");
    }

    p.innerHTML = message;
    result.appendChild(p);
}