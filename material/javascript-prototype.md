# Prototype em JavaScript

Objetos em JavaScript podem conter um protótipo que por sua vez pode ser um **objeto** ou **null**. Essa característica basicamente nos permitem que objetos herdem propriedades e funções de outros objetos.

## __proto__

**__proto__** é uma das formas de se acessar e atribuir referencias de protótipos aos objetos, entretanto a mesma não adotada por todos os interpretadores. Basicamente sua utilização se dá através da definição de uma propriedade em um objeto.

Exemplo:

```js
  var pessoa = {
    sexo: 'Masculino'
  };

  var renan = {
    nome: 'Renan Johannsen de Paula',
    idade: 24,
    __proto__: pessoa
  };

  console.log(renan);
  > { nome: 'Renan Johannsen de Paula', idade: 24 }

  console.log(renan.sexo);
  > Masculino
```

Repare que a propriedade herdada do objeto **pessoa** não é imprimida no **toString** do objeto.

## Object.PrototypeOf

Uma forma mais elegante de manipulação do protótipo de objetos se dá através dos métodos **getPrototypeOf** e **setPrototypeOf** contidos em **Object**.

Exemplo:

```js
  var pessoa = {
    sexo: 'Masculino'
  };

  var renan = {
    nome: 'Renan Johannsen de Paula',
    idade: 24
  };

  Object.setPrototypeOf(renan, pessoa);

  console.log(renan);
  > { nome: 'Renan Johannsen de Paula', idade: 24 }

  console.log(renan.sexo);
  > Masculino
```

## Object.Create

Outra forma de atribuição de protótipos através de **Object** é o método **create** que cria um objeto referenciando o seu protótipo.

Exemplo:

```js
  var pessoa = {
    sexo: 'Masculino'
  };

  var renan = Object.create(pessoa);
  renan.nome = 'Renan Johannsen de Paula';
  renan.idade = 24;

  console.log(renan);
  > { nome: 'Renan Johannsen de Paula', idade: 24 }

  console.log(renan.sexo);
  > Masculino
```

## Shadowing

Uma característica da linguagem é que a busca por propriedades dentro dos objetos se dá de forma recursiva, ou seja, as propriedades do objeto serão priorizadas perante ao protótipo.

Ao atribuirmos um valor a propridade herdado do objeto o valor do protótipo não será sobrescrito, mas sim o objeto terá uma propriedade sombra do protótipo.

Exemplo:

```js
  var pessoa = {
    sexo: 'Masculino'
  };

  var renan = Object.create(pessoa);
  renan.nome = 'Renan Johannsen de Paula';
  renan.idade = 24;
  renan.sexo = 'Teste';

  console.log(renan);
  > { nome: 'Renan Johannsen de Paula', idade: 24, sexo: 'Teste' }

  console.log(renan.sexo);
  > Teste

  console.log(Object.getPrototypeOf(renan).sexo);
  > Masculuno
```

## Prototype em funções

Funções em JavaScript possuem uma propriedade **prototype** que refirencia um objeto vazio, ou seja, quando estamos utilizando funções construtoras a forma de se trabalhar com herança se dá através do acesso a essa propriedade.

Exemplo:

```js

  function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  Pessoa.prototype.sexo = 'Masculino';

  var renan = new Pessoa('Renan Johannsen de Paula', 24);
  console.log(renan.sexo);
  > 'Masculino'

```
