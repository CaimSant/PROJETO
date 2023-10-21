document.querySelectorAll('nav ul li a').forEach(function (element) {
    element.addEventListener('click', function () {
        // Remover a classe 'active' de todos os links
        document.querySelectorAll('nav ul li a').forEach(function (innerElement) {
            innerElement.classList.remove('active');
        });

        // Adicionar a classe 'active' ao link clicado
        this.classList.add('active');
    });
});


const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}


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
                    <img src="imgs/Comedy.webp" alt="Comedy">
                    <button class="btn-genrs">
                        <h3>Comédia</h3>
                    </button>
                </div>
                <div class="choice-container">
                    <img src="imgs/Avatar.webp" alt="Adventure">
                    <button class="btn-genrs">
                        <h3>Aventura</h3>
                    </button>
                </div>
                <div class="choice-container">
                    <img src="imgs/Romance.jpg" alt="Romance">
                    <button class="btn-genrs">
                        <h3>Romance</h3>
                    </button>
                </div>
        
        `;
    } else if (genero === "horror") {
        filmesContainer.innerHTML = `
            
                <div class="choice-container">
                    <img src="imgs/Comedy.webp" alt="Comedy">
                    <button class="btn-genrs">
                        <h3>ASDASD</h3>
                    </button>
                </div>
                <div class="choice-container">
                    <img src="imgs/Avatar.webp" alt="Adventure">
                    <button class="btn-genrs">
                        <h3>ASDAS</h3>
                    </button>
                </div>
                <div class="choice-container">
                    <img src="imgs/Romance.jpg" alt="Romance">
                    <button class="btn-genrs">
                        <h3>DASDAS</h3>
                    </button>
                </div>
        
        `;
    }
}