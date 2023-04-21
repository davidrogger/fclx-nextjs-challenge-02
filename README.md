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

  1. Criar uma aplicação Next.js com Docker na porta 3000;
    - Primeramente iniciando o next.js `npx create-next-app --typescript`
    - Após cria-lo, criei o Dockerfile e o docker-compose com suas configurações iniciais, para copiar o next para o container.
    - Configurei o .devcontainer, para testar a extensão apresentada pelo Luiz Carlos
    - Por padrão o Next.js ja usa a porta 3000
  
  2. Realizei a instalação do Prisma `npm i prisma -D`
    - Inicializei o prisma definindo o sqlite como banco `npx prisma --datasource-provider sqlite`
    - Criei o model solicitado, com ID gerado automáticamente com uuid e o campo message como string
    - Realizei a conexão do prisma no arquivo prims na pasta app, para evitar leak de conexões.
  
  3. Criei a pasta chats, onde ficam as rotas para as solicitações GET e POST
    - GET http://localhost:3000/api/chats
    - POST http://localhost:3000/api/chats body{ message string }
  
  4. Revisei o docker-compose para realizar a instalação dos modulos e iniciar a aplicação de forma automática.

  5. Após iniciar a composição dos container(`docker compose up --build` para visualizar as instalações e inicializações ou adicione a flag -d, para inicialização de fundo, gosto de usar --build para forçar a remontagem da imagem caso ja tenha montado ela alguma vez), e todas inicializações concluirem, basta usar o api.http ou outra http client, para realizar o post desejado, e para o get podemos acessar via navegador.

</details>
