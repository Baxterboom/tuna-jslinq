describe("Aggregate", function () {
    it("string", function () {
        expect(["a", "b", "c", "d"].Aggregate((a, v) => a + "-" + v, "x")).toBe("x-a-b-c-d");
    });

    it("number", function () {
        expect([1, 2, 3, 4].Aggregate((a, v) => a + v, 0)).toBe(10);
    });
});