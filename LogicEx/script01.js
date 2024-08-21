// exercicios para treinar logica.

/* verificar maior numero
 const numeroMaior = (n1, n2) => {
    let error = "Erro";
    if (n1 === n2){
        return error;
    }
    return n1 > n2 ? n1 : n2;
}


Imagem paisagem? True or False

const ePaisagem = (altura, largura) => {
    return altura > largura;
}

console.log(ePaisagem(202, 300))

*/

// num / 3 = fizz;
// num / 5 = buzz;
// num / 3 e 5 = fizzbuzz;
// num !/ 3 ou 5 = retorna num;
// check num == number;

/*
const tryNumbers = (num) => {
    if (isNaN(num)) {
        let string_ = "Erro";
        return string_;
    } else {
        if (num % 3 === 0 && num % 5 === 0) {
            return "FizzBuzz"
        } else if (num % 3 === 0) {
            return "Fizz";
        } else if (num % 5 === 0) {
            return "Buzz";
        } else {
            return num;
        }
    }
}

for (let i = 0; i <= 100; i++) {
    console.log(i, tryNumbers(i));
}

console.log(tryNumbers("LUAN"))

*/