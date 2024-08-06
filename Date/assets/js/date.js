// Date Object 

const zeroAEsquerda = (num) => {
    return num >= 10 ? num : `0${num}`;
}

// const dataBrasil = (data) => {
//     let day = zeroAEsquerda(data.getDate());
//     let month = zeroAEsquerda(data.getMonth());
//     let year = zeroAEsquerda(data.getFullYear());
//     let hour = zeroAEsquerda(data.getHours());
//     let min = zeroAEsquerda(data.getMinutes());
//     let sec = zeroAEsquerda(data.getSeconds());
    
//     return `${day}/${month}/${year} ${hour}:${min}:${sec}`
// }


let diaSemanaComplete = (dia) => {
    let diaSemana;

    switch (dia) {
    case 0:
        diaSemana = "Domingo"
        return diaSemana;
    case 1:
        diaSemana = "Segunda-feira"
        return diaSemana;
    case 2:
        diaSemana = "Terça-feira"
        return diaSemana;
    case 3:
        diaSemana = "Quarta-feira"
        return diaSemana;
    case 4:
        diaSemana = "Quinta-feira"
        return diaSemana;
    case 5:
        diaSemana = "Sexta-feira"
        return diaSemana;
    case 6:
        diaSemana = "Sábado"
        return diaSemana;
}};

let diaComplete = (dia) => {
    return dia.getDate();
}

let mesComplete = (mes) => {
    let mesAtual;
    switch (mes) {
        case 0:
            mesAtual =  "Janeiro"
            return mesAtual;
        case 1:
            mesAtual = "Fevereiro"
            return mesAtual;
        case 2:
            mesAtual = "Março"
            return mesAtual;
        case 3:
            mesAtual = "Abril"
            return mesAtual;
        case 4:
            mesAtual = "Maio"
            return mesAtual;
        case 5:
            mesAtual = "junho"
            return mesAtual;
        case 6:
            mesAtual = "Julho"
            return mesAtual;
        case 7:
            mesAtual = "Agosto"
            return mesAtual;
        case 8:
            mesAtual = "Setembro"
            return mesAtual;
        case 9:
            mesAtual = "Outubro"
            return mesAtual;
        case 10:
            mesAtual = "Novembro"
            return mesAtual;
        case 11:
            mesAtual = "Dezembro"
            return mesAtual;
    }
};

let anoComplete = (ano) => {
    return ano.getFullYear();
}

let dataFull = (data) => {
    let diaSemana = diaSemanaComplete(data.getDay());
    let diaNum = diaComplete(data)
    let mesNum = mesComplete(data.getMonth())
    let ano = anoComplete(data)
    let horas = [data.getHours(), data.getMinutes(), data.getSeconds()].join(":")

    return [`${diaSemana}, ${diaNum} de ${mesNum} de ${ano}, às ${horas} `]
}

const data = new Date();
const diatodo = dataFull(data)


const h1 = document.querySelector(".container h1");
h1.innerHTML = diatodo;




