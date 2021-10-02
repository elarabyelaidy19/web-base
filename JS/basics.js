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
3 < 2 < 1 // evaluate 3 < 2
false < 1 // coerc false to zero  boolean => number 
0 < 1 // => true  

// avoid auto coerc using strict equality 
x === y // => false 
// avoid auto convert using brackets 
3 < (2 < 1) // => false 


//#############################################################
//###############################################################

// conditional statements 
// if statement 
let result; 
a = 2
if (a > 0) { 
  result = "positive" 
} else { 
  result = "negative"  
}

return result;

// switch statement  

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`); 
}



//#############################################################
//###############################################################

// loop statements 

let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// expected output: "012345678"


// while  
let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// expected output: 3


// do while 
// The do...while statement creates a loop that executes 
// a specified statement until the test condition evaluates to false. 

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"



//#############################################################
//###############################################################


// Dialogue boxes 
// communicating with the client 

// show a pop up message 
alert("This is an alert")

// getting date from the user 
var response = prompt("enter your name", "show of message")

// ask user simple type of questions  
var action = confirm("do you want to continue")


