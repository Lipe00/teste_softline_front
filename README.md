## Desafio Técnico Softline – Frontend

Este projeto é o frontend do desafio técnico Softline, desenvolvido com HTML, JavaScript, jQuery e Bootstrap, consumindo a API backend em .NET 8.

Ele permite registro do primeiro usuário, login via JWT e operações de CRUD para clientes e produtos.
___
# Funcionalidades

- Criar e editar clientes
- Criar e editar produtos
- Login com autenticação JWT
- Máscaras de campos de formulário

>⚠️ Para utilizar o frontend, é necessário que a API backend esteja rodando localmente com as migrations aplicadas. É possível localizá-la nesse [repositório](https://github.com/Lipe00/teste_softline_api)
___
## Tecnologias Utilizadas

- HTML5 e CSS3
- JavaScript (ES6) e jQuery
- Bootstrap 5
- API backend em .NET 8 com JWT
- MySQL (gerenciado pelo backend)
___
## Estrutura de Pastas
```plaintext
frontend/
├── css/                # Estilos personalizados (se houver)
├── js/                 # Scripts JavaScript, incluindo chamadas à API
│   ├── API_KEY.js      # Base URL da API e constantes
│   └── main.js         # Lógica de front-end principal
├── pages/              # Páginas HTML (clientes, produtos, login, formulário)
├── img/                # Imagens e ícones
└── index.html          # Página inicial ou login
```
___
## Requisitos

- Navegador moderno (Chrome, Firefox, Edge)
- API backend rodando localmente em `https://localhost:7138`
___
## Como Executar

#⚠️ Importante: Não abra os arquivos HTML diretamente no navegador (file://…). O login e armazenamento do token JWT dependem de um servidor local para funcionar corretamente.

- Certifique-se que a API backend está ativa e rodando (`dotnet run`), normalmente em:
`https://localhost:7138`

- Abra o projeto frontend no VS Code ou outro editor de sua preferência.

- Servindo o frontend via Live Server (recomendado):

- Clique com o botão direito em `index.html` (ou qualquer página HTML do frontend) → "Open with Live Server".

- O projeto será servido em algo como `http://127.0.0.1:5500`.

> Alternativamente, você pode usar qualquer servidor HTTP local (ex: http-server do Node.js).

- Abra o navegador no endereço fornecido pelo Live Server (ex: `http://127.0.0.1:5500`).

Agora você pode:

- Criar o primeiro usuário (via API `/User/FirstAuth` no Swagger ou pelo formulário inicial se implementado).

- Logar e armazenar o token JWT no localStorage.

- Utilizar as páginas de CRUD de clientes e produtos normalmente.
