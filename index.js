/**
 * Primary file for API
*/

// dependencies
const http = require(`http`)
const url = require(`url`)

// the server should respond to all requests with a string
const server = http.createServer((req, res) => {

  // get url and parse it
  const parsedUrl = url.parse(req.url, true)
  // console.log(parsedUrl)

  // get the url path
  const path = parsedUrl.pathname
  const trimmedPath = path.replace(/^\/+|\/+$/g,``)
  // console.log(path)
  // console.log(trimmedPath)

  // send the response
  res.end(`Hello World!!!\n`)

  // log the request path
  console.log(`Request received on path: ${trimmedPath}`)

})

// start the server and have it listen on port 3000
const PORT = 3000

server.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`)   
})
