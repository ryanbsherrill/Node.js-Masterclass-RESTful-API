/** Primary file for API */

// Dependencies
const http = require('http')
const url = require('url')
const StringDecoder = require('string_decoder').StringDecoder

// Server should respond to all requests w/ a string
const server = http.createServer((req, res) => {

  // Get URL and parse
  const parsedUrl = url.parse(req.url, true)
  // "true" tells url.parse to throw its query string operations to the query strings lib

  // Get path
  const path = parsedUrl.pathname
  const trimmedPath = path.replace(/^\/+|\/+$/g, '') // regex trims slashes

  // Get query string as an object
  const queryStringObject = parsedUrl.query

  // Get HTTP Method
  const method = req.method.toLowerCase()

  // Get headers as an object
  const headers = req.headers

  // Get payload, if any
  const decoder = new StringDecoder('utf-8')
  let buffer = ''
  
  req.on('data', (data) => buffer += decoder.write(data))
  
  req.on('end', () => {
    buffer += decoder.end()
    
    // Send response
    res.end('Yellow Werld?\n')

    // Log payload
    console.log('Request received w/ payload:', buffer)
  })

  // Log request path, method, qs params, headers
  // console.log(`\nRequest received...
  // path: ${trimmedPath}
  // method: ${method}
  // params:`, queryStringObject,
  // '\n  headers:\n ', headers)
})

// Start server and listen on PORT 3000
server.listen(3000, () => console.log('Server listening on port 3000'))
