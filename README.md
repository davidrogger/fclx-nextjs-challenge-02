# Docker Next.js
## Fase 02

<details>
  <summary>
    <strong>
      Informações do desafio
    </strong>
  </summary>

Informações do desafio
Neste desafio, você deve criar uma aplicação **Next.js** com **Docker** que rode na *porta 3000*.
Esta aplicação precisa expor 2 rotas de API Rest:


- Criar chat - POST /api/chats

- Listar chats - GET /api/chats


Um chat tem 2 dados, o ID é auto-incrementado e a mensagem que é string.


O Next.js precisa salvar e buscar os dados do banco de dados usando o **Prisma**, o banco de dados a ser utilizado precisa ser o **SQLite** e precisa ser commitado no projeto.


Crie o arquivo api.http para declarar as 2 chamadas a serem realizadas.

</details>

<details>
  <summary>
    <strong>
      Notas sobre o desafio
    </strong>
  </summary>

  1. Conforme a aula de ontem(19/04/2023) usando next, segui os passos apresentados pelo Luiz Carlos instalando o Next.js(nunca havia usado), fiz a configuração dos container com o Dockerfile, docker-compose e devcontainer.

  2. Defini o local do banco de dados na pasta database, onde é apontado pelo arquivo .env, para quando realizada a migration.

  3. Declarei o modelo do Chat apontando a geração automática do ID usando uuid de uma string e o campo message como string.

  4. Na pasta app, criei o arquivo api.http, para realizar o teste manual dos requests solicitados, dos verbos get e post.

</details>
