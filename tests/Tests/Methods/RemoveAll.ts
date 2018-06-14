describe("RemoveAll", function () {

    it("removeAll", function () {
        expect(Users.RemoveAll().length).toBe(0);
        expect(Users.length).toBe(0);
    });

    it("removeAll with selector", function () {
        expect(Users.length).toBe(16);
        expect(Users.RemoveAll(r => r.Age == 22).length).toBe(14);
        expect(Users.length).toBe(14);
    });
});