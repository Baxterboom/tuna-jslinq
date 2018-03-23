describe("Max", function () {

    it("string", function () {
        expect(["a", "b"].Max()).toBe("b");
    });

    it("number", function () {
        expect([1, 10, 5].Max()).toBe(10);
    });

    it("number with selector", function () {
        expect([1, 10, 5].Max(a => a)).toBe(10);
    });

    it("max with negative numbers", function () {
        expect([1, -10, 5].Max()).toBe(5);
    });

    it("max with negative numbers and with selector", function () {
        expect([1, 10, -5].Max(a => a)).toBe(10);
    });

    it("empty", function () {
        expect([].Max()).toBe(null);
    });

    it("empty with selector", function () {
        expect([].Max(a => a)).toBe(null);
    });
});