describe("Parameter Properties", () => {
  class Person {
    constructor(public name: string) {}
  }

  it("should be able to access public members", () => {
    const person = new Person("John Doe");
    console.info(person.name);
    expect(person.name).toBe("John Doe");
  });
});
