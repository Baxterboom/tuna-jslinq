describe("Range", function () {
    var data: number[];

    beforeEach(() => {
        data = [1, 2, 3, 4];
    });

    it("range zero count", function () {
        expect(data.Range(1, 0)).toEqual([]);
    });

    it("range", function () {
        expect(data.Range(1, 2)).toEqual([2, 3]);
    });

    it("range bof", function () {
        expect(data.Range(-50, 2)).toEqual([1, 2]);
    });

    it("range eof", function () {
        expect(data.Range(50, 2)).toEqual([]);
    });
});