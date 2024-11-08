describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class Director extends Manager {}
});
