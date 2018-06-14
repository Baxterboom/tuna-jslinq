describe("Remove", function () {
    it("apple", function () {
        expect(Fruits.Remove("Apple").Count()).toBe(14);
    });

    it("unknown", function () {
        expect(function () {
            Fruits.Remove("unknown");
        }).not.toThrow();

        expect(Fruits.Count()).toBe(15);
    });

    it("63", function () {
        expect(Numbers.Remove(63).Count()).toBe(13);
    });

    it("user", function () {
        expect(Users.Remove(Users[3]).Count()).toBe(15);
    });

    it("null", function () {
        expect(function () {
            Users.Remove(null);
        }).not.toThrow();

        expect(Users.Count()).toBe(16);
    });
});