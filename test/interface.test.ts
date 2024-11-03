describe("Interface", () => {
  interface HasName {
    name: string;
  }

  interface SayHello {
    sayHello(name: string): void;
  }

  class Person implements HasName, SayHello {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
    sayHello(name: string): void {
      console.info(`Hello ${name}`);
    }
  }

  it("Should have a name", () => {
    const person = new Person("John Doe");
    console.info(person);
  });
});
