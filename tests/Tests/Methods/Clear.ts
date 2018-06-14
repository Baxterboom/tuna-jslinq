describe("Clear", function () {
    it("clear", function () {
        expect(Users.Clear().Count()).toBe(0);
    });
});