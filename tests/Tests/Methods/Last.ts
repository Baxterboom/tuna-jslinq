describe("Last", function () {

    it("match", function () {
        expect(Users.Last().Id).toBe(16);
    });

    it("match with selector", function () {
        expect(Users.Last(f => f.Age == 22).Id).toBe(9);
    });

    it("no match", function () {
        expect(() => Users.Last(f => f.Age == 666)).toThrow();
    });
});