describe("Move", function () {
    it("move", function () {
        const length = Users.length;
        const user1 = Users[1];
        const user5 = Users[5];
        Users.Move(1, 5);
        expect(Users[5]).toBe(user1);
        expect(Users[4]).toBe(user5);
        expect(Users.length).toBe(length);
    });
});