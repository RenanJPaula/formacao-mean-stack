# Estruturas de controle em JavaScript

Em JavaScript as estruturas de controle são bem similares com as do **C** ou linguagens derivadas.

## Condicionais

As estruturas condicionais tem por objetivo possibilitar a tomada de decisão por parte dos nossos programas. Dentre elas temos o **if**, **else if**, **else** e **switch**.

Exemplo:

```js
  if(numero > 0) {
    console.log('Número maior que zero');
  } else if(numero < 0) {
    console.log('Número menor que zero');
  } else {
    console.log('Número zero');
  }
```

```js
  switch(numero) {
    case 1:
      console.log('Número um');
      break;
    case 10:
      console.log('Número dez');
      break;
    default:
      console.log('Número diferente de um ou dez');
      break;
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
    console.log(i);
  }
```

Laços **for** são normalmente utilizados em contextos que necessitem de uma quantidade delimitada de repetições como em iterações de arrays.

Laços de repetição do tipo **while** são compostos por uma expressão de controle e o respectivo bloco de execução.

Exemplo:

```js
  var i = 0;
  while(i <= 10) {
    console.log(i);
    i++;
  }
```

Laços do tipo **do-while** são exatamente iguais ao **while** com exceção da verificação de parada que é feita após no final da execução do bloco, ou seja, o bloco de código é executado pelomenos uma vez sempre.

Exemplo:

```js
  var i = 0;
  do {
    console.log(i);
    i++;
  } while(i <= 10);
```
