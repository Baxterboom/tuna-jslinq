describe("Average", function () {
    const data = [10, 5];
    
    it("string", function () {
        expect(["a", "b"].Average()).toEqual(NaN);
    });
    
    it("average", function () {
        expect(data.Average()).toBe(7.5);
    });

    it("average", function () {
        expect(data.Average(a => a)).toBe(7.5);
    });
});