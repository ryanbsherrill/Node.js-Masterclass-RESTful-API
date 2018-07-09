/** Primary file for api */

// Dependencies
const http = require('http')
const url = require('url')

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

  // Send response
  res.end('Yellow Werld?\n')

  // Log request path
  console.log(`Request received on path: ${trimmedPath}, w/ method: ${method}, and query string params:`, queryStringObject)

})

// Start server and listen on PORT 3000
server.listen(3000, () => console.log('Server listening on port 3000'))
