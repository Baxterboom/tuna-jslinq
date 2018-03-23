describe("Clone", function () {
    it("array ref test", function () {
        const clone = Users.Clone();
        expect(clone).not.toBe(Users);
        expect(clone.length).toBe(Users.length);
    });

    it("item ref test", function () {
        const clone = Users.Clone();
        clone.ForEach((f, i) => {
            expect(clone[i]).toBe(Users[i]);
        });
    });
});