# Inserção no MongoDB

O MongoDB fornece os seguintes métodos para inserção de dados:

- db.collection.insertOne()
- db.collection.insertMany()
- db.collection.insert()

## db.collection.insertOne()

Basicamente insere um documento em uma determinada coleção.

Exemplo:

```mongodb

  var aluno = { nome: 'Renan Johannsen de Paula' }

  use escola
  db.alunos.insert(aluno)

  > Inserted 1 record(s) in 17ms
  > WriteResult({
  >   "nInserted": 1
  > })

```

Em sql o equivalente seria:https://docs.mongodb.org/manual/core/write-operations-introduction/

```sql

  CREATE TABLE aluno (
    id INTEGER PRIMARY KEY,
    nome TEXT
  );

  INSERT INTO aluno (nome)
  VALUES ('Renan Johannsen de Paula');

```
