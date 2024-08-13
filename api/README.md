# server

Este projeto foi criado usando bun init no bun v1.0.25.

Para instalar dependências:

```bash
bun install
# ou npm istall
# ou yarn istall
# ou pnpm istall
```

Para executar:

```bash
bun dev
# ou npm run dev
# ou yarn dev
# ou pnpm dev
```

</br>

## CRUD

As rotas sao divisidas em duas, rotas direcionadas para Clientes e para o Logista.

</br>

### Client

##### Creat Client

criar uma Usuario como cliente.

- post

```http
http://localhost:3333/clients
```

```json
{
  "name": "jonh", //String
  "surname": "doe", //String
  "email": "jonh@doe.com", //String
  "cpf": 99999999999 //number
}
```

##### Creat address

cadastrar o endereco:

- post

```http
http://localhost:3333/clients/[:clientId]/address
```

```json
{
  "street": "",
  "addressee": "",
  "city": "",
  "state": "",
  "zip_code": 11111111,
  "house_number": ""
}
```

##### Get all Client

puxar todas as pesquisas.

- get

```http
http://localhost:3333/clients
```

##### Get Client unique

puxar um client espesifico e seu endereco.

- get

```http
http://localhost:3333/client/[:clientId]
```

</br>

### Logista

##### Creat Item

criar o cadastro de um item para seu inventario.

- post

```http
http://localhost:3333/peca
```

```json
{
	"title": "",
	"description": "",
	"piece": number, // Int
	"sort": "",
	"about": "",
	"imageURL":[                 // Array
		"http://banco.de/imagem" // url da imagem
	]
}
```

##### Get All Item

puxar todos os itens do inventario.

- get

```http
http://localhost:3333/peca
```

##### Get Unique Item

puxando um item especifico.

- get

```http
http://localhost:3333/item/[:itemId]
```

##### Delete Item

deletar um item especifico.

- delete

```http
http://localhost:3333/peca/[:itemId]
```

##### Update Item

para atualizar parcialmente os itens.

- patch

```http
http://localhost:3333/peca/[:itemId]
```

```json
{
  "title": ""
  // "description": "",
  // "piece": "",
  // "about": "",
  // "imageURL": [""]
}
```
