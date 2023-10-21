# Desenvolvimento da Interface do Site de Recomendação de Filmes

## Modelo de Interface: Modelo 2

### Tecnologias Utilizadas:
- HTML
- CSS
- JavaScript

### Descrição:
Optei por criar um site onde o usuário pode escolher entre seis gêneros de filmes. Após a escolha, o sistema recomenda três filmes do gênero selecionado. Em seguida, quando o usuário escolhe um filme específico, a sinopse e o trailer desse filme são exibidos.

### Funcionalidades em JavaScript:

#### Alternância de Gêneros:
```javascript
function alternarGeneros() {
    // Código para alternar entre "options-container1" e "options-container2"
    // quando o botão com o ID "btn-moreOptions" é clicado.
}
function mostrarFilmes(generoSelecionado) {
    // Código para exibir filmes do gênero selecionado.
}

function mostrarSinopse(filmeSelecionado) {
    // Código para exibir a sinopse e o trailer do filme selecionado.
}
document.querySelectorAll('nav ul li a').forEach(function (element) {
    // Código para ativar links de navegação com base na seção visível.
});
