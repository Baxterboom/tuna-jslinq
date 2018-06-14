describe("AddRange", function () {
    it("at end", function () {
        expect(Fruits.AddRange(["X-Some", "X-Last"]).Last()).toBe("X-Last");
    });

    it("strings", function () {
        expect(Fruits.AddRange(["Fruit", "another Fruit"]).Count()).toBe(17);
    });

    it("numbers", function () {
        expect(Numbers.AddRange([12, 13]).Count()).toBe(16);
    });

    it("users", function () {
        expect(Users.AddRange([new User(5, "Walter", "Pankey", 61), new User(6, "Walter", "Pankey", 61)]).Count()).toBe(18);
    });

    it("null", function () {
        expect(Users.AddRange([null, null]).Count()).toBe(18);
    });

    it("undefined", function () {
        expect(Users.AddRange([undefined, undefined]).Count()).toBe(18);
    });
});