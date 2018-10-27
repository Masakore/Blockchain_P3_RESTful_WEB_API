const express = require('express')
const app = express()
const port = 8000
const Blockchain = require('./Blockchain.js')
const Block = require('./Block.js')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/block/:blockId', (req, res) => {
  let blockChain = new Blockchain()
  blockChain.getBlock(req.params.blockId)
    .then((data) => {
        res.send(data)
      }
    ).catch((err) => {
        res.send(new Error(err))
    })
})

app.post('/block', (req, res) => {
  let blockChain = new Blockchain()
  let block = new Block(req.body.block_data)

  blockChain.addBlock(block).then((data) => {
    blockChain.getBlock(data)
      .then((block) => {
          res.send(JSON.parse(block))
        }
      ).catch((err) => {
          res.send(new Error(err))
      })
    }
  ).catch((err) => {
      res.send(new Error(err))
  })
})

app.listen(port, () => console.log(`Private blockchain app listening on port ${port}!`))
