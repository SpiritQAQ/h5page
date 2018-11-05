const express = require('express')
const request = require('request-promise')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 4000


const HEADERS = {
  'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'origin': 'https://dev.xiaobuke.com',
  'Host': 'dev.xiaobuke.com',
  'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
}

async function fetch(url, res) {
  try {
    res.json(await request({
      uri: url,
      json: true,
      headers: HEADERS
    }))
  } catch(e) {
    console.log(e)
    res.json({ error: e.message })
  }
}

app.use(cors())

app.get('/', async (req, res) => {
  const url = `http://dev.xiaobuke.com/book/h5/detail/1671`
  fetch(url, res)
  .then(consolg.log(res))
  
})