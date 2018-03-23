describe("TakeWhile", function () {
    const data = [1, 2, 3, 4];

    it("take", function () {
        expect(data.Clone().TakeWhile(t => t < 3)).toEqual([1, 2]);
    });

    it("take all", function () {
        expect(data.Clone().TakeWhile(t => true)).toEqual(data);
    });

    it("take none", function () {
        expect(data.Clone().TakeWhile(t => false)).toEqual([]);
    });
});