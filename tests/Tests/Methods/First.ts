describe("First", function () {

    it("match", function () {
        expect(Users.First().Id).toBe(1);
    });

    it("match with selector", function () {
        expect(Users.First(f => f.Age == 22).Id).toBe(3);
    });

    it("no match", function () {
        expect(() => Users.First(f => f.Age == 666)).toThrow();
    });
});