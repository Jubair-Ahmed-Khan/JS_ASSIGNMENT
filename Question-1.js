// function for calculating lowest, highest, length, and averagevalue of an array

function arrayInfo(arr) {

    let lowest = Number.MAX_SAFE_INTEGER;
    let highest = 0;
    let arraySum = 0;
    let arrayLength = arr.length;
    let arrayAverage;

    for (let i = 0; i < arrayLength; i++) {

        arraySum += arr[i];

        if (arr[i] < lowest)
            lowest = arr[i];

        if (arr[i] > highest)
            highest = arr[i];
    }

    arrayAverage = arraySum / arrayLength;

    const result = [lowest, highest, arrayLength, arrayAverage];

    return result;

}


//Test Case 1
console.log(arrayInfo([34, 45, 26, 10, 76])); // Output: [10, 76, 5, 38.2]