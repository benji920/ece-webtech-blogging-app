const url = require('url')
const qs = require('querystring')


module.exports = {
    serverHandle: function (req, res) {
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)
        console.log(path);
        
        const queryParams = qs.parse(url.parse(req.url).query);
        console.log(queryParams);
        
        res.writeHead(200, {'Content-Type': 'text/plain'});
        
        if (path === '/hello' && 'name' in params) {
            res.write('Hello ' + params['name'])
        } else {
            res.write('404 code')
        }
        
        res.end();
        }

}