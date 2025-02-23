const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});
app.get('/:name', (req, res) => {
  const fileName = req.params.name;
  res.sendFile(`./${fileName}.html`, { root: __dirname }, (err) => {
    if (err) {
      res.status(404).sendFile('./404.html', { root: __dirname });
    } else {
      console.log('File sent successfully');
    }
  });
});
app.listen(8080);

// const url = new URL('http://localhost:8080/');
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     if (req.url === '/') {
//       res.write(fs.readFileSync('./index.html'));
//       res.end();
//     } else if (req.url === '/about') {
//       res.write(fs.readFileSync('./about.html'));
//       res.end();
//     } else if (req.url === '/contact-me') {
//       res.write(fs.readFileSync('./contact-me.html'));
//       res.end();
//     } else {
//       res.write(fs.readFileSync('./404.html'));
//       res.end();
//     }
//   })
//   .listen(8080);

// console.log(fs);
