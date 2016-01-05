# Fumções em JavaScript

Funções em JavaScript são de primeira classe, ou seja, podem ser atribuidas a variáveis, passadas por parâmetro e retornadas por outras funções.

## Declaração

Sua declaração se da a partir da palavra chave **function** e podem ser ciada das seguintes formas:

### Function Declaration

```js
  function soma(x, y) {
    return x + y;
  }

  soma(1, 2);
  > 3
```

### Function Expression

```js
  var soma = function(x, y) {
    return x + y;
  };

  soma(1, 2);
  > 3
```

A grande diferença entre as duas é que as **Function Declaration** são carregadas antes da interpretação do código. Lembrando que em JavaScript as declarações são içadas ([Hoisting](http://www.w3schools.com/js/js_hoisting.asp)).

## Invocação

A declaração de uma função não necessariamente implica na invocação da mesma. Para invocar uma função existem quatro maneiras distintas:

### Invocação direta

A invocação direta se dá através do **()**.

Exemplo:

```js
  soma(1, 2);
  > 3
```

### Invocando funções de objetos

Invocação de funções dentro de objetos se dá através de variáveis.

Exemplo:

```js
  var getNomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
  };

  var pessoa = {
    nome: 'Renan',
    sobrenome: 'Johannsen de Paula',
    getNomeCompleto = getNomeCompleto
  };

  pessoa.getNomeCompleto();
  > Renan Johannsen de Paula

  getNomeCompleto();
  > undefined undefined
```

Repare que o **this** na função assume o contexto de onde ela está sendo invocada.

### Invocação através de call e aply

Funções podem ser invocadas através dos métodos **call** e **aply** contidos nelas mesmas. Para este tipo de invocação devemos especificar o contexto e seus respectivos parâmetros.

```js
  var pessoa = {
    nome: 'Renan',
    sobrenome: 'Johannsen de Paula'
  };

  var getNomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
  };

  getNomeCompleto.call(pessoa);
  > Renan Johannsen de Paula

  getNomeCompleto.apply(pessoa, []);
  > Renan Johannsen de Paula
```

A diferença de **call** e **aply** se da na forma como passamos os parâmetros para a função a ser chamada onde em **call** utilizamos a passagem de parâmetros convencionais e no **apply** utilizamos um array de parâmetros.

### Invocação através do operador new
