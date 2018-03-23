describe("GroupBy", function () {

    it("booleans", function () {
        const result = Booleans.GroupBy(g => g);
        expect(result.true.length).toBe(5);
        expect(result.false.length).toBe(6);
    });

    it("objects", function () {
        const test = [new User(1, "A"), new User(2, "B"), new User(3, "A")];
        const result = test.GroupBy(g => g.FirstName);
        expect(result.A.length).toBe(2);
        expect(result.B.length).toBe(1);
    });
});