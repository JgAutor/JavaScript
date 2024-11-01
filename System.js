function calcular(operações) {
    const numberOne = parseFloat(document.getElementById("numberOne").value);
    const numberTwo = parseFloat(document.getElementById("numberTwo").value);
    let result;

    if (isNaN(numberOne) || isNaN(numberTwo)) {
        result = "Insira ambos os valores para continuar";
    } else {
        switch (operações) {

            case 'soma':
                result = numberOne + numberTwo;
                break;
            
            case 'subtrair':
                result = numberOne - numberTwo;
                break;

            case 'multiplicar':
                result = numberOne * numberTwo;
                break;
            
            case 'dividir':
                result = numberTwo !== 0 ? numberOne / numberTwo : "Erro: Divisão por zero";
                break;

            default:
                result = "Operação inválida";
        }
    }

    document.getElementById("result").innerText = "O resultado é " + result;
}