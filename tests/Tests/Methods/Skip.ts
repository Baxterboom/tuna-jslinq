describe("Skip", function () {
    const data = [1, 2, 3, 4];

    it("skip zero count", function () {
        expect(data.Skip(0)).toEqual(data);
    });

    it("skip", function () {
        expect(data.Skip(2)).toEqual([3, 4]);
    });

    it("skip bof", function () {
        expect(data.Skip(-50)).toEqual(data);
    });

    it("skip eof", function () {
        expect(data.Skip(50)).toEqual([]);
    });
});