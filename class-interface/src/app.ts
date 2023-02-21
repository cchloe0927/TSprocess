//인터페이스 : 객체의 구조를 정의할 수 있게 한다.
//아래와 같은 구조를 가져야 하는 객체에 대한 타입을 확인하는 타입으로 사용할 수 있다.
//클래스와 상속을 사용하는 경우 하나의 클래스로부터만 상속할 수 있고 다수의 클래스로부터는 상속할 수 없다.
//인터페이스의 경우 여러 인터페이스로부터 상속받을 수 있다는 차이가 있다.

//함수타입으로서의 인터페이스
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Max");
// user1.name = 'Manu'

user1.greet("Hi there - I am");
console.log(user1);
