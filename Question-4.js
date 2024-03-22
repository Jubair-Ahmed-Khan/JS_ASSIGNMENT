//function to check if a string(str1) ends with another string(str2)

function checkEnding(str1, str2) {

    let len1 = str1.length;
    let len2 = str2.length;

    if (len1 < len2)
        return false;
    else {
        let idx = len1 - len2;
        let subString = "";

        for (let i = idx; i < len1; i++)
            subString += str1[i];

        if (subString === str2)
            return true;

        return false;
    }
}

//Test Case 1
console.log(checkEnding("samurai", "zi")); // Output: false


//Test Case 2
console.log(checkEnding("samurai", "rai")); // Output: true


//Test Case 3
console.log(checkEnding("samurai", "desamurai")); // Output: false