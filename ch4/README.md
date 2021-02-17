# http 모듈로 서버 만들기

- 4.1 요청과 응답 이해하기
- 4.2 REST와 라우팅 사용하기
- 4.3 쿠키와 세션 이해히기
- 4.4 http와 http2
- 4.5 cluster
- 4.6 함께 보면 좋은 자료

## [4.1 요청과 응답 이해하기](./01)
서버는 클라인어트가 있기에 동작합니다. 클라이언트에서 서버로 요청(Request)을 보내고, 서버에서는 요청의 내용을 읽고 처리한 뒤에 클라이언트에 응답(Response)을 보냅니다. 

서버에는 요청을 받는 부분과 응답을 보내는 부분이 있어야 합니다. 요청과 응답은 이벤트 방식이라고 생각하면 됩니다. 클라이언트로부터 요청이 왔을 때 어떤 작업을 수행할지 이벤트 리스너를 미리 등록해두어야 합니다.

```js
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Sever!</p>');
}).listen (3000, () => {
    console.log('3000번 포트에서 서버가 대기 중입니다. http://127.0.0.1:3000');
})
```
createServer 메서드 뒤에 listen 메서드가 붙이고 클라이언트에 공개할 포트 번호와 포트 연결 완료 후 실행될 콜백 함수를 넣게 됩니다.

res 객체에는 res.writeHead와 res.write, res.end 메서드가 있습니다. res.writeHead는 응답에 대한 정보를 기록하는 메서드입니다. 첫 번째 인수로 **성공적인 요청임**을 의미하는 200을, 두 번째 인수로 응답에 대한 정보를 보내는데 콘텐츠의 형식이 HTML임을 알리고 있습니다. 또한 한글 표시를 위해 charset을 UTF-8을 지정하였습니다. 이 정보들이 기록되는 부분을 **헤더(Header)**라고 부릅니다.

res.write 메서드의 첫 번째 인수는 클라이언트로 보낼 데이터입니다. 지금은 HTML 모양의 문자열을 보냈지만 버퍼를 보낼 수도 있습니다. 또한 여러 번 호출해서 데이터를 여러 개 보내도 됩니다. 데이터가 기록되는 부분을 본문(Body)이라고 부릅니다.

res.end는 응답을 종료하는 메서드입니다. 만약 인수가 있다면 그 데이터도 클라인언트로 보내고 응답을 종료합니다. 따라서 위의 예제는 res.write에서 ```<h1>Hello Node!</h1>``` 문자열을, res.end에서 ```<p>Hello Server!</p>``` 문자열을 클라이언트로 보낸 후 응답이 종료된 것이빈다. 브라우저는 응답 내용을 받아서 렌더링합니다.

- [HTTP MIME 타입](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
- [HTTP 상태 코드](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)
