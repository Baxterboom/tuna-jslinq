describe("FindIndex", function () {
    it("find", function () {
        expect(Users.FindIndex(f => f.Age == 55)).toBe(3);
    });

    it("dont find", function () {
        expect(Users.FindIndex(f => f.Age == 666)).toBe(-1);
    });
});