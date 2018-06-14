describe("Min", function () {

    it("string", function () {
        expect(["a", "b"].Min()).toBe("a");
    });

    it("number", function () {
        expect([1, 10, 5].Min()).toBe(1);
    });

    it("number with selector", function () {
        expect([1, 10, 5].Min(a => a)).toBe(1);
    });

    it("min with negative numbers", function () {
        expect([1, -10, 5].Min()).toBe(-10);
    });

    it("min with negative numbers and with selector", function () {
        expect([1, 10, -5].Min(a => a)).toBe(-5);
    });

    it("empty", function () {
        expect([].Min()).toBe(null);
    });

    it("empty with selector", function () {
        expect([].Min(a => a)).toBe(null);
    });
});