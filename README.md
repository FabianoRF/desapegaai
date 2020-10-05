<h1 align="center"> Desapega aí </h1> <br>


<p align="center">
  Desapegue do que só te ocupa espaço
</p>


## Sumário

- [Introdução](#Introdução)
- [Como instalar](#Como instalar)
- [Tecnologias utilizadas](#Tecnologias utilizadas)


## Introdução

Uma plataforma para anuncio de itens nos quais voce deseja desapegar. Nela é possivel fazer o login e cadastrar/excluir itens alem de ser possivel visualizar todos os itens dos demais usuários

O layout da aplicação está disponível <a href="https://www.figma.com/file/JnItPZghnqeik0AZxbIX4j/desapegaai?node-id=73%3A261" >aqui<a/> .

<p align="center">
  <img src = "images/thumbnail.png" width=350>
</p>

O que voce pode fazer no desapega aí:

* Fazer seu cadastro com nome, email e senha
* Fazer o Login
* Visualizar os itens de todos os usuários
* Excluir seus itens cadastrados
* Visualizar com mais detalhes o itens clicando em ver
* Cadastrar um novo item


<p align="center">
  <img src = "http://i.imgur.com/IkSnFRL.png" width=700>
</p>

<p align="center">
  <img src = "http://i.imgur.com/0iorG20.png" width=700>
</p>



## Como instalar

**Banco de dados**

- Para este projeto foi utilizado um container do PostgresSQL em conjunto com o TypeORM, portanto para que seja possivel executar o porjeto com as configurações já setadas basta seguir as seguintes instruções:

- Possuir o docker instalado na sua máquina. Disponível em: <a href="https://www.docker.com">Docker<a/> 
- `docker pull postgres` faz o download da imagem postgres
- `docker run --name desapegaai -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres` inicia o container com o nome, porta e senhas configuradas no projeto atual
- Apos a criação do container, basta criar uma base de dados com o nome de `desapegaai`


- OBS: Essas instruções foram passadas com base em um banco Postgres, vale lembrar que o TypeORM oferece suporte para variados tipos de bancos relacionais. Para estes casos, basta seguir a documentação oficial: <a href="https://typeorm.io/">TypeORM<a/> 


**Back-end**

- Clone ou faça o download do repositório.
- Abra a pasta backend `cd backend`.
- Execute os seguintes comandos:
  - `yarn` para instalar as dependencias.
  - `yarn typeorm migrate:latest` executa as migrations do typeorm que farão a criação de tabelas no banco de dados.
  - `yarn dev` inicia a aplicação em modo de desenvolvimento.
  - `yarn start` inicia a aplicação.

**Front-end**

- Abra a pasta frontend `cd frontend`
- Execute o comando:
  - `yarn start` inicia a aplicação.


## Tecnologias utilizadas

Para o Front-end e Back-end foi utilizado Typescript. No Back-end: Node + express em conjunto com o TypeORM, e upload de arquivos de fotos com multer. No Front-End: React, styled-components, Yup e unForm para tratar formularios, além de Context API para gerenciar o contexto da Autenticação do usuário com JWT.

- Rotas da API:
  - `/sign-in` POST
  - `/sign-up`POST
  - `/item` POST
  - `/item/:id` POST
  - `/item` GET
  
 - Paginas do Front:
  - `sign-in` Página de Login
  - `sign-up` Página de cadastro
  - `dashboard` Página principal com todos itens para visualização
  - `dashboard` Página com listagem de itens pertencentes ao usuário logado na aplicação
  - `register` Página para cadastro de novos itens

