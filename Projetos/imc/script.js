function calcular() {
    const nome = document.getElementById("nome").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");

    if (!nome || isNaN(peso) || isNaN(altura)) {
        resultado.textContent = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    let result = peso / (altura * altura);

    if (result < 18.5) {
        resultado.textContent = `${nome}, seu IMC foi ${result.toFixed(2)}. Você está abaixo do peso ideal. Foque em ganhar peso.`;
    } else if (result >= 18.5 && result <= 24.9) {
        resultado.textContent = `${nome}, seu IMC foi ${result.toFixed(2)}. Você está com o peso ideal. Continue assim!`;
    } else if (result >= 25 && result <= 29.9) {
        resultado.textContent = `${nome}, seu IMC foi ${result.toFixed(2)}. Você está com sobrepeso. Tente melhorar seus hábitos.`;
    } else if (result >= 30 && result <= 34.9) {
        resultado.textContent = `${nome}, seu IMC foi ${result.toFixed(2)}. Você está com obesidade grau 1. Procure um profissional de saúde.`;
    } else if (result >= 35 && result <= 39.9) {
        resultado.textContent = `${nome}, seu IMC foi ${result.toFixed(2)}. Você está com obesidade grau 2. É importante buscar acompanhamento médico.`;
    } else {
        resultado.textContent = `${nome}, seu IMC foi ${result.toFixed(2)}. Você está com obesidade grau 3. Procure ajuda médica com urgência.`;
    }
}