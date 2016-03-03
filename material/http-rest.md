# Protocolo HTTP e serviços REST

## HTTP

O protocolo HTTP (Hypertext Transfer Protocol), como o próprio nome diz, é um protocolo de comunicação entre cliente e servidor amplamente utilizado.

Basicamente ele funciona através de Requisições (Request) por parte dos clientes e Respostas (Response) por parte do servidor.

As requisições e suas respectivas respostas segue os padrões definidos na (RFC2616)[https://tools.ietf.org/html/rfc2616].

Mais especificamente as requisições possuem o seguinte padrão:

### Linha inicial (request line)

A linha inicial é composta de três partes, separadas por espaço, que especificam a o método a ser executado, a identificação do recurso (URI) e a versão do protocolo utilizada.

Exemplo:

```http
POST http://www.minhaapi.com.br/v1/cliente HTTP/1.1
```

Basicamente o método detalha o processamento que será efetuado sobre um determinado recurso, a URI identifica o recurso alvo deste processamento e a versão do protocolo especifica a forma de computação da requisição.

### Cabeçalho (request header);

É responsável por transferir informações adicionais entre o cliente e o servidor. Uma estrutura chave-valor, opcional, especificada logo após a request line.

Exemplo:

```http
POST http://www.minhaapi.com.br/v1/cliente HTTP/1.1
Accept: application/json; charset=utf-8
Accept-Language: pt
Content-Type: application/json; charset=utf-8
```

O header basicamente detalha os metadados da request.

### Corpo da requisição (request body)

Alguns métodos do protocolo http permitem o envio de dados para o servidor através do body da requisição.

É obrigatório a inserção de uma linha em branco entre o header e o body.

Exemplo:

```http
POST http://www.minhaapi.com.br/v1/cliente HTTP/1.1
Accept: application/json; charset=utf-8
Accept-Language: pt
Content-Type: application/json; charset=utf-8
Content-Length: 39

{ "nome" : "Renan Johannsen de Paula" }
```

### Métodos (request methods)

Os métodos de uma requisição indicam a ação a ser realizada sobre um determinado recurso.

Abaixo estão listados os oito métodos suportados pelo protocolo bem como o seus respectivos objetivos:

#### OPTIONS

O método **OPTIONS** consulta os métodos suportados para um determinado recurso do servidor, ou seja, retorna a lista de operações aceitas sobre um determinado recurso.

Este método é muito útil pois pode ser utilizado e explorado pelos desenvolvedores na construção de robos e na documentação de APIS.

#### GET

O método **GET**, como o nome já diz, tem por objetivo a obtenção de um determinado recurso. Por exemplo, se realizarmos um GET sobre a URI **http://www.minhaapi.com.br/v1/clientes** espera-se que o servidor retorne a lista de clientes.

O método GET é considerado um método **"seguro"**, pois semanticamente esta operação serve apenas para consultas, ou seja, o recurso consultado não sofre alteração. Dado a esta característica o método GET não permite o envio de um body na requisição, pois nenhum dado será inserido ou alterado.

Sempre que entramos em web-site pelo nosso navegador o mesmo efetua uma operação de GET para a obtenção do HTML a ser exibido.

#### HEAD

O método **HEAD** é uma variação do método GET onde o body da resposta não é retornada, ou seja, serve para a verificação dos cabeçalhos e do status code retornado pelo servidor. Pode ser utilizado para a validação de um determinado recurso, por exemplo, se um determinado cliente existe.

#### POST

O método **POST** serve para o processamento de uma determinada ação e dentre bem como a inclusão de novos registros.

Por exemplo, ao efetuarmos um POST sobre a URI **http://www.minhaapi.com.br/v1/cliente** um novo cliente será *"inserido"* na base de dados.

Este método não é considerado **"Seguro"** uma vez que o mesmo cria ou computa ações sobre recursos do servidor.

#### PUT

O método **PUT** tem por objetivo alterar um determinado recurso do servidor. Por exemplo, ao efetuar um PUT sobre a URI **http://www.minhaapi.com.br/v1/cliente/10** o cliente cujo ID 10, especificado na URL, será alterado mediante as informações passadas no body.

#### DELETE

O método **DELETE** tem por objetivo excluir um determinado recurso do servidor. Por exemplo, ao efetuar um DELETE sobre a URI **http://www.minhaapi.com.br/v1/cliente/10** o cliente cujo ID 10, especificado na URL, será excluído.

O método DELETE não permite o envio de body.

#### TRACE

Ecoa o pedido, de maneira que o cliente possa saber o que os servidores intermediários estão mudando em sua requisição.

#### CONNECT

Serve para uso com um proxy que possa se tornar um túnel SSL (um túnel pode ser usado, por exemplo, para criar uma conexão segura).

### Response

Para cada requisição há uma resposta por parte do host (servidor). As respostas são parecidas com as requisições e possuem uma linha inicial (status-line), cabeçalho (response header) bem como um possível body.

A status line é composta pela versão do protocolo HTTP, um código de status (status-code) da resposta, e uma descrição do código do status (reason-phrase).

O **Status-Code** indica qual o resultado obtido após a computação da requisição. Os status são divididos em famílias e cada família possui uma semântica própria.

Dentre as famílias estão:

| Família | Resultado |
| ---------- | ------------- |
| 1xx | Informativo |
| 2xx | Sucesso |
| 3xx | Redirecionamento |
| 4xx | Erro de cliente |
| 5xx | Outros erros |

Exemplos:
- Se uma requisição retornar **200** como status code significa que tudo foi computado devidamente.
- Se uma requisição retornar **404** quer dizer que o recurso especificado pelo cliente não for encontrado.
- Se uma requisição retornar **500** quer dizer que um erro inesperado aconteceu no servidor.

## REST

O REST (Transferência de Estado Representacional) é um conjunto de princípios arquiteturais que tem por objetivo a criação de APIs semânticas e padronizadas, aproveitando as funcionalidades disponíveis no protocolo HTTP.

Parece meio óbvio utilizar as funcionalidades disponíveis no protocolo entretanto a grande maioria das pessoas não conhecem bem o suficiente o protocolo e acabam utilizando o mesmo de forma inadequada.

Exemplos clássicos do mau uso do protocolo:
- Métodos get que alteram o estado do servidor;
- Despropanização do aceso aos recursos;
- Utilização do POST para a execução de todos os tipos de operações;
- Utilização incorreta dos códigos de status;

O REST vem frisar os recursos disponíveis no protocolo HTTP e nos auxiliar com a especificação de um conjunto de princípios, listados abaixo, para a criação APIS padronizadas e semânticas.

### Princípios

- Manter a comunicação cliente-servidor livre de estado, ou seja, as requisições http devem conter todos os insumos necessários para o processamento da mesma. Em outras palavras evite a utilização de sessão.
- Utilização adequada dos métodos suportados pelo protocolo HTTP. Exemplo: dado um determinado recurso, como **http://www.minhaapi.com.br/v1/cliente/** implicitamente sabemos que se fizermos um post sobre ele estaríamos inserção de um novo cliente passado no body; Se executarmos um GET em **http://www.minhaapi.com.br/v1/cliente/10** o resultado esperado é a obtenção do cliente cujo id é 10 e assim por diante.
- Padronização da identificação dos recursos, como **"/cliente"**, **"/usuário"** etc.
- Utilização de hipermídia para interligar as operações. Exemplo, ao inserirmos um cliente, retornas no corpo da mensagem um link para a consulta do cliente inserido, como por exemplo **http://www.minhaapi.com.br/v1/cliente/11** onde o id 11 foi gerado pela inserção do recurso.
