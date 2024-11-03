describe("Class", () => {
  class Customer {
    constructor() {
      console.info("Create new customer");
    }
  }
  class Order {}
  it("should can create a class", () => {
    const customer: Customer = new Customer();
    const order = new Order();
  });

  it("should create a class with a constructor", () => {
    new Customer();
    new Customer();
  });
});
