// in javaScript every  thing is an Object
// function without name called annonymus function 
// function assigned to var called function expression


// Function Creation
// 1- Fuction statement
//parced once 

// 2- Annonymus Function 
// parsed once 

// 3- Counstructor Function
// each time invoked will be constructed again 

var fun = new Function('a', 'b', 'return a + b;') 

fun(2, 3); 

// IIFE PATTERN
// Immediately invoked function expression 
// invoked only once, used to invoke annonymus function

(function () { 
  console.log("iam iife");
})()


// Function Object Properties 
// Arguemnts properity refer to the arguemnts passed to the function

var fun = function() { 
  console.log((arguments[2] + arguments[4])); 
  sum = 0;
  for (var i = 0; i < arguments.length; i++) { 
    sum += arguments[i]
  }
  return sum;
}

fun(1,2,3,4, 6);