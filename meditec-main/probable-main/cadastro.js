document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userData = {
        username: this.username.value,
        email: this.email.value,
        password: this.password.value,
        role: this.role.value,
        permissions: this.permissions.value.split(',').map(permission => permission.trim())
    };
    
    // Envie os dados para o servidor (exemplo: usando fetch)
    console.log('Usuário salvo:', userData);
    // Aqui você pode fazer uma requisição para salvar o usuário no seu banco de dados
});

function cancel() {
    if (confirm("Tem certeza que deseja cancelar?")) {
        window.location.href = 'home.html'; // redireciona para a tela inicial ou outra
    }
}
