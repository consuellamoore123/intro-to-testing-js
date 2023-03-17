// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


//New test for sayHello function




//Unit test for sayHello function
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
});
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
});
        it("should never return 'undefined' when called", function() {
            expect(typeof sayHello()).not.toBe(undefined);
});
    it('should return the string "Hello, Jane" when executed', function() {
        expect(sayHello ("Jane")).toBe("Hello, Jane");
});
    it('should return the string "Hello, Alex" when executed', function() {
        expect(sayHello ("Alex")).toBe("Hello, Alex");
    });
    it('should return the string "Hello, Pat" when executed', function() {
        expect(sayHello ("Pat")).toBe("Hello, Pat");
    });
    it('should return the string "Hello, World!" when excuted', function() {
        expect(sayHello()).toBe("Hello, World!")
});
    it('should return the string "Hello, World!" when exceuted', function() {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it ('should return a string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!")
    });
});

//New test for isFive function

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return true when 5 is passed', function() {
        expect(isFive(5)).toBe(true);
    });
    it("should return true when the string of '5' is passed", function() {
        expect(isFive("5")).toBe(true);
    });
});

//isEven function

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean value when passed any number', function() {
        expect(typeof isEven(Number)).toBe('boolean');
    });
    it('should return true when passed 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return true when passed "8"', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return true when passed 0', function() {
        expect(isEven(0)).toBe(true);
    });
    it('should return false when passed the number 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed a non-numeric string like "banana"', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return false when passed the boolean value ' + randomBoolean, function() {
        expect(isEven(randomBoolean)).toBe(false)
    });
});

//isVowel function



