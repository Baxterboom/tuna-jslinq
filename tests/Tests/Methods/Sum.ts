describe("Sum", function () {

    it("sum", function () {
        expect(["a", "b"].Sum() as any).toBe("0ab");
    });

    it("sum", function () {
        expect([10, 5].Sum()).toBe(15);
    });

    it("sum", function () {
        expect([10, 5].Sum(a => a)).toBe(15);
    });

    it("sum", function () {
        expect([-10, 5].Sum(a => a)).toBe(-5);
    });

    it("sum", function () {
        expect([10, -5].Sum(a => a)).toBe(5);
    });

    it("sum", function () {
        expect([].Sum(a => a)).toBe(0);
    });
});