const age = 25;
const isFemale = true;
const driverStatus = 'bob';
const firstName = 'Raid';
const totalAmount = 110;

if (age >= 18) {
    console.log("You are allowed to enter.");
} else {
    console.log("You are too young, we kindly request you to stay outside.");
}

if (isFemale) {
    console.log("You are a female.");
} else {
    console.log("You are not a female.");
}

if (driverStatus == 'bob') {
    console.log("You are allowed to drive!");
} else {
    console.log("You are not allowed to drive!");
}

if (age >= 18 && age <= 25) {
    console.log("You get 50% off!");
} else {
    console.log("Unfortunately you can't get 50% off!")
}

if (firstName === 'Sarah' || firstName === 'Bram') {
    console.log("Free beer for you!");
} else {
    console.log("Pay for your beer!");
}

if (totalAmount >= 25 && totalAmount <= 49) {
    console.log("Free bitterballen!");
} else if (totalAmount >= 50 && totalAmount <= 99) {
    console.log("Free nachos!");
} else if (totalAmount >= 100) {
    console.log("Free botlle of champagne!")
}