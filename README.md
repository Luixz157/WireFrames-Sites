# Wireframes Showcase

Este projeto apresenta 14 wireframes interativos, desenvolvidos para exibir conceitos de design funcional e simplicidade visual. O foco é fornecer uma interface intuitiva onde o usuário possa explorar diferentes layouts sem precisar recarregar ou navegar entre páginas separadas, tudo de forma dinâmica.

## Descrição
O projeto faz o seguinte:

- Exibe uma tela inicial chamada choice, onde o usuário pode escolher um dos 14 wireframes disponíveis.
- Ao selecionar um wireframe, a tela inicial é substituída pelo wireframe escolhido e o menu lateral (menu-choice) é exibido automaticamente.
- O menu lateral permite alternar entre os wireframes, facilitando a navegação sem a necessidade de voltar à tela principal.
- O botão "Home" no menu lateral permite retornar à tela inicial (choice).
- O menu pode ser ocultado ou exibido novamente clicando em uma seta, otimizando o espaço de visualização.

## Tecnologias Utilizadas
- HTML5: Estrutura das páginas.
- CSS3 e SCSS: Estilização e layout do projeto.
- JavaScript: Interatividade e controle dinâmico dos wireframes.
- Gulp: Ferramenta de automação para simplificar o desenvolvimento.
- Google Fonts: Tipografias variadas para melhorar o design.

## Como Rodar o Projeto

```bash
- Clone o repositório:
git clone https://github.com/seu-usuario/Wireframes-Showcase.git
cd Wireframes-Showcase

- Instale as dependências:
yarn install

- Execute o projeto localmente:
gulp serve

- Acesse no navegador:
O projeto estará disponível em http://localhost:3000.

# Estrutura do Projeto

📂 css/               # Arquivos de estilo CSS
📂 img/               # Imagens divididas por wireframe
   ├── choice/        # Imagens da tela de escolha inicial
   ├── pag-1/         # Imagens do wireframe 1
   ├── pag-2/         # Imagens do wireframe 2
   └── ...            # Continua até pag-14
📂 js/
   └── script.js      # Lógica JavaScript para navegação e interatividade
📂 scss/              # Arquivos SCSS para pré-processamento de CSS
gulpfile.js           # Configuração do Gulp
index.html            # Página HTML principal
package.json          # Dependências e scripts
favicon.svg           # Ícone do projeto
yarn.lock             # Controle de versão das dependências do Yarn
```

## Como Personalizar
- Modificar wireframes: Edite o conteúdo dentro de cada pasta img/pag-* para alterar as imagens dos wireframes.
- Alterar texto exibido: Acesse index.html para modificar textos e cabeçalhos nas seções do projeto.
- Adicionar novos wireframes: Copie e cole uma nova estrutura em index.html e crie uma nova pasta em /img/ com o nome do novo wireframe.

## Contato
luiz.antoniodesouza004@gmail.com