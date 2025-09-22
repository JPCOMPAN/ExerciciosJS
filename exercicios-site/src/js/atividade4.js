function validarUsuario(usuario) {
    const erros = [];
    if (!usuario.nome || usuario.nome.trim() === "") {
        erros.push("Nome não pode estar vazio.");
    }
    if (!usuario.email || !usuario.email.includes("@")) {
        erros.push("Email deve conter '@'.");
    }
    if (!usuario.senha || usuario.senha.length <= 6) {
        erros.push("Senha precisa ter mais de 6 caracteres.");
    }
    return erros.length === 0 ? true : erros;
}

document.getElementById("formValidador").addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const resultado = validarUsuario({ nome, email, senha });
    const mensagens = document.getElementById("mensagens");
    mensagens.innerHTML = "";
    if (resultado === true) {
        mensagens.innerHTML = '<li style="color: #2ecc40; font-weight: bold;">Usuário válido!</li>';
    } else {
        resultado.forEach(msg => {
            const li = document.createElement("li");
            li.textContent = msg;
            mensagens.appendChild(li);
        });
    }
});
