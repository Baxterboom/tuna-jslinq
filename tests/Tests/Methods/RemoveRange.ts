describe("RemoveRange", function () {
    var data: number[];

    beforeEach(() => {
        data = [1, 2, 3, 4];
    });

    it("removeRange zero count", function () {
        expect(data.RemoveRange(1, 0)).toEqual(data);
        expect(data.length).toBe(4);
    });

    it("removeRange", function () {
        expect(data.RemoveRange(1, 2)).toEqual([1, 4]);
        expect(data.length).toBe(2);
    });

    it("removeRange bof", function () {
        expect(data.RemoveRange(-50, 2)).toEqual([3, 4]);
        expect(data.length).toBe(2);
    });

    it("removeRange eof", function () {
        expect(data.RemoveRange(50, 2)).toEqual(data);
        expect(data.length).toBe(4);
    });
});