const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(`
    <h1>Xin chao tu Docker!</h1>
    <p>Day la project cua Doanh va Hai Anh</p>
    <p>Version: 1.0</p>
  `);
}).listen(3000, () => console.log('App dang chay port 3000!'));