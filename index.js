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
    
    const chosenRouteHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : routeHandlers.notFound
    const data = { trimmedPath, queryStringObject, method, headers, 'payload': buffer }
    
    chosenRouteHandler(data, (statusCode, payload) => {
      statusCode = typeof(statusCode) == 'number' ? statusCode : 200
      payload = typeof(payload) == 'object' ? payload : {}
      
      const payloadString = JSON.stringify(payload)
      
      // specify that we're returning the response to the user in JSON
      res.setHeader('Content-Type', 'application/json')
      res.writeHead(statusCode)
      res.end(payloadString)
      
      console.log('Returning this response:', statusCode, payloadString)
    })
  })
})

server.listen(3000, () => console.log('Server listening on port 3000'))

const routeHandlers = {}

routeHandlers.sample = (data, cb) => cb(406, { 'name': 'sample handler' })
routeHandlers.notFound = (data, cb) => cb(404)

const router = { 'sample': routeHandlers.sample }
