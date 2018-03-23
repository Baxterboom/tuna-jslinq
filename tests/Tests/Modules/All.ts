describe("All", function () {
    let data = [{ id: 1 }, { id: 1 }, { id: 1 }]

    it("all", function () {
        expect(data.Clone().All(a => a.id === 1)).toBe(true);
    });

    it("all", function () {
        expect(data.Clone().Add({ id: 1 }).All(a => a.id === 1)).toBe(true);
    });

    it("not all", function () {
        expect(data.Clone().Add({ id: 2 }).All(a => a.id === 1)).toBe(false);
    });
});