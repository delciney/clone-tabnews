# clone-tabnews

Implementação do [tabnews.com.br](https://www.tabnews.com.br) desenvolvida com as aulas do [curso.dev](https://curso.dev)

## Publicação

A versão desenvolvida durante o acompanhamento do curso pode ser acessada pelos seguintes links

[tabdev.com.br](https://tabdev.com.br/)

[clone-tabnews-two-rose.vercel.app](https://clone-tabnews-two-rose.vercel.app)

## Tecnologias utilizadas

| Nome     |     Versão      |
| -------- | :-------------: |
| npm      |     10.8.2      |
| node     |     20.18.1     |
| next     |     13.1.6      |
| react    |     18.2.0      |
| jest     |     29.6.2      |
| postgres | 16.8-alpine3.21 |

## Instalação e execução da aplicação

Para instalar os pacotes execute o comando

`npm i`

Antes de executar a aplicação deve ser alterado o arquivo `.env` na raiz do projeto com as informações de conexão com seu bando de dados Postgres

```
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=local_user
POSTGRES_DB=local_db
POSTGRES_PASSWORD=local_password
```

Para subir a aplicação no ambiente local execute o comando

`npm run dev`

## Execução dos testes

Para rodar os testes somente uma vez execute o comando

`npm run test`

Para rodar os testes de forma assistida execute o comando

`npm run test:watch`
