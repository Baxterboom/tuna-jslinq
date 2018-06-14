describe("Insert", function () {
    const user = new User(1);

    it("inserts", function () {
        const length = Users.length;
        Users.Insert(user, 2);
        expect(Users.length).toBe(length + 1);
        expect(Users.Get(2)).toBe(user);
    });
});