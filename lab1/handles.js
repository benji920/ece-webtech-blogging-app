const url = require('url')
const qs = require('querystring')

const link='<!DOCTYPE html>' +
'<html>' +
'<body>' +
'<a href="./hello?name=john">click here to go to /hello</a>' +
'</body>'+
'</html>'

module.exports = {
    serverHandle: function (req, res) {
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)
        console.log(path);
        
        const queryParams = qs.parse(url.parse(req.url).query);
        console.log(queryParams);
        
        
        
        if (path === '/hello' && 'name' in params) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            if (params['name']==='ben')
            {res.write('Hello Im ben. Im 21 ECE student')}
            else
            res.write('Hello ' + params['name'])
        } 
        else if(path === '/'){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('/hello takes a name query prameter<br>random names reply hello<br>your own name replies with a short intro of yourself')
            res.write(link)
        }
        else if(path === '/about')
    
        {res.writeHead(200, {'Content-Type': 'text/JSON'});
            const file = require('./content/about.json')
        
            res.json(file)}
    else {
        res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('404 code')
        }
        
        res.end();
        }

}