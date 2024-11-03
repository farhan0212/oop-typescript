describe("properties", () => {
  class Customer {
    readonly id: number;
    name: string = "Guest";
    age?: number;
    constructor(id: number, name: string, age?: number) {
      this.id = id;
      this.name = name;
    }
    sayHello(name: string) {
      console.info(`Hello, ${name}! My name is ${this.name}`);
    }
  }

  it("should properties", () => {
    const customer = new Customer(1, "farhan");
    console.info(customer);
  });
  it("should have methods", () => {
    const customer = new Customer(1, "farhan");
    customer.sayHello("John");
    console.info(customer);
  });
});
