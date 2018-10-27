# Blockchain_P3_RESTful_WEB_API
Simple RESTful API using a Express.js framework that will interfaces with the private blockchain.

## Usage
1. Run command -> $npm install
2. Run command -> $node index.js

## API
* [<code><b>Get <hostname>/block/:blockId</b></code>](#get_block)
* [<code><b>Post <hostname>/block/</b></code>](#post_block)

<a name="get_block"></a>
### `GET <hostname>/block/:blockID`

Calling this endpoint with block id and will return a result in JSON format like below.

```
Sample result:

{
"hash":"49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3",
"height":0,
"body":"First block in the chain - Genesis block",
"time":"1530311457",
"previousBlockHash":""
}
```

<a name="post_block"></a>
### `POST <hostname>/block/`

Calling this endpoint with http body which contain the data you would like to add to this blockchain. And then, you would see the stored block in JSON format like below.

```
Sample http body:
{
      "body": "Testing block with test string data"
}
```

```
Sample result:

{
"hash":"49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3",
"height":0,
"body":"First block in the chain - Genesis block",
"time":"1530311457",
"previousBlockHash":""
}
```
