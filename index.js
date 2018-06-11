/**
 * Primary file for API
*/

// Dependencies
const http = require(`http`)
const url = require(`url`)

// Server should respond to all requests w/ a string
const server = http.createServer((req, res) => {

  // 1. Get URL and parse it
  const parsedUrl = url.parse(req.url, true)
  // console.log(parsedUrl)

  // 2. Get and trim URL path
  const path = parsedUrl.pathname
  const trimmedPath = path.replace(/^\/+|\/+$/g,``)

  // 3. Send response
  res.end(`Hello World!!!\n`)

  // 4. Log trimmed path
  console.log(`Request received on path: ${trimmedPath}`)
})

// Start server and listen on port 3000
server.listen(3000, () => console.log(`Server listening on port 3000`))
