document.getElementById("saveUserForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const tipoUsuario = document.getElementById("tipoUsuario").value;
    const permissoes = Array.from(document.querySelectorAll('input[name="permissions"]:checked')).map(el => el.value);

    // Aqui você pode fazer uma chamada para o backend para salvar os dados do usuário
    if (nome && email && senha && tipoUsuario) {
        // Exemplo de chamada a API
        console.log({
            nome,
            email,
            senha,
            tipoUsuario,
            permissoes
        });
        alert("Usuário salvo com sucesso!");
        window.location.href = "gerenciamento-usuarios.html"; // Redireciona de volta para a lista de usuários
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
