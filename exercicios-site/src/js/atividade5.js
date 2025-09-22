function analisarNumeros(arrayDeNumeros) {
    if (!Array.isArray(arrayDeNumeros) || arrayDeNumeros.length === 0) {
        return { maior: null, menor: null, media: null };
    }
    let maior = arrayDeNumeros[0];
    let menor = arrayDeNumeros[0];
    let soma = 0;
    arrayDeNumeros.forEach(num => {
        if (num > maior) maior = num;
        if (num < menor) menor = num;
        soma += num;
    });
    const media = soma / arrayDeNumeros.length;
    return { maior, menor, media: Math.round(media * 100) / 100 };
}

document.getElementById("formAnalisador").addEventListener("submit", function(e) {
    e.preventDefault();
    const entrada = document.getElementById("numeros").value;
    // Aceita números separados por vírgula ou espaço
    const array = entrada.split(/[,\s]+/).map(n => Number(n)).filter(n => !isNaN(n));
    const resultado = analisarNumeros(array);
    const resultadoDiv = document.getElementById("resultado");
    if (array.length === 0) {
        resultadoDiv.textContent = "Digite pelo menos um número válido.";
    } else {
        resultadoDiv.innerHTML = `<strong>Maior:</strong> ${resultado.maior} <br>
        <strong>Menor:</strong> ${resultado.menor} <br>
        <strong>Média:</strong> ${resultado.media}`;
    }
});
