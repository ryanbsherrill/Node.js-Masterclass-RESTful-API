/**
 * Primary file for api
*/

// Dependencies
const http = require('http')
const url = require('url')

// Server should respond to all requests w/ a string
const server = http.createServer((req, res) => {

  // Get URL and parse
  const parsedUrl = url.parse(req.url, true)

  // Get path
  const path = parsedUrl.pathname
  const trimmedPath = path.replace(/^\/+|\/+$/g, '') // regex trims slashes

  // Get HTTP Method
  const method = req.method.toLowerCase()

  // Send response
  res.end('Yellow Werld?\n')

  // Log request path
  console.log(`Request received on path: ${trimmedPath} w/ method: ${method}`)

})

// Start server and listen on PORT 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000')
})
