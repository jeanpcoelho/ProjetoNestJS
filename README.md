### Projeto em desenvolvimento /incompleto
poucos erros aparente ao integrar ao BD , possivelmente versaor do nodejs em conflito, algo a ser analisado 

Atividade Backend: Projeto NestJS - TS - Prisma

Disciplina: POO2

Alunos:

Jean Pereira Coelho 

Henrique Calvalcante Rodrigues

Anthony Henrique de Souza

Esta atividade consiste na criação de um projeto backend usando o framework NestJS, com código fonte em TypeScript, e ORM Prisma. As rotas devem ser implementadas conforme planilha em anexo. O modelo do banco de dados também se encontra em anexo: Imagem + modelo. Apesar do modelo ter sido desenvolvido com uso da ferramenta  MySQL Workbench, o ORM Prisma do projeto deve ser configurado com o Postgres. 

### IDE:
Visual Studio Code


### tecnologias utilizadas: 


NestJS


Prisma


MySQL

### Descriçao

[Nest](https://github.com/nestjs/nest) Projeto de exemplo usando o framework Nest.

### Passo a passo para a criação deste projeto

1.Abrir Prompt de Comando do Node (NodeJS command prompt).

2.Instalar o Nestjs/cli na máquina.
```bash
$ npm install -g @nestjs/cli
```


### Criar projeto chamado nest-messages. Execute o comando a seguir dentro da pasta de sua preferência.

```bash

$ nest new nest-messages

```
Obs: caso utilizar o terminal do visual studio code para instalaçao escolha o gerenciador de pacotes npm.


### Criar o módulo principal do sistema (MessagesModule). Execute o comando a seguir dentro da pasta criada no passo anterior.

```bash

$ nest generate module messages

```
 Verifique se o arquivo src/messages/messages.module.ts foi criado
 Atualize a referência para o novo módulo dentro de main.ts

### criar controller com o seguinte comando:
```bash
$ nest generate controller messages/messages --flat

```
messages/messages indica para criar MessagesController dentro da pasta messages

--flat (opcional) indica para não criar um diretório separado para o controller. Você provavelmente irá querer um diretório separado em projetos maiores.


### Definir as assinaturas das rotas dentro do controller

localhost:3000/messages (GET)


localhost:3000/messages (POST)


localhost:3000/messages/:id (GET)

### Instalar/Configurar a API client de sua preferência (Postman, Insomnia, VSCode REST extension, ...)

Criar classe descrevendo as propriedades que o corpo da requisição deve ter. (Data Transfer Object - DTO). New file: src/messages/dtos/create-message.dto.ts


Adicionar regras de validação na classe. É necessário instalar pacotes adicionais:

```bash
$ npm install class-validator class-transformer
```


### Pacotes/Dependecias ultilizados 
Para a instalaçao dos mesmo abra o terminal e digite o comando que a cada um se refere .


Obs: Atente-se de instalar dentro da pasta do projeto

### NestJS/swagger
Facilita a criação de documentação da API ,permitindo visualizar e interagir com as APIs RESTful de maneira intuitiva.
```bash
$ npm install --save @nestjs/swagger
```

### NestJS JWT (JSON Web Token)
Cria um token que pode ser usado para verificar a identidade de um usuário após o login.

```bash
$ nest g module auth
$ nest g controller auth
$ nest g service auth
$ nest g module users
$ nest g service users
```
### bcrypt
biblioteca que cria hash para proteger senhas

```bash
$ npm install bcrypt
```
### Referencias:
https://github.com/leonardo-silva/nest-messages/tree/main


https://www.youtube.com/watch?v=0Idug0e9tPw


https://www.youtube.com/watch?v=nuLTwqPNq-w

### License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).



