//✅ Var vs Const vs Let
// const userName = "Max";
// userName = 'Min'  -> ❌

// let age = 30;
// age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

//✅ Arrow Function
// const add = (a: number, b: number = 1) => {
//   return a + b;
// };

// const printOutput = (output: string | number) => console.log(output);
// printOutput(add(5, 2));

// const printOutput: (a: string | number) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(add(5));

//✅ Spread
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

// activeHobbies.push(hobbies[0], hobbies[1])
activeHobbies.push(...hobbies);

const person = {
  firstName: "Max",
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

//✅ Destructuring 구조분해
// const hobby1 = hobbies[0]
// const hobby2 = hobbies[1]
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { firstName, age } = person;
console.log(firstName, age, person);
