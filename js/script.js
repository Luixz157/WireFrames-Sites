let currentWireframe = null; // Armazena o wireframe visível atualmente

// Função para remover a classe ativa de todos os itens
function removeActiveClass() {
    document.querySelectorAll('.content-menu .menu-item').forEach(item => {
        item.classList.remove('actve-menu');
    });
}

// Evento para clique nos itens do 'choice'
document.querySelectorAll('.content-projects li').forEach(item => {
    item.addEventListener('click', function () {
        const wireframeId = this.getAttribute('data-wireframe');
        
        // Esconde a seção 'choice'
        document.querySelector('.choice').style.display = 'none';

        // Exibe o wireframe correspondente e atualiza a variável
        currentWireframe = document.querySelector(`#wireframes-${wireframeId}`);
        currentWireframe.style.display = 'block';

        // Exibe o menu-choice
        document.querySelector('.menu-choice').style.display = 'flex';

        // Adiciona a classe ativa ao item correspondente
        removeActiveClass();
        document.querySelector(`.content-menu [data-wireframe="${wireframeId}"]`).classList.add('actve-menu');
    });
});

// Evento para clique nos itens do 'menu-choice'
document.querySelectorAll('.content-menu li').forEach(item => {
    item.addEventListener('click', function () {
        const wireframeId = this.getAttribute('data-wireframe');

        if (this.id === 'home-menu') {
            // Esconde todos os wireframes visíveis
            document.querySelectorAll('[id^="wireframes-"]').forEach(wireframe => {
                wireframe.style.display = 'none';
            });

            // Exibe a seção 'choice' e oculta o menu 'menu-choice'
            document.querySelector('.choice').style.display = 'flex';
            document.querySelector('.menu-choice').style.display = 'none';

            // Remove a classe ativa de todos os itens
            removeActiveClass();

            // Limpa a referência ao wireframe atual
            currentWireframe = null;
        } else {
            // Esconde o wireframe atualmente visível
            if (currentWireframe) {
                currentWireframe.style.display = 'none';
            }

            // Exibe o novo wireframe e atualiza a variável
            currentWireframe = document.querySelector(`#wireframes-${wireframeId}`);
            currentWireframe.style.display = 'block';

            // Adiciona a classe ativa ao item correspondente
            removeActiveClass();
            this.classList.add('actve-menu');
        }
    });
});

const menuChoice = document.querySelector('.menu-choice');
const closeMenuButton = document.getElementById('close-menu');
let isMenuVisible = true; // Variável para rastrear o estado do menu

closeMenuButton.addEventListener('click', () => {
    if (isMenuVisible) {
        // Esconde o menu deslizando para a esquerda
        menuChoice.classList.add('hidden');
    } else {
        // Exibe o menu deslizando de volta
        menuChoice.classList.remove('hidden');
    }
    isMenuVisible = !isMenuVisible; // Alterna o estado do menu
});
