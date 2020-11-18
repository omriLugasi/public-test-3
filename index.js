const express = require('express')
const {httpContract} = require('@resta/resta-sdk')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const schema = {
  schemaId: '1',
  description: 'basic route',
  automatic: true
}

app.get('/dor-adn-rion', httpContract(schema), (req, res) => {
  res.send({
    date: new Date()
  })
})

const schema1 = {
  schemaId: '2',
  description: 'basic route',
  properties: {
    query: {
      type: 'object',
      properties: {
        id: {
          type: 'string'
        }
      },
      required: ['id']
    }
  }
}


app.get('/one', httpContract(schema1), (req, res) => {
  res.send(200)
})



app.listen(3112, () => console.log('listen on 3112'))

