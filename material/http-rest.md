# Protocolo HTTP e serviços REST


O protocolo HTTP (Hypertext Transfer Protocol), como o próprio nome diz, é um protocolo de comunicação entre cliente e servidor amplamente utilizado.

Basicamente ele funciona através de Requisições (Request) por parte dos clientes e Respostas (Response) por parte do servidor.

As requisições e suas respectivas respostas segue os padrões definidos na (RFC2616)[https://tools.ietf.org/html/rfc2616].

Mais especificamente as requisições possuem o seguinte padrão:

## Linha inicial (request line)

A linha inicial é composta de três partes, separadas por espaço, que especificam a o método a ser executado, a identificação do recurso (URI) e a versão do protocolo utilizada.

Exemplo:

```http
POST http://www.minhaapi.com.br/v1/cliente HTTP/1.1
```

Basicamente o método detalha o processamento que será efetuado sobre um determinado recurso, a URI identifica o recurso alvo deste processamento e a versão do protocolo especifica a forma de computação da requisição.

## Cabeçalho (request header);

É responsável por transferir informações adicionais entre o cliente e o servidor. Uma estrutura chave-valor, opcional, especificada logo após a request line.

Exemplo:

```http
POST http://www.minhaapi.com.br/v1/cliente HTTP/1.1
Accept: application/json; charset=utf-8;
Accept-Language: pt
Content-Type: application/json; charset=utf-8;
```

O header basicamente detalha os metadados da request.

## Corpo da requisição (request body)

Alguns métodos do protocolo http permitem o envio de dados para o servidor através do body da requisição.

É obrigatório a inserção de uma linha em branco entre o header e o body.

Exemplo:

```http
POST http://www.minhaapi.com.br/v1/cliente HTTP/1.1
Accept: application/json; charset=utf-8
Accept-Language: pt
Content-Type: application/json; charset=utf-8

{ "nome" : "Renan Johannsen de Paula" }
```
