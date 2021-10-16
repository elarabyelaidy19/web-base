// to be OOP language you should able ti implement three concepts  
//  1- inhertince 
//  2- incapsulation 
//  3- plymorphism 


// JS does not have classes 
// Creating instance using Factory and constructor 

// Factory method (factory pattern) 

// create function object of type students 
// create instance of the student 
// factory function return object evrey time called 
// argument take undefined value on default 
// instance of factory doesnt take new keyword 
var student = function(nm, age) { 
  
  return { 
    name:nm, 
    age:age
  }
}

var me = student('ali', 23); 
me.name // ali 
me.age // 23 
me.setId = "123"; /// create setId prop 


// creating instance using constructor pattern

var Emplyee = function(empNm, sal, dept, id ) { 
  
  this.name = empNm; 
  this.dept = dept; 
  this.sal = sal; 
  this.id = id; 
  this.displayInfo = function() { 
    return 'this is emp  ' +this.id  +'his name is '+this.name;
  }
}

var emp = new Emplyee("ali", 23, 2222, 'CSE'); 

