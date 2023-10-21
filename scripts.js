document.querySelectorAll('nav ul li a').forEach(function (element) {
    element.addEventListener('click', function () {
       
        document.querySelectorAll('nav ul li a').forEach(function (innerElement) {
            innerElement.classList.remove('active');
        });

        
        this.classList.add('active');
    });
});

const sections = document.querySelectorAll('main section[id]')

function activatemenuAtCurrenteSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight/8)*4

  for(const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd){
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active')
    }else{
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  activatemenuAtCurrenteSection();
})

document.addEventListener('DOMContentLoaded', () => {
    const swapButton = document.getElementById('btn-moreOptions');

    swapButton.addEventListener('click', () => {
        const container1 = document.getElementById('options-container1');
        const container2 = document.getElementById('options-container2');

        if (container2.style.display === 'none') {
            setTimeout(() => container1.classList.add('hidden'), 1);
            container1.style.display = 'none';
            container2.style.display = 'flex';
            setTimeout(() => container2.classList.remove('hidden'), 1);

        } else {
            setTimeout(() => container2.classList.add('hidden'), 1);
            container2.style.display = 'none';
            container1.style.display = 'flex';
            setTimeout(() => container1.classList.remove('hidden'), 1);
        }
    });
});

function mostrarFilmes(genero) {
    const filmesContainer = document.getElementById('options-genrs');
    if (genero === "action") {
        filmesContainer.innerHTML = `
            
                <div class="choice-container">
                    <img src="imgs/madmax.jpg" alt="Mad Max">
                    <div id="madmax">
                            <a href="#synopsis">
                                <button onclick="mostrarSinopse('madmax')" class="btn-genrs">
                                    <h3>Mad Max</h3>
                                </button>
                            </a>
                    </div>
                </div>
                <div class="choice-container">
                    <img src="imgs/batman.webp" alt="O Cavaleiro das Trevas">
                    <div id="cavaleiro">
                            <a href="#synopsis">
                                <button onclick="mostrarSinopse('cavaleiro')" class="btn-genrs">
                                    <h3>O Cavaleiro das Trevas</h3>
                                </button>
                            </a>
                    </div>
                </div>
                <div class="choice-container">
                    <img src="imgs/killbill.jpg" alt="Kill Bill - Volume 1">
                    <div id="killbill">
                            <a href="#synopsis">
                                <button onclick="mostrarSinopse('killbill')" class="btn-genrs">
                                    <h3>Kill Bill - Volume 1</h3>
                                </button>
                            </a>
                    </div>
                </div>
        
        `;
    } else if (genero === "horror") {
        filmesContainer.innerHTML = `
            
                <div class="choice-container">
                    <img src="imgs/invocacao.webp" alt="Invocação do Mal">
                    <div id="invocacao">
                            <a href="#synopsis">
                                <button onclick="mostrarSinopse('invocacao')" class="btn-genrs">
                                    <h3>Invocação do Mal</h3>
                                </button>
                            </a>
                    </div>
                </div>
                <div class="choice-container">
                    <img src="imgs/hallowen.jpg" alt="Halloween - A Noite do Terror">
                    <div id="halloween">
                            <a href="#synopsis">
                                <button onclick="mostrarSinopse('halloween')" class="btn-genrs">
                                    <h3>Halloween - A Noite do Terror</h3>
                                </button>
                            </a>
                    </div>
                </div>
                <div class="choice-container">
                    <img src="imgs/atividade.webp" alt="Romance">
                    <div id="atividade">
                            <a href="#synopsis">
                                <button onclick="mostrarSinopse('atividade')" class="btn-genrs">
                                    <h3>Atividade Paranormal</h3>
                                </button>
                            </a>
                    </div>
                </div>
        
        `;
    } else if (genero === "sci-fi") {
        filmesContainer.innerHTML = `
            
                <div class="choice-container">
                    <img src="imgs/matrix1.jpg" alt="Comedy">
                    <div id="matrix">
                            <a href="#synopsis">
                                <button onclick="mostrarSinopse('matrix')" class="btn-genrs">
                                    <h3>Matrix</h3>
                                </button>
                            </a>
                    </div>
                </div>
                <div class="choice-container">
    <img src="imgs/vingadores.jpg" alt="Vingadores: Ultimato">
    <div id="vingadores">
            <a href="#synopsis">
                <button onclick="mostrarSinopse('vingadores')" class="btn-genrs">
                    <h3>Vingadores: Ultimato</h3>
                </button>
            </a>
    </div>
</div>
<div class="choice-container">
    <img src="imgs/starwars.jpg" alt="Star Wars: Episódio IV – Uma Nova Esperança">
    <div id="starwars">
            <a href="#synopsis">
                <button onclick="mostrarSinopse('starwars')" class="btn-genrs">
                    <h3>Star Wars: Episódio IV </h3>
                </button>
            </a>
    </div>
</div>

`;
    } else if (genero === "comedy") {
        filmesContainer.innerHTML = `

<div class="choice-container">
    <img src="imgs/gente.jpg" alt="Gente Grande">
    <div id="gente">
            <a href="#synopsis">
                <button onclick="mostrarSinopse('gente')" class="btn-genrs">
                    <h3>Gente Grande</h3>
                </button>
            </a>
    </div>
</div>
<div class="choice-container">
    <img src="imgs/beber.jpg" alt="Se Beber, Não Case!">
    <div id="beber">
            <a href="#synopsis">
                <button onclick="mostrarSinopse('beber')" class="btn-genrs">
                    <h3>Se Beber, Não Case!</h3>
                </button>
            </a>
    </div>
</div>
<div class="choice-container">
    <img src="imgs/branquelas.jpeg" alt="As Branquelas">
    <div id="branquelas">
            <a href="#synopsis">
                <button onclick="mostrarSinopse('branquelas')" class="btn-genrs">
                    <h3>As Branquelas</h3>
                </button>
            </a>
    </div>
</div>

`;
    } else if (genero === "adventure") {
        filmesContainer.innerHTML = `

<div class="choice-container">
    <img src="imgs/harry.webp" alt="Harry Potter e o Cálice de Fogo">
    <div id="harry">
            <a href="#synopsis">
                <button onclick="mostrarSinopse('harry')" class="btn-genrs">
                    <h3>Harry Potter e o Cálice de Fogo</h3>
                </button>
            </a>
    </div>
</div>
<div class="choice-container">
    <img src="imgs/rings.jpg" alt="O Senhor dos Anéis: O Retorno do Rei">
    <div id="rings">
            <a href="#synopsis">
                <button onclick="mostrarSinopse('rings')" class="btn-genrs">
                    <h3>O Senhor dos Anéis: O Retorno do Rei</h3>
                </button>
            </a>
    </div>
</div>
<div class="choice-container">
    <img src="imgs/hunger.jpg" alt="Jogos Vorazes">
    <div id="hunger">
            <a href="#synopsis">
                <button onclick="mostrarSinopse('hunger')" class="btn-genrs">
                    <h3>Jogos Vorazes: A Esperança </h3>
                </button>
            </a>
    </div>
</div>

`;
    } else if (genero === "romance") {
        filmesContainer.innerHTML = `

<div class="choice-container">
    <img src="imgs/estrelas.jpg" alt="Comedy">
    <div id="estrelas">
            <a href="#synopsis">
                <button onclick="mostrarSinopse('estrelas')" class="btn-genrs">
                    <h3>A Culpa É das Estrelas</h3>
                </button>
            </a>
    </div>
</div>
<div class="choice-container">
    <img src="imgs/diario.jpg" alt="Adventure">
    <div id="diario">
            <a href="#synopsis">
                <button onclick="mostrarSinopse('diario')" class="btn-genrs">
                    <h3>Diário de uma Paixão</h3>
                </button>
            </a>
    </div>
</div>
<div class="choice-container">
    <img src="imgs/primeiravez.jpg" alt="Romance">
    <div id="primeiravez">
            <a href="#synopsis">
                <button onclick="mostrarSinopse('primeiravez')" class="btn-genrs">
                    <h3>Como Se Fosse a Primeira Vez</h3>
                </button>
            </a>
    </div>
</div>

`;

    }
}


// -------------------------------------------------------------------- SINOPSES-------------------------------------------------------------------------------
function mostrarSinopse(filme) {
    const filmesContainer = document.getElementById('info-container');
    if (filme === "madmax") {
        filmesContainer.innerHTML = `
     <div class="textSynopsis-container">
        <ul>
            <div class="text-synopsi">
                <li class="synopsis-title">
                    Sinopse
                </li>
                <li class="name-movie">
                    Mad Max: Estrada da Fúria
                </li>
                <li>
                    <p>Em um mundo pós-apocalíptico, Max Rockatansky acredita que a melhor forma de
                        sobreviver é não depender de ninguém. Porém, após ser capturado pelo tirano
                        Immortan
                        Joe e seus rebeldes, Max se vê no meio de uma guerra mortal iniciada pela
                        Imperatriz
                        Furiosa, que tenta salvar um grupo de garotas. Também tentando fugir, Max aceita
                        ajudá-la.</p>
                </li>
            </div>
            <div class="bottom-info">
                <li>

                    <a href="https://www.rottentomatoes.com/m/mad_max_fury_road" class="rotten-btn"
                        target="_blank">
                        <img src="imgs/rotten.png" alt="Rotten Tomatoes" />
                    </a>
                </li>
            </div>
        </ul>
    </div>
    <div class="trailer-container">
        <iframe src="https://www.youtube.com/embed/hEJnMQG9ev8"
            title="Mad Max: Fury Road - Official Main Trailer [HD]" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
    </div>`

    } else if (filme === "killbill") {
        filmesContainer.innerHTML = `
        <div class="textSynopsis-container">
        <ul>
        <div class="text-synopsi">
            <li class="synopsis-title">
                 Sinopse
            </li>
            <li class="name-movie">
            Kill Bill - Volume 1
            </li>
            <li>
                <p>A ex-assassina conhecida apenas como Noiva acorda de um coma de quatro anos decidida a se vingar de Bill, seu ex-amante e chefe, que tentou matá-la no dia do casamento. Ela está motivada a acertar as contas com cada uma das pessoas envolvidas com a perda da filha, da festa de casamento e dos quatro anos de sua vida. Na jornada, a Noiva é submetida a dores físicas agonizantes ao enfrentar a inescrupulosa gangue de Bill, o Esquadrão Assassino de Víboras Mortais.</p>
            </li>
            </div>
                            <div class="bottom-info">
            <li>

                <a href="https://www.rottentomatoes.com/m/kill_bill_vol_1" class="rotten-btn"
                    target="_blank">
                    <img src="imgs/rotten.png" alt="Rotten Tomatoes" />
                </a>
            </li></div>
        </ul>
    </div>
    <div class="trailer-container">
    <iframe width="796" height="448" src="https://www.youtube.com/embed/d48qtYoeIqE" title="Kill Bill: Vol.1 Official Trailer | Uma Thurman | Lucy Liu | Vivica A. Fox | @lionsgateplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`


    }
    else if (filme === "cavaleiro") {
        filmesContainer.innerHTML = `<div class="textSynopsis-container">
        <ul>
        <div class="text-synopsi">
            <li class="synopsis-title">
            
                 Sinopse
            </li>
            <li class="name-movie">
            Batman: O Cavaleiro das Trevas
            </li>
            <li>
                <p>Batman tem conseguido manter a ordem em Gotham com a ajuda de Jim Gordon e Harvey Dent. No entanto, um jovem e anárquico criminoso, conhecido apenas como Coringa, pretende testar o Cavaleiro das Trevas e mergulhar a cidade em um verdadeiro caos.</p>
            </li></div>
            <div class="bottom-info">
            <li>

                <a href="https://www.rottentomatoes.com/m/the_dark_knight" class="rotten-btn"
                    target="_blank">
                    <img src="imgs/rotten.png" alt="Rotten Tomatoes" />
                </a>
            </li></div>
        </ul>
    </div>
    <div class="trailer-container">
    <iframe width="796" height="448" src="https://www.youtube.com/embed/EXeTwQWrcwY" title="The Dark Knight (2008) Official Trailer #1 - Christopher Nolan Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`


    }
    else if (filme === "invocacao") {
        filmesContainer.innerHTML = `<div class="textSynopsis-container">
        <ul>
        <div class="text-synopsi">
            <li class="synopsis-title">
                 Sinopse
            </li>
            <li class="name-movie">
            Invocação do Mal
            </li>
            <li>
                <p>Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por uma entidade demoníaca em sua fazenda.</p>
            </li></div>
            <div class="bottom-info">
            <li>

                <a href="https://www.rottentomatoes.com/m/the_conjuring" class="rotten-btn"
                    target="_blank">
                    <img src="imgs/rotten.png" alt="Rotten Tomatoes" />
                </a>
            </li></div>
        </ul>
    </div>
    <div class="trailer-container">
    <iframe width="796" height="448" src="https://www.youtube.com/embed/GQrrXceHn2E" title="Invocação do Mal - Trailer 1 (leg) [HD] | 13 de setembro nos cinemas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`


    }
    else if (filme === "halloween") {
        filmesContainer.innerHTML = `<div class="textSynopsis-container">
        <ul>
        <div class="text-synopsi">
            <li class="synopsis-title">
                 Sinopse
            </li>
            <li class="name-movie">
            Halloween - A Noite do Terror
            </li>
            <li>
                <p>Em 1963, durante uma noite fria de Halloween, o pequeno Michael Myers, de seis anos, assassina brutalmente sua irmã adolescente, Judith. Ele é condenado e fica detido por 15 anos em uma instituição sob vigilância constante do Dr. Sam Loomis. Em 1978, na véspera de Halloween, Michael rouba um carro e escapa do sanatório Smith's Grove. Ele retorna à sua pacata cidade natal de Haddonfield, Illinois, onde procura suas próximas vítimas.</p>
            </li></div>
            <div class="bottom-info">
            <li>

                <a href="https://www.rottentomatoes.com/m/1009113-halloween" class="rotten-btn"
                    target="_blank">
                    <img src="imgs/rotten.png" alt="Rotten Tomatoes" />
                </a>
            </li></div>
        </ul>
    </div>
    <div class="trailer-container">
    <iframe width="796" height="448" src="https://www.youtube.com/embed/emN1KbD_DxM" title="Halloween - A Noite do Terror (1978) | Trailer Oficial [Legendado]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`


    }
    else if (filme === "atividade") {
        filmesContainer.innerHTML = `<div class="textSynopsis-container">
        <ul> <div class="text-synopsi">
            <li class="synopsis-title">
                 Sinopse
            </li>
            <li class="name-movie">
            Atividade Paranormal
            </li>
            <li>
                <p>Logo após se mudarem para uma nova casa, Katie e Micah ficam intrigados com o que parece ser uma presença sobrenatural que está agindo sobre o lugar. O casal decide capturar o possível fenômeno em vídeo, mas nenhum deles estava preparado para os acontecimentos que se seguem.</p>
            </li></div>
            <div class="bottom-info">
            <li>

                <a href="https://www.rottentomatoes.com/m/paranormal_activity" class="rotten-btn"
                    target="_blank">
                    <img src="imgs/rotten.png" alt="Rotten Tomatoes" />
                </a>
            </li></div>
        </ul>
    </div>
    <div class="trailer-container">
    <iframe width="928" height="522" src="https://www.youtube.com/embed/F_UxLEqd074" title="&quot;Paranormal Activity&quot; - Official Trailer [HQ HD]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`


    }
    else if (filme === "matrix") {
        filmesContainer.innerHTML = `<div class="textSynopsis-container">
        <ul> <div class="text-synopsi">
            <li class="synopsis-title">
                 Sinopse
            </li>
            <li class="name-movie"> 
            Matrix
            </li>
            <li>
                <p>O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a desconfiar da realidade. Thomas conhece os misteriosos Morpheus e Trinity e descobre que é vítima de um sistema inteligente e artificial chamado Matrix.</p>
            </li></div>
            <div class="bottom-info">
            <li>

                <a href="https://www.rottentomatoes.com/m/matrix" class="rotten-btn"
                    target="_blank">
                    <img src="imgs/rotten.png" alt="Rotten Tomatoes" />
                </a>
            </li></div>
        </ul>
    </div>
    <div class="trailer-container">
    <iframe width="928" height="522" src="https://www.youtube.com/embed/2KnZac176Hs" title="Matrix (The Matrix 1999) - Trailer Legendado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`


    }
    else if (filme === "vingadores") {
        filmesContainer.innerHTML = `<div class="textSynopsis-container">
        <ul> <div class="text-synopsi">
            <li class="synopsis-title">
                 Sinopse
            </li>
            <li class="name-movie">
            Vingadores: Ultimato
            </li>
            <li>
                <p>Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.</p>
            </li></div>
            <div class="bottom-info">
            <li>

                <a href="https://www.rottentomatoes.com/m/avengers_endgame" class="rotten-btn"
                    target="_blank">
                    <img src="imgs/rotten.png" alt="Rotten Tomatoes" />
                </a>
            </li></div>
        </ul>
    </div>
    <div class="trailer-container">
    <iframe width="1045" height="436" src="https://www.youtube.com/embed/g6ng8iy-l0U" title="Vingadores: Ultimato | Trailer Legendado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`


    }
    else if (filme === "starwars") {
        filmesContainer.innerHTML = `<div class="textSynopsis-container">
        <ul> <div class="text-synopsi">
            <li class="synopsis-title">
                 Sinopse
            </li>
            <li class="name-movie">
            Star Wars: Episódio IV – Uma Nova Esperança
            </li>
            <li>
                <p>A princesa Leia é mantida refém pelas forças imperiais comandadas por Darth Vader. Luke Skywalker e o capitão Han Solo precisam libertá-la e restaurar a liberdade e a justiça na galáxia.</p>
            </li></div>
            <div class="bottom-info">
            <li>

                <a href="https://www.rottentomatoes.com/m/star_wars_episode_iv_a_new_hope" class="rotten-btn"
                    target="_blank">
                    <img src="imgs/rotten.png" alt="Rotten Tomatoes" />
                </a>
            </li></div>
        </ul>
    </div>
    <div class="trailer-container">
    <iframe width="928" height="522" src="https://www.youtube.com/embed/TlLb07C30To" title="Star Wars IV - Uma nova esperança ( Trailer Moderno Dublado )" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`


    }
    else if (filme === "gente") {
        filmesContainer.innerHTML = `<div class="textSynopsis-container">
        <ul> <div class="text-synopsi">
            <li class="synopsis-title">
                 Sinopse
            </li>
            <li class="name-movie">
            Gente Grande
            </li>
            <li>
                <p>A morte do treinador de basquete de infância de velhos amigos reúne a turma no mesmo lugar que celebraram um campeonato anos atrás. Os amigos, acompanhados de suas esposas e filhos, descobrem que idade não significa o mesmo que maturidade.</p>
            </li></div>
            <div class="bottom-info">
            <li>

                <a href="https://www.rottentomatoes.com/m/grown_ups" class="rotten-btn"
                    target="_blank">
                    <img src="imgs/rotten.png" alt="Rotten Tomatoes" />
                </a>
            </li></div>
        </ul>
    </div>
    <div class="trailer-container">
    <iframe width="928" height="522" src="https://www.youtube.com/embed/HKVve_VSz58" title="Trailer Legendado Gente Grande (Grown Ups)  - HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`


    }
    else if (filme === "beber") {
        filmesContainer.innerHTML = `<div class="textSynopsis-container">
        <ul> <div class="text-synopsi">
            <li class="synopsis-title">
                 Sinopse
            </li>
            <li class="name-movie">
            Se Beber, Não Case!

            </li>
            <li>
                <p>Dois dias antes de seu casamento, Doug e três amigos vão de carro até Las Vegas para uma louca e memorável despedida de solteiro. Quando os três padrinhos acordam na manhã seguinte, eles não conseguem se lembrar de nada e notam que Doug desapareceu. Com pouco tempo de sobra, os amigos tentam refazer a noite anterior e encontrar Doug para que possam levá-lo de volta a Los Angeles a tempo de chegar ao altar.</p>
            </li></div>
            <div class="bottom-info">
            <li>

                <a href="https://www.rottentomatoes.com/m/10010667-hangover" class="rotten-btn"
                    target="_blank">
                    <img src="imgs/rotten.png" alt="Rotten Tomatoes" />
                </a>
            </li></div>
        </ul>
    </div>
    <div class="trailer-container">
    <iframe width="1045" height="446" src="https://www.youtube.com/embed/jOQMBfWMMsU" title="Se Beber, Não Case! - Trailer Teaser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`


    }
    else if (filme === "branquelas") {
        filmesContainer.innerHTML = `<div class="textSynopsis-container">
        <ul> <div class="text-synopsi">
            <li class="synopsis-title">
                 Sinopse
            </li>
            <li class="name-movie">
            As Branquelas
            </li>
            <li>
                <p>Dois irmãos agentes do FBI, Marcus e Kevin Copeland, acidentalmente evitam que bandidos sejam presos em uma apreensão de drogas. Como castigo, eles são forçados a escoltar um par de socialites nos Hamptons. Quando as meninas descobrem o plano da agência, elas se recusam a ir. Sem opções, Marcus e Kevin, dois homens negros, decidem fingir que são as irmãs e se transformam em um par de loiras.</p>
            </li></div>
            <div class="bottom-info">
            <li>

                <a href="https://www.rottentomatoes.com/m/white_chicks" class="rotten-btn"
                    target="_blank">
                    <img src="imgs/rotten.png" alt="Rotten Tomatoes" />
                </a>
            </li></div>
        </ul>
    </div>
    <div class="trailer-container">
    <iframe width="928" height="522" src="https://www.youtube.com/embed/seoJIPLLWp0" title="As Branquelas (2004) | Trailer [Legendado]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`


    }
    else if (filme === "harry") {
        filmesContainer.innerHTML = `<div class="textSynopsis-container">
        <ul> <div class="text-synopsi">
            <li class="synopsis-title">
                 Sinopse
            </li>
            <li class="name-movie">
            Harry Potter e o Cálice de Fogo
            </li>
            <li>
                <p>Harry retorna para seu quarto ano na Escola de Magia e Bruxaria de Hogwarts, junto com os seus amigos Ron e Hermione. Desta vez, acontece um torneio entre as três maiores escola de magia, com um participante selecionado de cada escola, pelo Cálice de Fogo. O nome de Harry aparece, mesmo não tendo se inscrito, e ele precisa competir.</p>
            </li></div>
            <div class="bottom-info">
            <li>

                <a href="https://www.rottentomatoes.com/m/harry_potter_and_the_goblet_of_fire" class="rotten-btn"
                    target="_blank">
                    <img src="imgs/rotten.png" alt="Rotten Tomatoes" />
                </a>
            </li></div>
        </ul>
    </div>
    <div class="trailer-container">
    <iframe width="1045" height="441" src="https://www.youtube.com/embed/cVKkL4O60IM" title="Harry Potter e o Cálice de Fogo - Trailer 1 Dublado (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`


    }
    else if (filme === "rings") {
        filmesContainer.innerHTML = `<div class="textSynopsis-container">
        <ul> <div class="text-synopsi">
            <li class="synopsis-title">
                 Sinopse
            </li>
            <li class="name-movie">
            O Senhor dos Anéis: O Retorno do Rei

            </li>
            <li>
                <p>O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência.</p>
            </li></div>
            <div class="bottom-info">
            <li>

                <a href="https://www.rottentomatoes.com/m/the_lord_of_the_rings_the_return_of_the_king" class="rotten-btn"
                    target="_blank">
                    <img src="imgs/rotten.png" alt="Rotten Tomatoes" />
                </a>
            </li></div>
        </ul>
    </div>
    <div class="trailer-container">
    <iframe width="1045" height="434" src="https://www.youtube.com/embed/y2rYRu8UW8M" title="The Lord of the Rings: The Return of the King (2003) Official Trailer - Sean Astin Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`


    }
    else if (filme === "hunger") {
        filmesContainer.innerHTML = `<div class="textSynopsis-container">
        <ul> <div class="text-synopsi">
            <li class="synopsis-title">
                 Sinopse
            </li>
            <li class="name-movie">
            Jogos Vorazes: A Esperança 
            </li>
            <li>
                <p>Na região antigamente conhecida como América do Norte, a Capital de Panem controla 12 distritos e os força a escolher um garoto e uma garota, conhecidos como tributos, para competir em um evento anual televisionado. Todos os cidadãos assistem aos temidos jogos, no qual os jovens lutam até a morte, de modo que apenas um saia vitorioso. A jovem Katniss Everdeen, do Distrito 12, confia na habilidade de caça e na destreza com o arco, além dos instintos aguçados, nesta competição mortal.</p>
            </li></div>
            <div class="bottom-info">
            <li>

                <a href="https://www.rottentomatoes.com/m/the_hunger_games_mockingjay_part_1" class="rotten-btn"
                    target="_blank">
                    <img src="imgs/rotten.png" alt="Rotten Tomatoes" />
                </a>
            </li></div>
        </ul>
    </div>
    <div class="trailer-container">
    <iframe width="1045" height="444" src="https://www.youtube.com/embed/PbA63a7H0bo" title="The Hunger Games Official Trailer #1 - Movie (2012) HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`


    }
    else if (filme === "estrelas") {
        filmesContainer.innerHTML = `<div class="textSynopsis-container">
        <ul> <div class="text-synopsi">
            <li class="synopsis-title">
                 Sinopse
            </li>
            <li class="name-movie">
             A Culpa É das Estrelas
            </li>
            <li>
                <p>Hazel Grace Lancaster e Augustus Waters são dois adolescentes que se conhecem em um grupo de apoio para pacientes com câncer. Por causa da doença, Hazel sempre descartou a ideia de se envolver amorosamente, mas acaba cedendo ao se apaixonar por Augustus. Juntos, eles viajam para Amsterdã, onde embarcam em uma jornada inesquecível.</p>
            </li></div>
            <div class="bottom-info">
            <li>

                <a href="https://www.rottentomatoes.com/m/the_fault_in_our_stars" class="rotten-btn"
                    target="_blank">
                    <img src="imgs/rotten.png" alt="Rotten Tomatoes" />
                </a>
            </li></div>
        </ul>
    </div>
    <div class="trailer-container">
    <iframe width="928" height="522" src="https://www.youtube.com/embed/lFOOZJ1UChg" title="A Culpa é das Estrelas | Trailer Legendado HD | 2014" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`


    }
    else if (filme === "diario") {
        filmesContainer.innerHTML = `<div class="textSynopsis-container">
        <ul> <div class="text-synopsi">
            <li class="synopsis-title">
                 Sinopse
            </li>
            <li class="name-movie">
            Diário de uma Paixão
            </li>
            <li>
                <p>Na década de 1940, na Carolina do Sul, o operário Noah Calhoun e a rica Allie se apaixonam desesperadamente, mas os pais da jovem não aprovam o namoro. Noah é enviado para lutar na Segunda Guerra Mundial, e parece ser o fim do romance. Enquanto isso, Allie se envolve com outro homem. No entanto, a paixão deles ainda não acabou quando Noah retorna para a pequena cidade anos mais tarde, próximo ao casamento de Allie.</p>
            </li></div>
            <div class="bottom-info">
            <li>

                <a href="https://www.rottentomatoes.com/m/notebook" class="rotten-btn"
                    target="_blank">
                    <img src="imgs/rotten.png" alt="Rotten Tomatoes" />
                </a>
            </li></div>
        </ul>
    </div>
    <div class="trailer-container">
    <iframe width="1045" height="441" src="https://www.youtube.com/embed/BjJcYdEOI0k" title="The Notebook (2004) Official Trailer - Ryan Gosling Movie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`


    }
    else if (filme === "primeiravez") {
        filmesContainer.innerHTML = `<div class="textSynopsis-container">
        <ul> <div class="text-synopsi">
            <li class="synopsis-title">
                 Sinopse
            </li>
            <li class="name-movie">
            Como Se Fosse a Primeira Vez
            </li>
            <li>
                <p> Henry Roth é um veterinário paquerador que vive no Havaí e famoso pelo grande número de turistas que conquista. Seu novo alvo é Lucy Whitmore, que mora no local e por quem Henry se apaixona perdidamente. No entanto, Lucy sofre de falta de memória de curto prazo e se esquece rapidamente de fatos que acabaram de acontecer. Assim, Henry é obrigado a conquistá-la, dia após dia, para ficar ao seu lado.</p>
            </li></div>
            <div class="bottom-info">
            <li>

                <a href="https://www.rottentomatoes.com/m/50_first_dates" class="rotten-btn"
                    target="_blank">
                    <img src="imgs/rotten.png" alt="Rotten Tomatoes" />
                </a>
            </li></div>
        </ul>
    </div>
    <div class="trailer-container">
    <iframe width="928" height="522" src="https://www.youtube.com/embed/Q_2AbjYeSMI" title="50 First Dates (2004) Trailer #1 | Movieclips Classic Trailers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`


    }
}