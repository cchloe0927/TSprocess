class Department {
  // private id: string;
  // public name: string;
  protected employees: string[] = []; //private : 생성된 객체 내부에서만 접근할 수 있는 속성

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  //describe() 함수를 통해 여러 개의 테스트 함수를 묶는 것이 가능하다.
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employees: string) {
    //validation etc
    // this.id = "d2";
    this.employees.push(employees);
  }

  printEmployeeInfomation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Acocunting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

// it.employees[2] = "Anna";

it.describe();
it.name = "NEW NAME";
it.printEmployeeInfomation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = "";
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printReports();
accounting.printEmployeeInfomation();

// const itCopy = { name: "DUMMY", describe: it.describe };

// itCopy.describe();
