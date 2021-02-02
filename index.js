const topics = require('./data/topics.json')
const paragraphs = require('./data/paragraphs.json')

const express = require('express')
const app = express()
const port = 3000

app.get('/paragraphs', (req, res) => {
  res.json(paragraphs)
})

app.get('/topics', (req, res) => {
  res.json(topics)
})

app.listen(port, () => {
  console.log(`Ms backend mock listening at http://localhost:${port}`)
})
