const http = require('http')
const url = require('url')
const StringDecoder = require('string_decoder').StringDecoder

const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true)
  const path = parsedUrl.pathname
  const trimmedPath = path.replace(/^\/+|\/+$/g, '')
  const queryStringObject = parsedUrl.query
  const method = req.method.toLowerCase()
  const headers = req.headers
  const decoder = new StringDecoder('utf-8')
  let buffer = ''
  
  req.on('data', (data) => {
    buffer += decoder.write(data)
  })
  
  req.on('end', () => {
    buffer += decoder.end()
    
    res.end('Payload received\n')

    console.log('Request received w/ payload:', buffer)
  })
})

server.listen(3000, () => {
  console.log('Server listening on port 3000')
})
