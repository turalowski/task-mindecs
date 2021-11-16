/*
**************
Describe the differences between variables declared with var , let , and const:
**************
var, let and const are ways to define variables. 
1. Declaration:  var vs let and const:
On the one hand, when we declare a variable with var, it is global (if we define it in global we can access it in the global scope and function scope) or function scope (when we define it inside the function we can access it only in the function) variable. 

First example:
var variable1 = 'variable1'
function declareVariable() {
    var variable2 = 'variable2';
}
console.log(variable1); // variable1
console.log(variable2); // We will get reference error because variable2 declared in function scope.

On the other hand, when we declare a variable with let and const, we can access them in block scope. ({}). We can not access them out of the block scope. We can look at this example:
for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i) => We will get reference error because i is not defined
But when we replace let with var, 
for(var i = 0; i < 10; i++) { // Block scope
    console.log(i);
}
console.log(i) Result => 10
Because of hoisting,  declaration of  "i" variable moved on the top line of global scope. Let and const is hoisting free. (I will explain hoisting detailed in the next question.)

2. Update variable: var vs let and const
We can update variable with var and let. (we can not update variables which declared with const) But the main difference is that, we can not re-declare variables with let and const. Here is the examples:

let a = 10;
let a = 15; // We will get error syntax error because a has already been declared.
If we replace let with var, we will not get error. We can re-declare variables how many times we want (It feels okay but it is not, because we can override values in the global scope.)

The third difference is hosting but i will explain it detailed in the second question.
*/

if (true) {
    let hoisting = `Hoisting is the mechanism that happens when we declare variables. In short, when we declare variables and functions, the declaration part moves to the top of their scope (depending on global scope or function scope).

    console.log (variable);
    var variable = 'variable' // Undefined.
    
    when we run this code, before the execution, the declaration part of the 'variable' variable moves to up like this:
    var variable;
    console.log(variable);
    variable = 'variable'
    
    Hoisting in functions: 
    getFullName("Tural", "Hajiyev"); // Tural Hajiyev
    
    function getFullName(name, surname) {
     console.log(name, surname)
    }
    
    However we declare function after we run it, we will not get an error. Because of hoisting, when we run this code, the declaration of function will move up to the global scope.
    
    Because this is a mechanism of js, when we declare variables with let and const they are hoisted too. The main difference between var, let and const is that, when we declare variables with const and let, they hoisted but not initialized. When we try to use it before declartion, we will get an error:
    
    console.log(variable); // ReferenceError => variable is not defined.
    let variable = 10;
    `;
}

function tdzScope() {
    var tdz = ```
    I mentioned in the previous question that, let and const are hoisted too. The main difference with the var is that, they are hoisted but not initialized. The time that interprener is in the scope but the variable is not declared is the temporal dead zone. 
    let variable = "variable";
    (function() {
    // Start TDZ for variable.
    console.log(variable);
    let variable = "variable"; // Declaration ends TDZ for x.
    }());
    In this code block, we will get error that "Uncaught ReferenceError: Cannot access 'variable' before initialization",
```;
}

/**
 * This is a function.
 * This function helps to calculate the result of 1-dimensional parabola.
 *
 * @param {number} x - A number param
 * @param {number[]} coeffs - Array of numbers param
 * @returns {number} Returns the value of y
 * 
 *
 * @example
 * parabola(2, [1,2,3])
 * 
 */
export function parabola(x, coeffs) {
    const [a, b, c] = coeffs;
    const y = a * Math.pow(x, 2) + b * x + c;
    return y;
}

/**
 * This is a function.
 * This is a wrapper function and help to run parabola function and parse its result to an integer.
 *
 * @param {number} x - A number param
 * @param {number[]} coeffs - Array of numbers param
 * @returns {number} Returns the value of result
 *
 * @example
 * parabola_int(2, [1,2,3])
 * 
 * 
 */
export function parabola_int(x, coeffs) {
    const result = parabola(x, coeffs);
    return parseInt(result);
}

const discriminate = coeffs => {
    const [a, b, c] = coeffs;
    const result = Math.pow(b, 2) - 4 * a * c;
    if (result === 0) return 0;
    if (result > 0) return 2;
    return 1;
};
// exports.parabola = parabola;
// exports.parabola_int = parabola_int;
