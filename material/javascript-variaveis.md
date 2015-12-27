# Variáveis JavaScript

O JavaScript é uma linguagem case sensitive e possui tipagem dinâmica, portanto não é necessário espessificar explicitamente um tipo de uma variável. Seus tipos são definidos e convertidos no decorrer da execução dos scripts conforme a necessidade.

Para a declaração de variáveis utiliza-se a palavra chave **var**, **let** ou **const** onde **var** declara uma determinada variável globalmente dentro do escopo corrente, **let** define uma varivável específica para o bloco utilizado e **const** cria uma variável cujo o valor é fixo, ou seja, uma constante.

Declarações de variáveis são processadas antes que qualquer outro código seja executado, ou seja, declarar uma variável em qualquer lugar no código significa que esta declaração será içada para o inicio do mesmo. Esse comportamento é chamado de [Hoisting](http://www.w3schools.com/js/js_hoisting.asp).

Exemplo:

```js
  var a = 2;
  console.log(a);

  function hoistingExp() {
      console.log(a);
      var a = 3;
      console.log(a);
  }

  hoistingExp();
```

Normalmente o esperado para a execução do código acima seria:

```console
  > 2
  > 2
  > 3
```

Entretanto devido ao hoisting a saída é:

```console
  > 2
  > undefined
  > 3
```

O que acontece é que o código se torna o equivalente à:

```js
  var a; // Declaração içada
  a = 2;
  console.log(a);

  function hoistingExp() {
      var a; // Declaração içada
      console.log(a);
      a = 3;
      console.log(a);
  }

  hoistingExp();
```

A atribuição de um valor a uma variável não declarada implica em criar uma variável global. Variáveis declaradas são criadas antes de qualquer código ser executado já as variáveis não declaradas só são criadas no momento da atribuição.

A atribuição de valores a variáveis não declaradas em [modo restrito](http://www.w3schools.com/js/js_strict.asp) ('use strict') implica no lançamento da exceção ReferenceError.

Variáveis não declaradas podem ser excluídas através do operador "delete".

Exemplo:

```js
  a = 10;
  delete this.a;

  var person = {name: 'Renan Johannsen de Paula'};
  delete person.name;
```

Por convenção variáveis devem começar com **letras**, **_** (para sinalizar membros privados) ou **$** (reservado para bibliotecas e frameworks) onde deve ser empregado o [CamelCase](https://pt.wikipedia.org/wiki/CamelCase).

É possível criar e inicializar diversas variáveis ao mesmo tempo.

Exemplo:

```js
  var a = 10, b = 4, c = 7;
```

```js
  var a, b = a = "A";
  // Equivalente a
  // var a = "A";
  // var b = a;
```
