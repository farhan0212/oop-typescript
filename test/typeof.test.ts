describe("Instance of", () => {
  it("should check if an object is an instance of a class", () => {
    class Employee {}
    class Manager {}

    const budi = new Employee();
    const farhan = new Manager();

    expect(budi instanceof Employee).toBe(true);
    expect(budi instanceof Manager).toBe(false);
    expect(farhan instanceof Employee).toBe(false);
    expect(farhan instanceof Manager).toBe(true);
  });
});
