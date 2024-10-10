Projeto em desenvolvimento /incompleto



Esta atividade consiste na criação de um projeto backend usando o framework NestJS, com código fonte em TypeScript, e ORM Prisma. As rotas devem ser implementadas conforme planilha em anexo. O modelo do banco de dados também se encontra em anexo: Imagem + modelo. Apesar do modelo ter sido desenvolvido com uso da ferramenta  MySQL Workbench, o ORM Prisma do projeto deve ser configurado com o Postgres. 





## Description

[Nest](https://github.com/nestjs/nest) Projeto de exemplo usando o framework Nest.

## Passo a passo para a criação deste projeto

1.Abrir Prompt de Comando do Node (NodeJS command prompt)

2.Instalar o Nest na máquina
```bash
$ npm install
```

## Criar projeto chamado nest-messages. Execute o comando a seguir dentro da pasta de sua preferência.

```bash

$ nest new nest-messages

```

## Criar o módulo principal do sistema (MessagesModule). Execute o comando a seguir dentro da pasta criada no passo anterior.

```bash

$ nest generate module messages

```
 Verifique se o arquivo src/messages/messages.module.ts foi criado
 Atualize a referência para o novo módulo dentro de main.ts

## criar controller com o seguinte comando:
```bash
$ nest generate controller messages/messages --flat

```
messages/messages indica para criar MessagesController dentro da pasta messages

--flat (opcional) indica para não criar um diretório separado para o controller. Você provavelmente irá querer um diretório separado em projetos maiores.


## Definir as assinaturas das rotas dentro do controller

localhost:3000/messages (GET)
localhost:3000/messages (POST)
localhost:3000/messages/:id (GET)

## Instalar/Configurar a API client de sua preferência (Postman, Insomnia, VSCode REST extension, ...)

Criar classe descrevendo as propriedades que o corpo da requisição deve ter. (Data Transfer Object - DTO). New file: src/messages/dtos/create-message.dto.ts


Adicionar regras de validação na classe. É necessário instalar pacotes adicionais:

```bash
$ npm install class-validator class-transformer
```




## Referencias:
https://www.youtube.com/watch?v=0Idug0e9tPw

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).



