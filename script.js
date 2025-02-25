document.addEventListener("DOMContentLoaded", function() {
    // Carregar "sobre.html"
    fetch("sobre.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("sobre").innerHTML = data;
    })
    .catch(error => console.error("Erro ao carregar a página Sobre:", error));

    // Carregar "projetos.html"
    fetch("projetos.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("projetos").innerHTML = data;
    })
    .catch(error => console.error("Erro ao carregar a página Projetos:", error));

    // Carregar "tecnologias.html"
    fetch("tecnologias.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("tecnologias").innerHTML = data;
    })
    .catch(error => console.error("Erro ao carregar a página Projetos:", error));

    // Carregar "carreira.html"
    fetch("carreira.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("carreira").innerHTML = data;
    })
    .catch(error => console.error("Erro ao carregar a página Projetos:", error));

    fetch("contatos.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("contatos").innerHTML = data;
    })
    .catch(error => console.error("Erro ao carregar a página Projetos:", error));
});