//Assigning the IIFE to a variable stores the function's return value, not the function definition itself.
//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

var result = (function () {
    var name = "Barry"; 
    return name; 
})(); 
// Immediately creates the output: 
console.log(result); // "Barry"