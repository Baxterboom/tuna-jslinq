describe("Add", function () {
    it("at end", function () {
        expect(Fruits.Add("X-Last").Last()).toBe("X-Last");
    });

    it("string", function () {
        expect(Fruits.Add("Fruit").Count()).toBe(16);
    });

    it("number", function () {
        expect(Numbers.Add(12).Count()).toBe(15);
    });

    it("user", function () {
        expect(Users.Add(new User(5, "Walter", "Pankey", 61)).Count()).toBe(17);
    });

    it("null", function () {
        expect(Users.Add(null).Count()).toBe(17);
    });

    it("undefined", function () {
        expect(Users.Add(undefined).Count()).toBe(17);
    });
});