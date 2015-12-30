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

Operadores de comparação comparam dois operandos e retornam um valor lógico baseado no sucesso da mesma.
Dentre os operadores de comparação temos:

| Operador | Descrição |
| -------- | --------- |
| == | Retorna true se os operandos são iguais. Um detalhe importante sobre este operador é que o mesmo não leva em consideração o tipo do dado ou seja, comparações como **10 == '10'** retornam true. Isso se dá devido a coerção de tipos. |
| === | Retorna true se os operandos são iguais. Este operador diferente do **==** leva em consideração o tipo dos operandos, logo operações como **10 === '10'** retornam false. |
| != | Retorna true se os operandos são diferentes sem levar em consideração os tipos. |
| !== | Retorna true se os operandos são diferentes considerando os tipos. |
| > | Retorna true se o operando da esquerda for maior que o da direita. |
| < | Retorna true se o operando da esquerda for menor que o da direita. |
| >= | Retorna true se o operando da esquerda for maior ou igual ao da direita. |
| <= | Retorna true se o operando da esquerda for menor ou igual ao da direita. |

A coerção de tipos, em resumo, é a conversão automática realizada para a comparação de dados de tipos distintos. No caso da comparação entre Number e String a String é convertida automáticamente para Number.

Para a comparação entre objetos e valores primitivos o JavaScript evalua o objeto atrabés da função **ToPrimitive(value)** que por sua vez faz o uso das funções **valueOf** e **toString** respectivamente para realizar a evaluação. Devido a este comportamento podemos sobreescrever a função **valueOf** ou **toString** para realizarmos comparações.

Por exemplo:

```js
  var obj = {};

  obj == true;
  > false

  obj.valueOf = function() {
    return true;
  };

  obj == true;
  > true
```
