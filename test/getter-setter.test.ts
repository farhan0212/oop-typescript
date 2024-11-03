describe("Getter & Setter", () => {
  class Category {
    _name?: string;
    get name(): string {
      if (this._name) {
        return this._name;
      } else {
        return "Unknown category";
      }
    }
    set name(value: string) {
      if (value !== "") {
        this._name = value;
      }
    }
  }

  it("Should support class", () => {
    const category = new Category();
    category.name = "Electronics";
    console.info(category.name);
    category.name = "";
    console.info(category.name);
  });
});
