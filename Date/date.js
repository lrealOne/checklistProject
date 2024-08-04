// Date Object 

const zeroAEsquerda = (num) => {
    return num >= 10 ? num : `0${num}`;
}

const dataBrasil = (data) => {
    let day = zeroAEsquerda(data.getDate());
    let month = zeroAEsquerda(data.getMonth());
    let year = zeroAEsquerda(data.getFullYear());
    let hour = zeroAEsquerda(data.getHours());
    let min = zeroAEsquerda(data.getMinutes());
    let sec = zeroAEsquerda(data.getSeconds());
    
    return `${day}/${month}/${year} ${hour}:${min}:${sec}`
}

const data = new Date();
const databr = dataBrasil(data);
console.log(data, databr)