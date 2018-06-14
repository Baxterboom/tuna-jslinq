describe("OrderByDescending", function () {
    it("number", function () {
        const data = [1, 3, 2];
        expect(data.OrderByDescending(o => o)).toEqual([3, 2, 1]);
    });

    it("number with negativ", function () {
        const data = [1, -3, 2];
        expect(data.OrderByDescending(o => o)).toEqual([2, 1, -3]);
    });

    it("string", function () {
        const data = ["a", "c", "b"];
        expect(data.OrderByDescending(o => o)).toEqual(["c", "b", "a"]);
    });

    // it("string mixed", function () {
    //     const data = ["a", "-3", "01", "1", "_", "c", "C", "b"];
    //     expect(data.OrderByDescending(o => o)).toEqual(["_", "-3", "01", "1", "a", "b", "c", "C"].Reverse());
    // });
});