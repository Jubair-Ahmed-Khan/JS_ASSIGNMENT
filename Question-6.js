//function to find the smallest element of an array

function findSmallest(arr) {

    let len = arr.length;
    let minElement = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < len; i++) {
        if (arr[i] < minElement)
            minElement = arr[i];
    }

    return minElement;
}


//Test Case 1

console.log(findSmallest([30, 45, 60, 7])); // Output: 7
