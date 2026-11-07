# Fullstack ORM Template

API desenvolvida com Node.js, TypeScript e Express.

## Pré-requisitos

- Node.js instalado
- npm instalado

## Instalação

Clone o projeto e entre na pasta:

```bash
git clone <url-do-repositorio>
cd rkt-fs-orm
```

Instale as dependências:

```bash
npm install
```

## Dependências

### Produção

- `express`: criação do servidor HTTP e das rotas
- `tsx`: execução dos arquivos TypeScript

### Desenvolvimento

- `typescript`: compilador e suporte ao TypeScript
- `@types/express`: tipagens do Express
- `@types/node`: tipagens do Node.js

## Executando o projeto

Inicie o servidor em modo de desenvolvimento, com reinicialização automática:

```bash
npm run dev
```

O servidor ficará disponível em:

```text
http://localhost:3333
```

## Rotas

A API possui rotas relacionadas a usuários e perguntas. Para testar as requisições, importe o arquivo `routes-insomnia.json` no Insomnia.

## Scripts disponíveis

- `npm run dev`: inicia o servidor com `tsx watch`
