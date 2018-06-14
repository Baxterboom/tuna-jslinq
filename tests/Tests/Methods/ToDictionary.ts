describe("ToDictionary", function () {

    it("objects", function () {
        const data = [new User(1, "A"), new User(2, "B"), new User(3, "A")];
        const result = data.ToDictionary(k => k.FirstName, v => v.Id);
        expect(result.A).toEqual([1, 3]);
        expect(result.B).toEqual([2]);
    });
});