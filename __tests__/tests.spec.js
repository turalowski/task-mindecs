describe("Math.sqrt() function", () => {
    const testFunction = (input, output) => {
        return expect(Math.sqrt(input)).toEqual(output);
    }
    test("It should return the square root of the input", () => {
        testFunction(4, 2)
        testFunction('9', 3);
        testFunction(16.0, 4)
        testFunction(-1, NaN)
    })
});

describe("find() function", () => {
    const input = ['a', 10, 4]
    test("Find the first element, and assert that it is equal to a string 'a'", () => {
        expect(input.find((element, index) => {
            if (index === 0 && element === 'a') {
                return element;
            }
        })).toEqual('a');
    })
    // It will fail because the first element 'a'
    test("Finding the first element, and assert that it is equal to an integer returns 10", () => {
        expect(input.find((element, index) => {
            if (index === 0 && element === 10) {
                return element;
            }
        }
        )).toEqual(10);
    })
    test("Finding the first element that is less than 5, and assert that it is equal to 4", () => {
        expect(input.find((element) => {
            let isFirstElement = false;
            if (element < 5 && typeof element === 'number' && !isFirstElement) {
                if (element === 4) return element;
                isFirstElement = true;
            }
        }
        )).toEqual(4);
    })
    test("Finding the first element that is a number not equal to 10, and assert that it is equal to 4", () => {
        expect(input.find((element) => {
            let isFirstElement = false;
            if (typeof element === 'number' && element !== 10 && !isFirstElement) {
                if (element === 4) return element;
                isFirstElement = true;
            }
        }
        )).toEqual(4);
    })

});


