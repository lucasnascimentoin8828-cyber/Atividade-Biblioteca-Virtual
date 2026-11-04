const pesquisa = document.getElementById("pesquisa");
const livros = document.querySelectorAll(".livro");

pesquisa.addEventListener("input", function() {

    const texto = pesquisa.value.toLocaleLowerCase();

    livros.forEach(function(livro) {

        const titulo = livro.textContent.toLocaleLowerCase();

        if (titulo.includes(texto)) {
            livro.hidden = false;
        } else {
            livro.hidden = true;
        }

    });

});


const formulario = document.getElementById("formulario");
const titulo = document.getElementById("titulo");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    if (titulo.value.trim().length < 3) {
        mensagem.textContent = "Digite um título com pelo menos 3 caracteres.";
    } else {
        mensagem.textContent = "Sugestão enviada com sucesso!";
        formulario.reset();
    }

});
