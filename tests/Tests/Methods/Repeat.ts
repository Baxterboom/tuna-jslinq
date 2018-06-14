describe("Repeat", function () {
    var data: number[];

    beforeEach(() => {
        data = [1, 2, 3, 4];
    });

    it("Repeat zero count", function () {
        expect(data.Repeat(666, 0)).toEqual(data);
    });

    it("Repeat", function () {
        expect(data.Repeat(666, 2)).toEqual([1, 2, 3, 4, 666, 666]);
    });

    it("Repeat bof", function () {
        expect(data.Repeat(666, -50)).toEqual(data);
    });

    it("Repeat eof", function () {
        expect(data.Repeat(666, 50)).toEqual(data);
    });
});