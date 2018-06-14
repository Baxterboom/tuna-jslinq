describe("Contains", function () {
    it("number - contains", function () {
        expect(Numbers.Contains(55)).toBe(true);
    });

    it("number dont contains", function () {
        expect(Numbers.Contains(666)).toBe(false);
    });

    it("string - contains", function () {
        expect(Fruits.Contains("Apple")).toBe(true);
    });

    it("string dont contains", function () {
        expect(Fruits.Contains("666")).toBe(false);
    });

     it("object - contains", function () {
        const user = new User(666);
        expect(Users.Add(user).Contains(user)).toBe(true);
    });

    it("object dont contains", function () {
        const user = new User(666);
        expect(Users.Contains(user)).toBe(false);
    });
});