// function for sorting an array in ascending order

function sortNumsAscending(arr) {

    if (arguments.length === 0 || !Array.isArray(arr))
        return [];

    else {

        let arrayLength = arr.length;
        let flag = 0;

        for (let i = 0; i < arrayLength; i++) {
            if (typeof (arr[i]) !== 'number') {
                flag = 1;
                break;
            }
        }

        if (flag)
            return [];
        else {

            let minIndex;

            for (let i = 0; i < arrayLength - 1; i++) {

                minIndex = i;

                for (let j = i + 1; j < arrayLength; j++) {
                    if (arr[j] < arr[minIndex])
                        minIndex = j;
                }

                if (minIndex != i) {
                    temp = arr[i];
                    arr[i] = arr[minIndex];
                    arr[minIndex] = temp;
                }
            }

            return arr;
        }
    }

}

//Test Case 1
console.log(sortNumsAscending()); // Output: []


//Test Case 2
console.log(sortNumsAscending(['Jubair', 'Tanvir', 'Shihab', 'Muhit'])); // Output: []


//Test Case 3
console.log(sortNumsAscending([45, 37, 12, false, 'Jubair'])); // Output: []


//Test Case 4
console.log(sortNumsAscending([45, 34, 23, 12, 7])); // Output: [7, 12, 23, 34, 45]

