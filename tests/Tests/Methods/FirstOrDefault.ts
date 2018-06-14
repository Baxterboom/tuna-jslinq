describe("FirstOrDefault", function () {

    it("match", function () {
        expect(Users.FirstOrDefault().Id).toBe(1);
    });

    it("match boolean", function () {
        expect([true, false].FirstOrDefault()).toBe(true);
        expect([false, true].FirstOrDefault()).toBe(false);
    });

    it("match number (boolean)", function () {
        expect([0, 1].FirstOrDefault()).toBe(0);
        expect([1, 0].FirstOrDefault()).toBe(1);
    });

    it("match with selector", function () {
        expect(Users.FirstOrDefault(f => f.Age == 22).Id).toBe(3);
    });

    it("no match", function () {
        expect(Users.FirstOrDefault(f => f.Age == 666)).toBeNull();
    });
});