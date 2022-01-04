// Function declaration
function declaration(number1, number2) {
    return number1 * number1 + number2 * number2;
}

console.log(declaration(5, 6) ** 2);

//Function expression
const expression = function (nmb1, nmb2) {
    return nmb1 * nmb1 + nmb2 * nmb2;
};

console.log(expression(5, 6) ** 2);

//Arrow function
const arrow = (nummer1, nummer2) => {
    return nummer1 * nummer1 + nummer2 * nummer2;
};

console.log(arrow(5, 6) ** 2);