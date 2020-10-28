JSLinqHelper.NonEnumerable("SequenceEqual",
    function <T>(this: T[], array: T[]): boolean {
        if (this === array) {
            return true;
        }

        if (this.length !== array.length) {
            return false;
        }

        // return this.All(item => array.Contains(item));

        for (let i = 0; i < this.length; i++) {
            const left = this[i] as any;
            const right = array[i] as any;
            if (left !== right) {
                return false;
            }
        }

        return true;
    });