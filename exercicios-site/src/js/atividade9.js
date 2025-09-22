function encontrarMaiorPalavra(frase) {
    if (typeof frase !== "string" || frase.trim() === "") return "";
    const palavras = frase.split(/\s+/);
    let maior = "";
    for (const p of palavras) {
        if (p.length > maior.length) maior = p;
    }
    return maior;
}

document.getElementById("formLocalizador").addEventListener("submit", function(e) {
    e.preventDefault();
    const frase = document.getElementById("frase").value;
    const resultado = encontrarMaiorPalavra(frase);
    const resultadoDiv = document.getElementById("resultado");
    if (resultado) {
        resultadoDiv.innerHTML = `<strong>Maior palavra:</strong> <span style='color:#2d5fa3;font-size:1.2em;'>${resultado}</span>`;
    } else {
        resultadoDiv.textContent = "Digite uma frase válida.";
    }
});
