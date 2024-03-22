//closure function to increment counter by 1
function counter() {

    let count = 0;

    return function () {
        return count += 1;
    }
}

const increment = counter();

console.log(increment()); // Output: 1
console.log(increment()); // Output: 2



//closure function to guess password
function makePassword(password) {

    return function (guessedPassword) {
        return password === guessedPassword;
    }
}

const checkPassword = makePassword("mySecretPassword");

console.log(checkPassword("password123")); // Output: false
console.log(checkPassword("mySecretPassword")); // Output: true



//closure function to increment counter by a specific step
function counterWithStep(step) {

    let count = 0;

    return function () {
        return count += step;
    }
}

const incrementByTwo = counterWithStep(2);

console.log(incrementByTwo()); // Output: 2
console.log(incrementByTwo()); // Output: 4


