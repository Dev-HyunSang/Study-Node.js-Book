// 노드 내장 객체 알아보기 - Global 
const A = require('./globalA');

global.message = "안녕하세요";
console.log(A());