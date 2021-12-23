// Checking if a number is higher
const higerNumber = function (number) {
    const sum = number;
    if (sum > 100) {
        return "true";
    }
    return "false";
};

const result = higerNumber(111);
console.log(result);

// Bouncer at a club
// Maximum people in the club & the current number of people in the club
const people = function (maxPeople) {
    const max = maxPeople;
    if (max < 100) {
        return "come in";
    }
    return "It's too busy now. come back later";
};

const outcome = people(11);
console.log(outcome);

// The age of the person wanting to enter the club
const age = function (agePeople) {
    const minAge = agePeople;
    if (minAge < 18) {
        return "this is a club for adults";
    }
    return "come in";
};

const entree = age(18);
console.log(entree);

// Calculating the average

const average = function(num1, num2, num3, num4, num5) {
    const calculate = num1 + num2 + num3 + num4 + num5;
    return calculate / 5;
};

const calculated = average(10, 10, 10, 10, 10);
console.log(calculated);