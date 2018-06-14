describe("RemoveAt", function () {
    var data: number[];

    beforeEach(() => {
        data = [1, 2, 3, 4];
    });

    it("removeAt", function () {
        expect(data.RemoveAt(1)).toEqual([1, 3, 4]);
        expect(data.length).toBe(3);
    });

    it("removeAt bof", function () {
        expect(data.RemoveAt(-50)).toEqual(data);
    });

    it("removeAt eof", function () {
        expect(data.RemoveAt(50)).toEqual(data);
    });
});