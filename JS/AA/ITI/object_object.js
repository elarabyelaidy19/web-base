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

// Cretaion of object Object 
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

// creating custom object and assign gives it properities
var customObj = { 
  name: 'ali', 
  loc: "cairo", 
  age: 15, 
  info: function() { 
    // this refer to the current object
    return "This is " + this.name + " from " + this.loc + " age " + this.age;
  }
}

customObj.info(); // calling properities 


//#############################################################
//###############################################################

// creating Object by Factory  
// factory method refer to a function we can use to create multible object with common prop 

// Factory Method
function employee(nme, sal, dep) { 
  
  return { 
    empName: nme, 
    empSal: sal, 
    empDep: dep, 
    info: function() { 
      return this.empName +" works in deartment "+ this.empDep + " and salaray " + this.empSal; 
    }

  }
}

var emp = employee("ali", 5000, "SD") 
emp.empName // pro 
emp.empSal // pro 
emp.info() // func

var emp2 = employee("ahmed", 5455, "DE") 


// Constructor 
// declared with upcase in beg 

function Employee(name, sal, dept) { 

  this.empName = name; 
  this.empDep = dept; 
  this.empSal = sal;
}

// constructor declared using new otherwise the constructor has no return value so it will  return undefined 
var em = new Employee("ali", 5000, "DS");


//#############################################################
//###############################################################

// Object object Method
// instance method
em.hasOwnProperty("empName");  // return true if has the 


// static methods
// calls by parent Object itself 
Object.keys(em); 
// return properties names
Object.values(em);
// return values 

delete em.empName;
// deletes empName prop

 // i == key, em[i] values
for (var i in em) { 
  console.log(i+" : "+em[i]);
}



//#############################################################
//###############################################################


// Data descriptor 
// Accessor Descriptor 

Object.defineProperty()
