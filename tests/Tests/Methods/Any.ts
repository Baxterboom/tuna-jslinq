describe("Any", function () {
    it("any", function () {
        expect(Users.Any()).toBe(true);
    });

    it("empty", function () {
        expect([].Any()).toBe(false);
    });

    it("null", function () {
        expect([null].Any()).toBe(true);
    });

    it("null with selector", function () {
        expect([null].Any(a => true)).toBe(true);
    });

    it("age > 70", function () {
        expect(Users.Any(x => x.Age > 70)).toBe(true);
    });

    it("age > 90", function () {
        expect(Users.Any(x => x.Age > 90)).toBe(false);
    });

    it("age < 18", function () {
        expect(Users.Any(x => x.Age < 18)).toBe(false);
    });
});