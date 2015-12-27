# Tipos de dados em JavaScript

O padrão ECMAScript atual define 7 tipos de dados, sendo 6 primitivos e Object.

Lista dos tipos primitivos:
- Boolean
- null
- undefined
- Number
- String
- Synbol

Como o JavaScript é uma linguagem dinamicamente tipada os tipos de dados são convertidos automaticamente durante a execução do script. Isso permite a utilização de uma mesma variável para a atribuição de dois tipos distintos de dados.

Exemplo:

```js
  let value = 'Eu sou um texto';
  value = 10;
```

Outro ponto interessante relacionado a conversão automática é que quanto empregamos o operador de soma em expressões que envolvem valores String e Number o Number é convertido para String, já para os demais operadores como subtração, multiplicação ou divisão a String é convertida para Number.

Exemplo:

```js
  '22' + 2;
  > '222'

  '22' - 2;
  > 20
```

Para cenários em que precisamos converter uma String para Number podemos utilizar dois métodos **parseInt(String, base)** onde o parâmetro base é opicional e indica o sistema numérico a ser utilizado e **parseFloat(String)**.

A seguir encontra-se um pouco mais sobre os tipos de dados.

## Boolean

O tipo boolean é o tipo mais simples de dados e o mesmo possui dois valores literais (true/false) além do wrapper [Boolean](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Boolean).

Um ponto importante sobre o JavaScript é que as seguintes expressões são evaluadas como false:

  - false
  - 0
  - ''
  - ""
  - NaN
  - null
  - undefined
  - 'false'
  - "false"

Exemplo:

```js
  if(!("Não é um número" - 22)) { // equivalente a !NaN
    console.log('entrou!');
  }

  > 'entrou!'
```
