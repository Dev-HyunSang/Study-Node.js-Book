const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(3000, () => {
    console.log('3000번 포트에서 서버 대기 중입니다!');
});

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(3001, () => {
    console.log('3001번 포트에서 서버 대기 중입니다!');
});