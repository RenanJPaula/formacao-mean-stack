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

Outro ponto interessante relacionado a conversão automática é que quanto empregamos o operador de soma em expressões que envolvam valores String e Number o Number é convertido para String, já para os demais operadores como subtração, multiplicação ou divisão a String é convertida para Number.

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

# null

Em JavaScript **null** é o tipo primitivo que indica a ausencia de valor.

# undefined

Em JavaScript **undefined** representa a inexistência de uma determinada propriedade.

# Number

Em JavaScript todos os números são agrupados pelo tipo Number. Além de representar os números o mesmo possui três valores simbólicos, **+Infinity**, **-Infinity** e **NaN**. Isso mesmo, por mais incrível que pareça, typeof NaN é Number!

Um ponto de atenção é que o JavaScript bem como outras linguagens utilizam o padrão [Double Precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) para representação dos números e devemos tomar alguns cuidados.

Exemplo:

```js
  0.1 + 0.2;
  > 0.30000000000000004
```

O "00000000000000004" é um residuo decorrente da operação binária. Veja mais [aqui](http://0.30000000000000004.com/).

Para compreender e utilizar as principais funções de manipulação de números em JavaScript veja [aqui](http://www.w3schools.com/js/js_number_methods.asp) e para compreender a Math Api veja [aqui](http://www.w3schools.com/jsref/jsref_obj_math.asp).
