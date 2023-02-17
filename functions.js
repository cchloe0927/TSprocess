"use strict";
function addNum(n1, n2) {
    return n1 + n2;
}
//void 타입
//값을 반환하지 않는 함수를 사용하는 경우에는 void를 표준으로 사용
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    const value = cb(result);
}
printResult(addNum(5, 12));
let combineValues;
combineValues = addNum;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
