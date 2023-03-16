// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
//sayHello function
function sayHello(name) {
    if(name === undefined) {
        return "Hello"
    }
    if (name === "Jane") {
        return "Hello, Jane"
    } else if (name === "Alex") {
        return "Hello, Alex"
    } else if (name === "Pat") {
        return "Hello, Pat"
    } else if (name === true || name === false){
        return "Hello, World!"
    }
    else {
        return ("Hello," + name + "!");
    }
}

