describe("Method Override", () => {
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello(name: string): void {
      console.info(`Hello ${name}, I'm ${this.name}`);
    }
  }

  class Manager extends Employee {
    sayHello(name: string): void {
      console.info(`Hello ${name}, My name is ${this.name} i'm your manager!`);
    }
  }

  it("should support", () => {
    const employee = new Employee("John Doe");
    employee.sayHello("John");
    const manager = new Manager("Jane Smith");
    manager.sayHello("John");
  });
});
