# MongoDB

Primeiramente vamos entender o são banco de dados não relacionais (famosos NoSql). Basicamente surgiram com o intuito de resolver problemas específicos que os bancos relacionais não conseguem resolver eficientemente devido a estratégia de orquestração dos dados.

Os bancos de dados não relacionais tem por objetivo:

- Escalabilidade;
- Adaptabilidade dos dados;
- Facilidade de operação;

Existem diversos tipos de bancos de dados não relacionais e dentre eles temos:

- Chave/Valor;
- Documento;
- Grafo;
- Coluna;
- Híbridos;

MongoDB é um banco de dados schemaless orientado a arquivos projetado para facilitar o desenvolvimento e escalar com eficiência. Basicamente ele concilia a distribuição entre funcionalidades e escalabilidade para maximizar o desempenho e fornecer uma interface de operação fácil e intuitiva.

A ilustração abaixo mostra a distribuição do mongo dentre os demais banco de dados.

![Features vs Scale](./imagens/feature-vs-scale.png)

## Documentos

O MongoDB utiliza o formato BSON para armazenamento dos documentos. Na pratica é uma forma de JSON binarizado com a adição de referencias de tipos. Veja mais sobre documentos [aqui](https://docs.mongodb.org/manual/core/document/).

Os documentos são agrupados por coleções. Fazendo uma analogia aos banco de dados relacionais os documentos seriam as tuplas e as coleções seriam as tabelas.

## Schemaless (livre de esquema)

Os dados no mongo são livres de schema, ou seja, não seguem uma definição prévia como as tabelas dos banco de dados sql. Na pratica em uma coleção de documentos podem haver documentos completamente distintos facilitando a adaptação do banco de dados a mudanças.

#Instalação

Para a realização da instalação clique [aqui](https://docs.mongodb.org/manual/installation/);

# Operações

As operações são realizadas sobre os arquivos das coleções de um determinado banco de dados. Para a seleção de um banco de dados utilizamos a palavra reservada **use**.

Exemplo:

```mongodb
  use alunos
```
