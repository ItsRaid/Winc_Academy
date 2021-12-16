const paint = function (color) {
    console.log("The wall has been painted " + color);
}

paint("green");
paint("blue");
paint();

// Calling the function without an argument gets you "undefined"

const wall = function (a, b) {
    console.log(a + b);
}

wall("The north wall ", "has been painted orange");

// The order of the arguments matter when calling for the function
// If i switch them, you will get "has been painted orangeThe north wall "
// Changing the order of the arguments has no effect