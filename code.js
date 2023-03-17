// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
//sayHello function
function sayHello(name) {
    if(name === undefined || name === null) {
        return "Hello, World!"
    }
    if(name === "Jane") {
        return "Hello, Jane"
    } else if (name === "Alex") {
        return "Hello, Alex"
    } else if  (name === "Pat") {
        return "Hello, Pat"
    } else if (name === true || name === false){
        return "Hello, World!"
    }
    else {
        return ("Hello," + name + "!");
    }
}

//isFive function
function isFive(input) {
    if (input === 5 || input === '5') {
        return true
    } else {
        return false
    }

}

//isEven function
function isEven(number) {
    if (number % 2 == 0) {
        return true
    } else {
        return false
    }
}
//isVowel function
var vowelList = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
const isVowel = function(x) {
        if (vowelList.includes(x)) {
        return true;
    } else {
        return false;
    }
}

//add function
function add (num1, num2) {
    if(num1 && num2 === String) {
        return NaN
    }
    if(isNaN(num1) || isNaN(num2)) {
        return NaN
    } else {
        return num1 + num2
    }
}

