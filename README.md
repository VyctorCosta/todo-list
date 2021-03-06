# Projeto Todo-List

Projeto criado para exercitar conhecimentos de Front-End com React e Back-End com express e banco de dados postgres.

## Instalação

Se você não tem docker e docker compose instalado consulte a [documentação oficial](https://docs.docker.com/engine/install/) e instale ambos.

Após isso entre na pasta backEnd e frontEnd e execute um dos comandos abaixo:

```bash
npm install
```
ou

```bash
yarn install
```

Crie um arquivo chamado .env na raiz do projeto e copie tudo do arquivo .env.example para ele. <br />
Faça o mesmo procedimento dentro da pasta backEnd

Após isso execute o comando abaixo para criar uma tabela task no banco de dados Postgres

```bash
docker exec -it todo-list-backEnd-server yarn migration
```

Após isso execute o comando abaixo na raiz do projeto:

```bash
docker compose up
```

E acesse o endereço [http://localhost:3000](http://localhost:3000)
<br />
<br />

## Demonstração do Site

<img src="https://github.com/VyctorCosta/todo-list/blob/main/example_img.jpeg?raw=true" alt="Seed logo"/>
