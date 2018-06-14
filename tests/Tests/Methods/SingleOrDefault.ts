describe("SingleOrDefault", function () {
    var data: number[];

    beforeEach(() => {
        data = [1, 2, 3, 3];
    });

    it("match", function () {
        expect([1].SingleOrDefault()).toBe(1);
    });

    it("match with selector", function () {
        expect(data.SingleOrDefault(f => f == 2)).toBe(2);
    });

    it("empty", function () {
        expect([].SingleOrDefault()).toBe(null);
    });

    it("no match", function () {
        expect(data.SingleOrDefault(f => f == 666)).toBe(null);
    });

    it("dublicate match", function () {
        expect(() => data.SingleOrDefault(f => f == 3)).toThrow();
    });
});