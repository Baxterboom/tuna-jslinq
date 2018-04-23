describe("JSLinq", function () {
    it("should return empty array", function () {
        expect(JSLinq()).toEqual([]);
        expect(JSLinq(null)).toEqual([]);
        expect(JSLinq(undefined)).toEqual([]);
    });

    it("should return array", function () {
        expect(JSLinq(1)).toEqual([1]);
        expect(JSLinq("2")).toEqual(["2"]);
    });

    it("should return array", function () {
        const array = [1, 3, 4];
        expect(JSLinq(array)).toBe(array);
    });
});