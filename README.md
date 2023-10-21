# PROJETO

Escolhi o Modelo 2 para criar a interface do meu site, utilizando HTML, CSS e JavaScript. Optei por criar um site onde o usuário pode escolher entre seis gêneros de filmes. Após a escolha, o sistema recomenda três filmes do gênero selecionado. Em seguida, quando o usuário escolhe um filme específico, a sinopse e o trailer desse filme são exibidos.

No JavaScript, criei uma função que alternar a exibição entre dois contêineres de gêneros: "options-container1" e "options-container2". Isso acontece quando o botão com o ID "btn-moreOptions" é clicado. A função realiza essa alternância ajustando as propriedades "display" dos contêineres e adicionando ou removendo a classe "hidden" para garantir uma transição suave entre eles.

Além disso, criei outras funções para mostrar filmes e sinopses. Quando o usuário seleciona um gênero, a função "mostrarFilmes" injeta o conteúdo HTML apropriado na página, e quando um filme específico é selecionado, a função "mostrarSinopse" realiza a troca de conteúdos para exibir a sinopse e o trailer desse filme.

Também implementei funções para garantir que apenas um link de navegação tenha a classe "active" de cada vez, tornando mais claro qual seção está atualmente visível na página à medida que o usuário rola a página.
