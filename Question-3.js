// function to define winner between 3 players (John, Mike and Mary)

function findWinner(johnScores, mikeScores, maryScores) {

    let johnTotal = 0;
    let mikeTotal = 0;
    let maryTotal = 0;
    let numOfJohnMatches = johnScores.length;
    let numOfMikeMatches = mikeScores.length;
    let numOfMaryMatches = maryScores.length;

    for (let i = 0; i < numOfJohnMatches; i++)
        johnTotal += johnScores[i];

    for (let i = 0; i < numOfMikeMatches; i++)
        mikeTotal += mikeScores[i];

    for (let i = 0; i < numOfMaryMatches; i++)
        maryTotal += maryScores[i];

    let johnAverage = johnTotal / numOfJohnMatches;
    let mikeAverage = mikeTotal / numOfMikeMatches;
    let maryAverage = maryTotal / numOfMaryMatches;

    if ((johnAverage === mikeAverage) && (mikeAverage === maryAverage)) {
        ans = `There is a draw with average score ${johnAverage}`;
    }
    else {
        if ((johnAverage > mikeAverage) && (johnAverage > maryAverage))
            ans = `The winner is John with average score ${johnAverage}`;
        else if ((mikeAverage > johnAverage) && (mikeAverage > maryAverage))
            ans = `The winner is Mike with average score ${mikeAverage}`;
        else
            ans = `The winner is Mary with average score ${maryAverage}`;
    }

    return ans;
}

//Test Case 1
john = [89, 120, 103];
mike = [116, 94, 123];
mary = [97, 134, 105];

console.log(findWinner(john, mike, mary)); // Output: The winner is Mary with average score 112


//Test Case 2
john = [119, 265, 99];
mike = [98, 105, 178];
mary = [108, 156, 87];

console.log(findWinner(john, mike, mary)); // Output: The winner is John with average score 161


//Test Case 3
john = [105, 170, 108];
mike = [85, 212, 197];
mary = [115, 167, 142];

console.log(findWinner(john, mike, mary)); // Output: The winner is Mike with average score 164.66666666666666


//Test Case 4
john = [124, 145, 109];
mike = [98, 177, 103];
mary = [123, 125, 130];

console.log(findWinner(john, mike, mary)); // Output: There is a draw with average score 126