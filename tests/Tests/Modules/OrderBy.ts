describe("OrderBy", function () {
    it("number", function () {
        const data = [1, 3, 2];
        expect(data.OrderBy(o => o)).toEqual([1, 2, 3]);
    });

    it("number with negativ", function () {
        const data = [1, -3, 2];
        expect(data.OrderBy(o => o)).toEqual([-3, 1, 2]);
    });

    it("string", function () {
        const data = ["a", "c", "b"];
        expect(data.OrderBy(o => o)).toEqual(["a", "b", "c"]);
    });

    // it("string mixed", function () {
    //     const data = ["a", "-3", "01", "1", "_", "c", "C", "b"];
    //     expect(data.OrderBy(o => o)).toEqual(["_", "-3", "01", "1", "a", "b", "c", "C"]);
    // });
});