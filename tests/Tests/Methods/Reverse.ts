describe("Reverse", function () {
    var data: number[];

    beforeEach(() => {
        data = [1, 2, 3, 4];
    });

    it("Repeat", function () {
        expect(data.Reverse()).toEqual([4, 3, 2, 1]);
    });
});