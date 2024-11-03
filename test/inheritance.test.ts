describe("Inheritance", () => {
  // Parent Class
  class Employee {
    name: string;
    id: number;

    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }

  class Manager extends Employee {}
  class Director extends Manager {}

  it("Should have employee", () => {
    const employee = new Employee("John Doe", 1);
    console.info(employee);
    const manager = new Manager("Jane Smith", 2);
    console.info(manager);
    const director = new Director("Tom Johnson", 3);
    console.info(director);
  });
});
