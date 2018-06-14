describe("Zip", function () {
    function selector(f: number, s: number) {
        return (f || "0") + "-" + (s || "0")
    };

    it("same length", function () {
        const data = [1, 2, 3];
        const other = [4, 5, 6];
        expect(data.Zip(other, selector)).toEqual(['1-4', '2-5', '3-6']);
    });

    it("larger length", function () {
        const data = [1, 2, 3];
        const other = [4];
        expect(data.Zip(other, selector)).toEqual(['1-4', '2-0', '3-0']);
    });

    it("lesser length", function () {
        const data = [1];
        const other = [4, 5, 6];
        expect(data.Zip(other, selector)).toEqual(['1-4']);
    });

});