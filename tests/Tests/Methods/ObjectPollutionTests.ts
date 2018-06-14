describe("Object Pollution Tests", function () {

  it("should not iterate over object members", function () {
    const array = [1, 2, 3];
    const result = new Array<any>();
    for (let item in array) {
      result.Add(item);
    }

    expect(result.length).toBe(3);
    expect(result[0]).toBe("0");
    expect(result[1]).toBe("1");
    expect(result[2]).toBe("2");
  });

  describe("IArrayState", function () {

    describe("Order", function () {

      it("should have Order defined", function () {
        const array = [1, 2, 3];
        expect(array._JSLinq.Order).toBeDefined();
      });

      it("should not iterate over Order members", function () {
        const array = [1, 2, 3].OrderBy(o => o);
        const result = new Array<any>();
        for (let item in array) {
          result.Add(item);
        }

        expect(result._JSLinq.Order).toBeDefined();
        expect(result.length).toBe(3);
        expect(result[0]).toBe("0");
        expect(result[1]).toBe("1");
        expect(result[2]).toBe("2");
      });
    });

  });
});