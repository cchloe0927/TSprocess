function add(n1, n2) {
    return n1 + n2;
}
//void 타입
//값을 반환하지 않는 함수를 사용하는 경우에는 void를 표준으로 사용
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
