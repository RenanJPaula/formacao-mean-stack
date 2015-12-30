# Operadores em JavaScript

Em JavaScript temos operadores binários, unários e um operador condicional ternário.

Operadores binários exigem dois operandos, por exemplo:

```js
  10 + 10;
  > 20
```

Operadores unários exigem um único operando, por exemplo:

```js
  10++;
  > 11
```

Já o operador condicional ternário exige três operandos, onde o primeiro é uma expressão booleana e os outros dois são os valores de retorno dado a evaluação da expressão.

Exemplo:

```js
  // Expressão ? resultado positivo : resultado negativo;
  10 < 11 ? 'sim' : 'não';
  > 'sim'
```

## Operadores de atribuição

Operadores de atribuição tem por objetivo a tribuição do valor de um operando a direita ao operando a esquerda.

Exemplo:

```js
  // Operando a esquerda = operando da direita;
  var nome = 'Renan';
```

O operador **=** é o mais básico de todos. Os demais operadores são simplificações de operações padrões como a soma.

Exemplo:

```js
  var numero = 10;
  numero = 10 + 1;
  console.log(numero);
  > 11

  // Equivalente á:

  var numero = 10;
  numero += 1;
  console.log(numero);
  > 11
```

## Operadores de comparação

Operadores de comparação comparam dois operandos e retornam um valor lógico. Dentre eles temos:

| Operador | Descrição |
| == | Retorna true se os operandos são iguais. Um detalhe importante sobre este operador é que o mesmo não leva em consideração o tipo do valor ou seja, comparações como **10 == '10'** retornam true. Isso se dá devido a coersão de tipos. |
