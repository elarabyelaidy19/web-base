// in javaScript every  thing is an Object
// function without name called annonymus function 
// function assigned to var called function expression


// Function Creation
// 1- Fuction statement
//parsed once 

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


//#############################################################
//############################################################### 

// functions object methods 
// join method does't applied to string 
str = "will not join" 
str.join() 

arr = [1, 2,3, "abc"] 
arr.join(); 

// Functions borrowing using apply and call 
// borrowing join method from arra and apply it on str passing it param in array
arr.join.apply(str, [","]) 
// => 'i, ,w,i,l,l, ,n,o,t, ,j,o,i,n'  
// borrowing join method from array and apply it on str passing it param normally
arr.join.call(str,",")  


// binding works as the same of apply and call but it should invoked as a function passing it params   
result = arr.join.bind(str) 
result("_") // join on _


//#############################################################
//############################################################### 

// Inner Fuctions 
// inner function is available only in it's scope wich is defined at
// inner functions can access outer scope variables opposite not true 
// scope chain leveling up from inner scope to outer scope  
// inner functions can have inner functions 

function mainFun() { 

  function innerFun(){
    return 1+3;
  }
  console.log(innerFun()); 
  // function must have a return value
  return "main fun";
}


result = mainFun();
console.log(result); 


/// 
var a = 101
function mainFun(a, b) { 

  function innerFun(){

    var w = 10;

    function thirdLevel() { 
      var b = "abc"; 
      var a = 3; // shadowing

    }
    thirdLevel(); // inner level fun can acess only a and b in the global acope 
    return a+b+x+w;
  }
  console.log(innerFun()); 
  // function must have a return value
  return "main fun";
}


//#############################################################
//############################################################### 

// Closure 
// the environment that the inner scope defined within it 
// the inner scope of outer function is closure of the inner function  

// 1- hoisting b, result 
// 2- calling outerfun 
// 3- hoisting z, a, innerFun 
// 4- return innerFun 
// 5- result(4, 3) 
// 6- in innerFun hoisting  a= 4, b=3, w=20
// 7-  return sum 
// 8- return value of result 48  

// https://maharatech.gov.eg/mod/resource/view.php?id=7705&forceview=1
var b = 10 

function outerFun(x, y) { 
  var z = 10 
  var a = 1 

  var innerFun = function (a, b) { // a = 4, b = 3 
    var w = 20 
    return x + y + z + a + b + w
  }
  return innerFun;
}

var result = outerFun(5,6); 
console.log(result); 

console.log(result(4,3));


//#############################################################
//############################################################### 

//IIFE
