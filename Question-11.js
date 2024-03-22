/*

    Hoisting:
    ---------
    Hoisting is a concept in JavaScript where the declaration of a variable, function, or class goes to the top of the scope they were defined in.

    There are two type of hoisting in JavaScript:
        1. Variable Hoisting
        2. Function Hoisting


    Variable Hoisting:
    ==================
    Variable declaring with var keyword is hoisted to the top of the scope of the variable with default initialized value: undefined. So, it is accesible before it is  declared.

    Variable with let and const keyword is hoisted but without initialization. It creates a temporal dead zone before its declaration. So, it is inaccessible before declaration.


    Function hoisting:
    ==================
    Function declaration is hoisted to the top of the function scope with it's declaration. 
    
    Function expression with var keyword is hoisted to the top of the scope with default initialization. Function expression with let and const keyword is hoisted but without initialization.

*/


// Example: Variable hoisting

var a = 12;
b = 13;

console.log(`Sum of a and b = ${a + b}`);

var b;

/*
    In the above example, var b is hoisted to the top and assigned a default value: undefined. Then b stores value 13 after assignment. So the it will print 12+13 = 25 to the console.
*/


// Example: Function hoisting

var num = 7;
var numSquare = squareNum(num);

console.log(`Square of num =  ${numSquare}`);

function squareNum(n) {
    return n * n;
}

/* 
    In the above example, the function squareNum is defined in the global scope, so the function is hoisted to the top of the global scope. Through hoisting, the function (including the logic) becomes accessible even before the line it was declared in the code. So it will print 7*7 = 49 to the console.
*/


/*
    Hoisting behaviour for function declaration
    ============================================
    Function declaration is always hoisted on the top of the function scope with its declaration; That means we can use it before it was declared because Javascript knows that there is already a function declared.

*/


// Example of function declaration

var num1 = 7;
var sumUptoNum = sumTillNum(num1);

console.log(`Summation from 1 to n =  ${sumUptoNum}`);

function sumTillNum(n) {
    return (n * (n + 1)) / 2;
}

/* 
    In the above example, sumTillNum function is used before it is declared and it not throwing any error because it is hoisted to the top with function declaration.
*/



/* 
    Hoisting behaviour for function expression
    ============================================
    Function Expression with the var keyword is hoisted with the default initialized value: undefined. So, when we want to use it before it is expressed, it will give an error ; that is it is not a function beacuse it's value is undefined;

    Function expression with let and const keyword is hoisted but without initialization. So if we want to use it before it's expression it will give an error; that is: cannot access function before initialization.

*/


// Example of function expression with var keyword

var num2 = 5;
let twiceofNum = doubleValue(num2);

console.log(twiceofNum);

var doubleValue = function (n) {
    return 2 * n;
}


/* 
    output: doubleValue is not a function
*/



// Example of function expression with let keyword

var n1 = 3;
var n2 = 6;

let summation = sum(n1, n2);

console.log(summation);

let sum = function (a, b) {
    return a + b;
};

/* 
    output: cannot use sum before initialization
*/


