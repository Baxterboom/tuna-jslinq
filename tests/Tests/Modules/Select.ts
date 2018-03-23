describe("Select", function () {
    it("match", function () {
        expect(Numbers.Select(s => s)).toEqual([76, 122, 63, 782, 85, 87, 55, 63, 35, 1, -10, 63.2, 627, 1000]);
    });

    it("with selector", function () {
        expect(Users.Select(s => s.Id)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    });
});