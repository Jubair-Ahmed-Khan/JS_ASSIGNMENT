//function to twice each character of a string and display it

function doubleChar(str) {

    if (arguments.length === 0 || typeof (str) !== 'string')
        return null;
    else {
        let len = str.length;
        let doubleString = "";

        for (let i = 0; i < len; i++)
            doubleString += (str[i] + str[i]);

        return doubleString
    }
}

//Test Case 1
console.log(doubleChar()); // Output: null

//Test Case 2
console.log(doubleChar(45)); // Output: null

//Test Case 3
console.log(doubleChar('exercise')); // Output: eexxeerrcciissee