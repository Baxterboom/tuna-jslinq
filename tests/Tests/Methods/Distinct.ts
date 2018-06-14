describe("Distinct", function () {
    it("numbers", function () {
        expect(Numbers.AddRange(Numbers).Distinct().Count()).toBe(13);
    });

    it("strings", function () {
        expect(Fruits.AddRange(Fruits).Distinct().Count()).toBe(15);
    });

    it("booleans", function () {
        expect(Booleans.AddRange(Booleans).Distinct().Count()).toBe(2);
    });
});