describe("Super Constructor", () => {
  class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Person {
    department: string;

    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }
  }

  it("Should have employee", () => {
    const employee = new Employee("John Doe", "IT");
    console.info(`Hallo nama saya ${employee.name}`);
    console.info(`saya dari department ${employee.department}`);
  });
});
