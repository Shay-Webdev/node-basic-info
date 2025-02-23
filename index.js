const http = require('http');
const fs = require('fs');

const url = new URL('http://localhost:8080/');
http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url === '/') {
      res.write(fs.readFileSync('./index.html'));
      res.end();
    } else if (req.url === '/about') {
      res.write(fs.readFileSync('./about.html'));
      res.end();
    } else if (req.url === '/contact-me') {
      res.write(fs.readFileSync('./contact-me.html'));
      res.end();
    } else {
      res.write(fs.readFileSync('./404.html'));
      res.end();
    }
  })
  .listen(8080);

// console.log(fs);
