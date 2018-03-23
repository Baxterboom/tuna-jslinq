describe("Get", function () {

    it("match", function () {
        expect(Users.Get(4).Id).toBe(5);
    });

    it("match boolean", function () {
        expect([true].Get(0)).toBe(true);
        expect([false].Get(0)).toBe(false);
    });

    it("match number (boolean)", function () {
        expect([0].Get(0)).toBe(0);
        expect([1].Get(0)).toBe(1);
    });

    it("no match", function () {
        expect(Users.Get(666)).toBeNull();
    });
});