
/*
Crie uma função calculadora
A função recebe dois valores e um operador (+, -, *, /)
A função retorna o resultado do calculo
*/

// meu código 

// function Calculadora() {

//         let a = prompt("Insira o número: ");
//         a = parseInt(a)
      
//         let b = prompt("Insira o número: ");
//         b = parseInt(b)

//         let operador = prompt("Selecione o operador: \n + \n - \n * \n / \n");

//         if (operador == `+`) { 
//             let soma = a + b ;
//             alert(soma)

//         } else if (operador == `-` ) {
//             let subtracao = a - b;
//             alert(subtracao)

//         } else if (operador == `*`) {
//             let multiplicacao = a * b;
//             alert(multiplicacao)

//         } else if (operador == `/`) {
//             if (b == `0` ) {
//                 alert(`IMPOSSÍVEL DIVIDIR POR ZERO !`)
//             }
//             let divisao = a/b ; 
//             alert(divisao)

//         } else 
//             alert(`Opção inválida, escolha um operados válido !`)     
// }

// Calculadora()


// // Professor

function calculadora(num1, num2, operador) { 
    if(operador === "+") {
        return  num1 + num2;
    } else if(operador === "-") {
        return num1 - num2;
    } else if (operador === "*") {
        return num1 * num2;
    } else if (operador === "/") {
        if(num2 === 0) {
            return 0;
        }
        return num1 / num2;
    } else {
        return "Operação inválida";
    }
}

function exibirResultados() {

    // Pega os dados em tela 
    let numero1 = parseFloat(document.getElementById("numero1").value);

    let numero2 = parseFloat(document.getElementById("numero2").value);

    let operacao = document.getElementById("operacao").value;

    // Manda para a calculadora

    let resultado = calculadora = calculadora(numero1, numero2, operacao); 

    // Exibe o resultado em tela
    document.getElementById("resultado").innerText = resultado;

}