const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('', (req, res) => {
  res.send({ date: new Date() })
})



app.listen(3112, () => console.log('listen on 3112'))

