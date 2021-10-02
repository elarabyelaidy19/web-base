// js primitive data type 
// loosley typed 

var x // undefined 
console.log(x);
console.log(typeof(x));

var x = 10; // numbers
console.log(x);  
console.log(typeof(x));

var x = 'string'; // string
console.log(x); 
console.log(typeof(x));

var x = true; // boolean  
console.log(x);
console.log(typeof(x));

var x = null; // null
console.log(x);
console.log(typeof(x));


//#############################################################
//###############################################################

// Operators 

// Unary operators 
// increament, prefix, postfix 

x = 10 
console.log(x)
++x  // prefix
console.log(x)
x++ // postfix
console.log(x)

// Binary operators 
// two operands 
// arithematics operators s
x = 10 
y = 12 

x + y 
x * y 
y / x 

// assignments operators 

x += 5 
x /= 2 

// Ternary operators  

x = 12 
y = 15 

x > y ? true : false 


//#############################################################
//###############################################################


// logical opearators 
// &&, ||, ! 

// && return false if any value is false  =>  SHORT CIRCUIT  
// Return the value of the operand that cause the decision   
false && true && true && true && true  // => false  
8 && 9 && 11 // => return 11 

// || return true if there is only one value true 
// Checks first true 
false || false  || false  || false  || true // => true 
0 || false || "" || undefined || 2 // => return 2  
// FALSY VALUES 
// 0, null, undefined, "" 


//#############################################################
//###############################################################
// special operators 

// comma opearator 
var fn = "ali", 
    ln = "ali", 
    fl = fn + ln;  

// data type coercion  

x = 5 
y = "5" 
x == y // => true  coerc number to string and comapre 
// js engine coerc(auto convert) data type and compare them 

3 < 2 < 1 // return true 
(3 < 2) < 1 
(false) < 1 // coerc false to zero  boolean => number 
0 < 1 // => true  

// avoid auto coerc using stric equality 
x === y 
