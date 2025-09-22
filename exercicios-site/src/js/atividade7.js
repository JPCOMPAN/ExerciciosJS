function contarLetras(palavra) {
    const vogais = "aeiou";
    let v = 0, c = 0;
    for (const letra of palavra.toLowerCase()) {
        if (letra >= 'a' && letra <= 'z') {
            if (vogais.includes(letra)) v++;
            else c++;
        }
    }
    return { vogais: v, consoantes: c };
}

document.getElementById("formContador").addEventListener("submit", function(e) {
    e.preventDefault();
    const palavra = document.getElementById("palavra").value;
    const resultado = contarLetras(palavra);
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<strong>Vogais:</strong> ${resultado.vogais} <br>
        <strong>Consoantes:</strong> ${resultado.consoantes}`;
});

// Renderiza o alfabeto colorido
const alfabetoDiv = document.getElementById("alfabeto");
const letras = "abcdefghijklmnopqrstuvwxyz";
letras.split("").forEach(l => {
    const span = document.createElement("span");
    span.textContent = l.toUpperCase();
    span.className = "letra " + ("aeiou".includes(l) ? "vogal" : "consoante");
    alfabetoDiv.appendChild(span);
});
