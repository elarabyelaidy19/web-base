// facts about functions 
// 1- assign value to variable
// 2- assign function into array element 
// 3- return function from another function


// function statement 
// hoisted it can be called before its decleration
function add(a, b) { 
var sum = a + b; 
  return sum;
}

// assign function to variable 
// annonymus function (has no name) 
// when assign name to annonymus function its will not be visible outside its body (recursive) 
// not hoisted it will not be visible before its decleration
var myAdd = function(a, b) { 
  return a + b;
}

myAdd


// assign function into array variable 

var arr = [1, 2, 3, 5, "abc", function(a, b) { 
  return a + b;
}, 13]  


var fun = arr[5] 
fun(2, 4)


// return function from another function

function newAdding(a, b, c) { 

  return function() { 
    return a + b + c;
  }
  
}

var result = newAdding(1, 2, 3) 
result();



//#############################################################
//###############################################################

// Cretaion of oibject Object 
// constructor  

var obj = new Object(); 

// defined properties 
obj.namePro = "javascript" 
obj.type = "scripting"


// literal creation  
var obj = {};
// defined porp  
obj.name = "javaScript" 

// methods 
obj.disply = function() { 
  return "this is obj function"
}

// calling 
obj.disply();

// creaying custom object and assign gives it properities
var customObj = { 
  name: 'ali', 
  loc: "cairo", 
  age: 15, 
  info: function() { 
    return "This is " + this.name + " from " + this.loc + " age " + this.age;
  }
}

customObj.info(); // calling properities