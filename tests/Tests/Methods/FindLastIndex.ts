describe("FindLastIndex", function () {
    it("find", function () {
        expect(Users.FindLastIndex(f => f.Age == 55)).toBe(4);
    });

    it("dont find", function () {
        expect(Users.FindLastIndex(f => f.Age == 666)).toBe(-1);
    });
});