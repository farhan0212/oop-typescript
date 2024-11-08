describe("Visibility", () => {
  class Counter {
    protected counter: number = 0;

    /**
     * increment
     */
    public increment(): void {
      this.counter++;
    }
    /**
     * GetCounter
     */
    public GetCounter(): number {
      return this.counter;
    }
  }

  class DoubleCounter extends Counter {
    /**
     * increment
     */
    public increment(): void {
      this.counter += 2;
    }
  }

  it("should not be able to access private members", () => {
    const counter = new Counter();
    counter.increment();
    counter.increment();
    counter.increment();
    console.info(counter.GetCounter());
  });

  it("should not be able to access protected members", () => {
    const counter = new DoubleCounter();
    counter.increment();
    counter.increment();
    counter.increment();
    console.info(counter.GetCounter());
  });
});
