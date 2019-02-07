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

    it("should not add null for empty array", function () {
        expect(Booleans.AddRange(Booleans.Concat([])).Distinct().Count()).toBe(2);
    });

    it("should add null for array with null value", function () {
        expect(Booleans.AddRange(Booleans.Concat([null])).Distinct().Count()).toBe(3);
    });

});