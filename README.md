# Site_Produtos

Um site completo para cadastro, listagem, atualização e remoção de produtos, utilizando **React + Vite** no frontend e **Express + MongoDB** no backend.

## Funcionalidades

- Listar produtos cadastrados
- Adicionar novo produto
- Editar produto existente
- Remover produto
- Interface responsiva com Chakra UI

## Tecnologias

- **Frontend:** React, Vite, Chakra UI, Zustand, React Router DOM
- **Backend:** Node.js, Express, Mongoose, MongoDB
- **Dev Tools:** Nodemon, dotenv, concurrently

## Como rodar o projeto

### Pré-requisitos

- Node.js (v18+ recomendado)
- MongoDB (local ou Atlas)

### Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/site_produtos.git
   cd site_produtos
   ```

2. Instale as dependências:
   ```sh
   npm install
   cd frontend
   npm install
   cd ..
   ```

3. Configure o arquivo `.env` na raiz do projeto:
   ```
   MONGO_URI=seu_mongo_uri
   PORT=5000
   ```

### Rodando em desenvolvimento

Execute backend e frontend juntos:
```sh
npm run dev:both
```
- O backend roda em `http://localhost:5000`
- O frontend roda em `http://localhost:5173`

### Rodando apenas o backend

```sh
npm run dev:backend
```

### Rodando apenas o frontend

```sh
cd frontend
npm run dev
```

### Build de produção

```sh
npm run build
npm start
```

## Estrutura de Pastas

```
backend/
  controllers/
  models/
  routes/
  config/
  server.js
frontend/
  src/
    components/
    pages/
    store/
    App.jsx
    main.jsx
  vite.config.js
.env
package.json
```

## Rotas da API

- `GET /api/products` — Lista todos os produtos
- `POST /api/products` — Cria um novo produto
- `PUT /api/products/:id` — Atualiza um produto
- `DELETE /api/products/:id` — Remove um produto
