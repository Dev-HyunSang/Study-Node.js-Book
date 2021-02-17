const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Sever!</p>');
}).listen (3000, () => {
    console.log('3000번 포트에서 서버가 대기 중입니다. http://127.0.0.1:3000');
})