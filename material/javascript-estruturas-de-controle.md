# Estruturas de controle em JavaScript

Em JavaScript as estruturas de controle são bem similares com as do **C** ou linguagens derivadas.

## Condicionais

As estruturas condicionais tem por objetivo possibilitar a tomada de decisão por parte dos nossos programas. Dentre elas temos o **if**, **else if**, **else** e **switch**.

Exemplo:

```js
  if(/* se essa expressão for verdadeira */) {

    /* execute este bloco */

  } else if(/* senão, se essa expressão for verdadeira */) {

    /* execute este bloco */

  } else {

    /* senão execute este bloco */

  }
```

```js
  switch(/* String ou Number */) {
    case valor1: /* Se valor1 === a String ou o Number */
      // ...
      break;
    case valor2: /* Se valor2 === a String ou o Number */
      // ...
      break;
    default: /* Senão */
      // ...
  }
```

## Laços de repetição

Laços de repetição permitem a execução de um mesmo trecho do programa por diversas vezes. Dentre os laços de repetição disponíveis temos o **for**, **while** e **do-while**.

O **for** é composto seu respectivo bloco de execução e por 3 sessões sendo distribuidas em:

- 1: Declaração das variáveis de controle;
- 2: Expressão lógica de controle;
- 3: Bloco modificador das variáveis de controle;

Exemplo:

```js
  for(var i = 0; i <= 10; i++) {
    // ...
  }
```

Laços **for** são normalmente utilizados em contextos que necessitem de uma quantidade delimitada de repetições como em iterações de arrays.

Laços de repetição do tipo **while** são compostos por uma expressão de controle e o respectivo bloco de execução.

Exemplo:

```js
  var i = 0;
  while(i <= 10) {
    // ...
    i++;
  }
```

Laços do tipo **do-while** são exatamente iguais ao **while** com exceção da verificação de parada que é feita após no final da execução do bloco, ou seja, o bloco de código é executado pelomenos uma vez sempre.

Exemplo:

```js
  var i = 0;
  do {
    // ...
    i++;
  } while(i <= 10);
```
