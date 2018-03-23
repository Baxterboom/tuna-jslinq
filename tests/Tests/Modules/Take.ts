describe("Take", function () {
    const data = [1, 2, 3, 4];

    it("take zero count", function () {
        expect(data.Take(0)).toEqual([]);
    });

    it("take", function () {
        expect(data.Take(2)).toEqual([1, 2]);
    });

    it("take bof", function () {
        expect(data.Take(-50)).toEqual([]);
    });

    it("take eof", function () {
        expect(data.Take(50)).toEqual(data);
    });
});