describe("LastOrDefault", function () {

    it("match", function () {
        expect(Users.LastOrDefault().Id).toBe(16);
    });

    it("match boolean", function () {
        expect([false, true].LastOrDefault()).toBe(true);
        expect([true, false].LastOrDefault()).toBe(false);
    });

    it("match number (boolean)", function () {
        expect([1, 0].LastOrDefault()).toBe(0);
        expect([0, 1].LastOrDefault()).toBe(1);
    });

    it("match with selector", function () {
        expect(Users.LastOrDefault(f => f.Age == 22).Id).toBe(9);
    });

    it("no match", function () {
        expect(Users.LastOrDefault(f => f.Age == 666)).toBe(null);
    });
});