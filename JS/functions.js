// built in functions  

// parsing integer nums
parseInt("123iide") 
123

// parse int boolean numbers (num, redix'base')
parseInt("0101","2")
5
parseInt("0111","2")
7
parseInt("0111","8")
73

// parsing the flaot number with first fraction sign 
parseFloat('1.1.1.1')
1.1
parseFloat('1.1111.')
1.1111



// return true if message is a number false otherwise 
isFinite("hha12")
false
isFinite("12")
true
isFinite("1r2")
false
isFinite("12111")
true

// return true if  message not a number false otherwise
isNaN("st")
true
isNaN("12")
false
isNaN("1d2")
true


//#############################################################
//###############################################################

// user defined methods  

function addTwoNums(x, y) { 
  sum = x + y;
  return sum;
}
undefined
result = addTwoNums(2, 7)
// => 9 

// default values 

function addTwoNums(x = 0, y = 0) { 
  x =(x==undefined) ? 0 : x; 
  y =(y==undefined) ? 0 : y;
  sum = x + y;
  return sum;
}

result = addTwoNums()
console.log(result);



//#############################################################
//###############################################################

// scope and shadwoing 

// var preserve variables from breaking scopes 
// shadwoing happens when we set two variables with same name one local and other global  
// shadwoing var without var will override the global scope
// global variables defined outside functions  
// local scope within the fun defenition 
// onc we create varibale without var in local scope and call it in global will be visible(global) at first call to the fun only  
// 

console.log("<br>")
var z = 40; 
var x = 12; 

function test(y) { 
  var z = 9; // shadwoing overwrite z 
  console.log(z) // print 9 
  console.log(x) // print global x 
  x = 15;  // overwrite x
  console.log(x) // print local x
  var sum = y + z 
  return sum;
}
console.log(x) // => 12 global 
console.log(z) // => 40 global
result = test(4); // function call 
console.log(z) // => z = 40 global  
console.log(x)  // => overwrite x with first func call 
console.log(result);
