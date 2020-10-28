JSLinqHelper.NonEnumerable("Move",
    function <T>(this: T[], from: number, to: number): T[] {
        this.splice(to, 0, this.splice(from, 1)[0]);
        return this;
    });