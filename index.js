/**
 * Primary file for API
*/

// dependencies
const http = require('http')
const url = require('url')

// the server should respond to all requests with a string
const server = http.createServer((req, res) => {

  // get url and parse
  const parsedUrl = url.parse(req.url, true)

  // get the url path

  // send the response

  // log the request path

  res.end('Yellow Werld!\n')
})

// start the server and have it listen on port 3000
const PORT = 3000

server.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`)
})
