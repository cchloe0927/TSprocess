//number : 모든 숫자
//string : 모든 문자열
//boolean : true, false
//object : 자바스크립트 객체
//array : 자바스크립트 배열
//tuple : 자바스크립트가 아닌 타입스크립트에만 존재. 길이뿐만아니라 타입도 고정된 배열 형식. 항상 두 개의 요소만 지녀야 한다.
//enum : 자바스크립트가 아닌 타입스크립트에만 존재. 식별자들을 중괄호 쌍 안에 넣는 방식. 열거 목록을 제공
//Example.
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
//person.role.push("admin"); //push인 경우 예외적으로 튜플에서 적용됌
//person.role[1] = 10;
//person.role = [0, 'admin', 'user']
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
if (person.role === Role.ADMIN) {
    console.log("is admin");
}
