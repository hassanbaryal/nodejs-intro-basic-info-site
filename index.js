const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 8080;


const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).pathname;
  console.log(query + ' <-THIS IS IT')
  // if (query === '/') query = '/index';
  fs.readFile(`./pages${query === '/' ? '/index' : query}.html`, (err, data) => {
    if (err) {
      fs.readFile('./pages/404.html', (err, data) => {
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.write(data);
        res.end()
      });
      return ;
    }
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(data);
    return res.end();
  });
});

server.listen(port, (error) => {
  if(error) {
    console.log('Something went wrong: ' + error);
  } else {
    console.log('Server is listening on port ' + port);
  }
});
