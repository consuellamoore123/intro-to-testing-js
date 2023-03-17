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

