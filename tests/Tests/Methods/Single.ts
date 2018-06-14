describe("Single", function () {
    var data: number[];

    beforeEach(() => {
        data = [1, 2, 3, 3];
    });

    it("match", function () {
        expect([1].Single()).toBe(1);
    });

    it("match with selector", function () {
        expect(data.Single(f => f == 2)).toBe(2);
    });

    it("empty", function () {
        expect(() => [].Single()).toThrow();
    });

    it("no match", function () {
        expect(() => data.Single(f => f == 666)).toThrow();
    });

    it("dublicate match", function () {
        expect(() => data.Single(f => f == 3)).toThrow();
    });
});