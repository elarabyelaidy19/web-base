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
str.replace("to_replace", "replace_by") 


//#############################################################
//###############################################################

// REGEX OBJECT 
// REGREX Patterns 
// https://drive.google.com/file/d/10c-j6bNA9p_JaRROkQ19g8z7THYi3FZS/view

// /pattern to match/flag("i"gnore case sensetive, "g"lobal (replace all) , "m"ultible line) 

str.replace(/to_replace/gim, "replace_by") 

//#############################################################
//###############################################################

// ARRAY 
// 1- Array can contain different data 
// 2- 

var mArray = [1, 2, "be", , ,[1, 2, "fr"], 12]  
// constructor defineition 
var mArray = new Array()
mArray[0] = 1 

/// dense array 
var arr = new Array(1, 1, 2);
[1, 2, "be", , ,[1, 2, "fr"], 12]

mArray.length
// 7

mArray[7]
// undefined

mArray[6]
// 12

mArray[5]
// [ 1, 2, 'fr' ]

mArray[5][2]
// 'fr'

mArray[5][3]
// undefined

mArray[5].length
// 3

/// ARRAY FUNCTIONS 
// 
var arr = [2,2,1,3,4] 
arr.join("join on this") 
arr.pop() // pop from the end 
arr.push("insert this in the end") // add to the end  

arr.shift() // pop from the begining  
arr.unshift("ele") // push elemnt at the begining 

arr.reverse() // inplace revers! update the array itself 

arr.sort(function(a,b){a-b}) // inplace sort mutate array and return refernce to the same array 

// Assoicative ARRAY 
// special type of array used to store key valuse pair data 
// cannot accepet normal array methods and iterators

var assArr = new Array() 

assArr["name"] = "ali" 
assArr["nam"] = "ahmed"
assArr["na"] = "araby"
assArr["n"] = "amir" 

for (i in assArr) { 
  console.log(i+":"+assArr[i]);
}


//#############################################################
//###############################################################

// DATE  
// used to store date and time of the client machine(user current's time zone) 
// numerical values of dates
// jan => 0, 11 => Dec MONTHS ==== sun => 0, Sat => 6 DAYS  === 0 > 23 HOURS 
// MINUETS AND SECONDS  0 > 59 MINUETS AND SECONDS ==== 
// YEARS  1900 == 0   ====  2019 == 119
// DATES  1 => 31 

var date  = new Date();

// METODS 

date.getDate(); 
// return day 
date.getMonth(); 
// retrun month 
date.getYear() 
// return year 
date.getFullYear(); 
// return exact year 

// set valsues 
date.setDate(2) 
// set day to 2

// to methods convert to other formats 
date.toDateString();
// return date as date string


