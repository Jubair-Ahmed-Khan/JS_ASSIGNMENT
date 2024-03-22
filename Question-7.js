// callback function for sum of square
function square(nums) {

    let len = nums.length;
    let squareSum = 0;

    for (let i = 0; i < len; i++)
        squareSum += nums[i] * nums[i];

    return squareSum;

}


// callback function for counting even number
function isEven(nums) {

    let len = nums.length;
    let evenCount = 0;

    for (let i = 0; i < len; i++)
        evenCount += (nums[i] % 2 == 0) ? 1 : 0;

    return evenCount;
}


// callback function for finding max element of an array
function findMax(nums) {

    let len = nums.length;
    let maxElement = 0;

    for (let i = 0; i < len; i++) {
        if (nums[i] > maxElement)
            maxElement = nums[i];
    }

    return maxElement;
}


//higher order function for sum of square, counting even number and finding max element of an array
function calculate(nums, callBack) {
    return callBack(nums);
}


//higher order function for custom operation
function customOperation(nums, callBack) {
    const doubleArray = []

    for (const num of nums) {
        doubleArray.push(callBack(num));
    }

    return doubleArray;
}


const numbers = [1, 2, 3, 4, 5]

console.log("Sum of Squares:", calculate(numbers, square)); // Output: 55
console.log("Count Even Numbers:", calculate(numbers, isEven)); // Output: 2
console.log("Find Maximum:", calculate(numbers, findMax)); // Output: 5
console.log("Custom Operation (Doubled):", customOperation(numbers, (num) => num * 2)); //Output: [2, 4, 6, 8, 10]
