describe("Intersect", function () {
    it("intersects", function () {
        const other = Users.Where(w => w.Age == 55);
        const result = Users.Intersect(other);
        expect(result.length).toBe(2);
        expect(result[0].Age).toBe(55);
        expect(result[1].Age).toBe(55);
    });

    it("dont intersects", function () {
        const other = [new User(666)];
        const result = Users.Intersect(other);
        expect(result.length).toBe(0);
    });
});