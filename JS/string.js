// js built in objects 
// 1- String 
// 2- Array 
// 3- REGEX 
// 4- Date 
// 5- Math 
// 6- Boolean 
// 7- ERROR 
// 8- OBJECT 
// 9- Function 
// 10- numbers 


// STRING OBJECT 

// literal string 
var str = "literal string" 
console.log(typeof str) // => string

// constructor sring 
var newStr = new String("Constructor Sting og type object"); 
console.log(typeof newStr) // => Objec 

// String Function  
var str = String("String function convert object to its equivalent string data type"); 
console.log(typeof str) // => String 

console.log(str.length);
console.log(str.charAt(1)); 

// String Methods 

str.charAt(10) 
str.indexOf('j') // index of first occurence 
str.lastIndexOf('j') // index of last occurence 
str.substring(2, 6); // return substring within specified start and end pos
str.split("");  /// split string and return array