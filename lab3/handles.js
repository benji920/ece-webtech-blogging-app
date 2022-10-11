const url = require('url')
const qs = require('querystring')
const fs = require('fs')
const p = require('path')

module.exports = {
  serverHandle: function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname 
    const params = qs.parse(route.query)
    // Routes
    switch (path) {
      case '/':
        res.writeHead(200, {'Content-Type': 'text/html'})
        const content = '<!DOCTYPE html>' +
        '<html>' +
        '    <head>' +
        '        <meta charset="utf-8" />' +
        '        <title>Web Technologies project</title>' +
        '    </head>' + 
        '    <body>' +
        '       <h1>Web Technologies project</h1>' +
        '       <h2>Usage instructions</h2>' +
        '       <ul>' +
        '           <li>Go to the <a href="/hello">"Hello page"</a> to greet anonymous person.</li>' +
        '           <li>Use the "<code>name</code>" query parameter to personalize the hello message. For example, <a href="/hello?name=Steve">greet Steve</a>.</li>' +
        '           <li>Use "<code>?name=Peter</code>" to show an info about Peter. Go to the <a href="/hello?name=peter">Peter\'s page</a>.</li>' +
        '           <li>Content pages: <a href="/about">About</a>, <a href="/contacts">Contacts</a></li>' +
        '           <li>Other pages will respond with 404 error. For example, go to <a href="/random-page">this random page</a>.</li>' +
        '       </ul>' +
        '    </body>' +
        '</html>'
        res.write(content)
        break
      case '/hello':
        res.writeHead(200, {'Content-Type': 'text/plain'})
        if ('name' in params) {
          if (params['name'].toLowerCase() === 'peter') {
            res.write('Hello! I am Peter, I am a Web developer.')
          } else {
            res.write(`Hello ${params['name']}!`)
          }
        } else {
          res.write('Hello anonymous!')
        }
        break
      default:
        try {
          // Note, require() is not a correct way of reading content from filesystem.
          // It is used here for simplicity.
          // Learn fsPromises.readFile() to do read from a file correctly -
          // https://nodejs.org/api/fs.html#fspromisesreadfilepath-options
          const data = require(`../content/${path}.json`);
          res.writeHead(200, {'Content-Type': 'application/json'})
          res.write(JSON.stringify(data))
        } catch (err) {
          // If no file present, return 404 error
          res.writeHead(404, {'Content-Type': 'text/plain'})
          res.write("Error 404! The page doesn't exist.")
        }
    }
    // Finish the response
    res.end()
  }
}
