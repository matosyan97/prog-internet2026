// alert('Hello, welcome to my mini-site!')
// This is a comment in JavaScript. It will not be executed by the browser.
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    console.log('Form submitted!'); // Log a message to the console
    
    const nome = document.getElementById('nome').value;
    console.log(nome);
    alert(nome);

    if (nome.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return;
    }

    if (!email.includes("@")) {
        alert("Email inválido.");
        return;
}


});

document.getElementById("btnAlerta").addEventListener("click", function() {
    alert("Olá! JavaScript funcionando!");
});

document.getElementById("btnCor").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});

document.getElementById("btnConteudo").addEventListener("click", function() {
    document.getElementById("conteudo").innerHTML =
        "Texto alterado com JavaScript!";
});

