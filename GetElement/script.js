console.log("sexo")
const number = prompt("Digite um numero: ");
let userNum = document.getElementById("userNum");

userNum.innerText = number;    

let squareRoot = document.getElementById("squareRoot");
squareRoot.innerText= number ** (1/2);