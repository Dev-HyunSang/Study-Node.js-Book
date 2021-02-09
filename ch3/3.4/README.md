# 노드 내장 객체 알아보기

## [3.4.1 global](./01)
global 객체입니다. 브라우저의 window와 같은 전역 객체입니다.  
전역 객체이므로 모든 파일에서 접근할 수 있습니다. 또한 window.open 메서드를 그냥 open으로 호출 할 수 있는 것처럼 global도 생략할 수 있습니다. 노드 콘솔에 로그를 기록하는 console 객체도 원래는 global.console입니다.

## [3.4.2 console](./02/console.js)
- ```console.time(레이블)```: ```console.timeEnd(레이블)```과 대응되어 같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정합니다.
- ```console.log(내용)```: 평범한 로그를 콘솔에 표시합니다. ```console.log(내용, 내용,...)```처럼 여러 내용을 동시에 표시할 수 있습니다.
- ```console.error(에러 내용)```: 에러를 콘솔에 표시합니다. ```
- ```console.table(배열)```: 배열의 요소로 객체 리터럴을 넣으면, 객체의 속성들이 테이블 형식으로 표현됩니다. 
- ```console.dir(객체, 옵션)```: 객체를 콘솔에 표시할 때 사용합니다. 첫 번째 인수로 표시할 객체를 넣고, 두 번째 인수로 옵션을 넣습니다. 옵션의 colors를 true로 하면 콘솔에 색이 추가되어 보기가 한결 편해집니다. depth는 객체 안의 객체를 몇 단계까지 보여줄지를 결정합니다. 기본값은 2입니다.
- ```console.trace(레이블)```: 에러가 어디서 발생했는지 추적할 수 있게 합니다. 일반적으로 에러 발생 시 에러 위치를 알려주므로 자주 사용하지는 않지만, 위치가 나오지 않는다면 사용할 만합니다.

```console.time```의 시간이나 ```console.trace```의 경로는 사용자의 컴퓨터 환경에 따라 다를 수 있습니다. 

```shell
➜  02 git:(main) ✗ node console.js
평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다.
abc 1 true
에러 메시지는 console.error에 담아주세요.
┌─────────┬────────┬───────┐
│ (index) │  name  │ birth │
├─────────┼────────┼───────┤
│    0    │ '제로' │ 1994  │
│    1    │ 'hero' │ 1988  │
└─────────┴────────┴───────┘
{ outside: { indside: { key: 'value' } } }
{ outside: { indside: [Object] } }
시간 측정: 19.35ms
Trace: 에러 위치 추적
    at b (/Users/hyun.sang/Dev/GitHub/Study-Node.js-Book/ch3/3.4/02/console.js:31:13)
    at a (/Users/hyun.sang/Dev/GitHub/Study-Node.js-Book/ch3/3.4/02/console.js:35:5)
    at Object.<anonymous> (/Users/hyun.sang/Dev/GitHub/Study-Node.js-Book/ch3/3.4/02/console.js:37:1)
    at Module._compile (node:internal/modules/cjs/loader:1108:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
    at Module.load (node:internal/modules/cjs/loader:973:32)
    at Function.Module._load (node:internal/modules/cjs/loader:813:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
    at node:internal/main/run_main_module:17:47
(node:1880) Warning: No such label '전체시간' for console.timeEnd()
(Use `node --trace-warnings ...` to show where the warning was created)
```

**편리한 디버깅을 위해 console 객체에는 지금도 새로운 메서드들이 추가되고 있습니다.**

## [3.4.3 타이머](./03/timer.js)
타이머 기능을 제공하는 함수인 setTimeout, SetInterval, setImmeiate는 노드에서 window 대신 global 객체 안에 들어 있습니다. setTimeout과 setInterval은 웹 브라우저에서도 자주 사용되므로 익숙하실 겁니다.

- ```setTimeout(콜백 함수, 밀리초)```: 주어진 밀리초(1,000분의 1초) 이후에 콜백 함수를 실행합니다.
- ```setInterval(콜백 함수, 밀리초)```: 주어진 밀리초마다 콜백 함수를 반복 실행합니다.
- ```setImmediate(콜백 함수)```: 콜백 함수를 즉시 실행합니다.

**이 타이머 함수들은 모두 아이디를 반환합니다. 아이디를 사용하여 타이머를 취소할 수 있습니다.**

- ```clearTimeout(아이디)```: setTimeout을 취소합니다.
- ```clearInterval(아이디)```: setInterval을 취소합니다.
- ```clearImmediate(아이디)```: setImmediate를 취소합니다.

**제일 먼저 실행되는 것은 immediate입니다. immediate2는 바로 clearImmediate를 사용해서 취소했으므로 실행되지 않습니다. 코드 실행 1.5초 후에는 timeout의 콜백이 실행될 것입니다. interval의 콜백은 1초마다 실행되므로 코드 실행 후 2초가 지났을 때도 콜백이  실행됩니다. 2.5초가 지났을 때 clearTimeout과 clearInterval이 각각 timeout2와 interval을 취소합니다. 따라서 코드 실행 3초 후에 로그가 아무것도 남지 않습니다.**

## [3.4.4 __filename, __dirname](./04/filename.js)
노드에서는 파일 사이에 모듈 관계가 있는 경우가 많으므로 때로는 현재 파일의 경로나 파일명을 알아야 합니다.
노드에서는 __filename, __dirname이라는 키워드로 경로에 대한 정보를 제공합니다.  
파일에 __fileanme, __dirname을 넣어두면 실행시 현재 파일명과 현재 파일 경로가 바뀝니다.

## [3.4.5 module, exports, require](./05)
module.exports만 사용했는데, module 객체 말고 export 객체로도 모듈을 만들 수 있습니다.  

module.exports로 한 번에 대입하는 대신, 각각의 변수를 exports 객체에 하나씩 넣었습니다. 동일하게 동작하는 이유는 module.exports와 exports가 같은 객체를 참조하기 때문입니다.  
실제로 ```console.log(modules.exports === exports)```를 하면 true가 나옵니다. 따라서 exports 객체에 add 함수를 넣으면 module.exports에도 add 함수가 들어갑니다.