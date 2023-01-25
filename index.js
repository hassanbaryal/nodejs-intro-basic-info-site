const http = require('http');
const express = require('express');
const path = require('path');
const fs = require('fs');
const url = require('url');

const app = express();
const port = 8080;


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/index.html'));
})

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/index.html'));
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/about.html'));
})


app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/contact-me.html'));
})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/404.html'));
})


// const server = http.createServer((req, res) => {
//   const query = url.parse(req.url, true).pathname;
//   console.log(query + ' <-THIS IS IT')
//   // if (query === '/') query = '/index';
//   fs.readFile(`./pages${query === '/' ? '/index' : query}.html`, (err, data) => {
//     if (err) {
//       fs.readFile('./pages/404.html', (err, data) => {
//         res.writeHead(404, {'Content-Type' : 'text/html'});
//         res.write(data);
//         res.end()
//       });
//       return ;
//     }
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// });

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
