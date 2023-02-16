function add(n1: number, n2: number) {
  return n1 + n2;
}

//void 타입
//값을 반환하지 않는 함수를 사용하는 경우에는 void를 표준으로 사용
function printResult(num: number) {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  const value = cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
