describe("ForEach", function () {

    it("breaks on return true", function () {
        const result = new Array<User>();

        Users.ForEach(f => {
            result.push(f);
            return true;
        });

        expect(result.length).toBe(1);
        expect(result[0]).toBe(Users[0]);
    });

    it("dont breaks on return false", function () {
        const result = new Array<User>();

        Users.ForEach(f => {
            result.push(f);
            return false;
        });

        expect(result).toEqual(Users);
    });

    it("dont breaks on return", function () {
        const result = new Array<User>();

        Users.ForEach(f => {
            result.push(f);
            return;
        });

        expect(result).toEqual(Users);
    });


});