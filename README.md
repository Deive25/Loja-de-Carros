# Loja de Carros

Aplicação de estudo full stack para uma loja de veículos, com back-end em Java e Spring Boot e interface em Angular. O repositório reúne recursos para veículos, usuários, compras e dados de catálogo.

## Tecnologias

| Camada | Stack do repositório |
| --- | --- |
| Back-end | Java 11, Spring Boot 2.5.5, Spring Web |
| Persistência | Spring Data JPA e MySQL |
| Segurança | Dependência Spring Security presente no projeto |
| Front-end | Angular 12, TypeScript 4.3, Angular Material e Bootstrap |
| Documentação da API | Swagger / Springfox |
| Build | Maven e Angular CLI |

## Organização

- `LojadeCarro/`: API Spring Boot.
- `LojadeCarro/src/main/java/com/JavangularCar/LojadeCarro/controller/`: controladores para carros, marcas, modelos, cores, combustíveis, carrocerias, kits, imagens, usuários, login e compras.
- `LojaDeCarroAngular/`: interface web Angular.
- `LojaDeCarroAngular/src/app/services/`: serviços de integração com a API.

## Escopo

O código contém módulos e telas para consulta de veículos, cadastro, login, compras e vendas. Este é um projeto de estudo: a presença de um módulo ou de uma dependência não representa uma garantia de funcionamento em produção.

## Execução local

Os comandos abaixo seguem a estrutura e os scripts presentes no repositório. A aplicação não foi executada nesta revisão de documentação.

### Back-end

1. Instale o JDK 11 e disponibilize um banco MySQL local.
2. Configure a conexão do banco localmente. A aplicação utiliza `LojadeCarro/src/main/resources/application.properties`; não publique senhas.
3. Execute na pasta da API:

```sh
cd LojadeCarro
./mvnw spring-boot:run
```

No Windows, utilize `mvnw.cmd spring-boot:run`.

### Front-end

Em outro terminal:

```sh
cd LojaDeCarroAngular
npm install
npm start
```

Use uma versão do Node.js compatível com Angular 12. Abra `http://localhost:4200` e confira a URL do back-end nos serviços da interface.

## Verificações disponíveis

O front-end possui scripts para build e testes:

```sh
npm run build
npm test
```

No back-end, o Maven pode executar a suíte existente com `./mvnw test`. Os resultados não foram verificados nesta revisão.

## O que este projeto demonstra

- Estrutura de uma aplicação full stack com Java e TypeScript.
- Integração Angular / Spring Boot.
- Organização de recursos REST e persistência com JPA.
- Modelagem relacional de um catálogo de veículos.

## Contexto do portfólio

Projeto de estudo preservado com sua stack original. Para conhecer outros trabalhos, veja meu [perfil](https://github.com/Deive25).
