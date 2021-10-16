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


//#############################################################
//###############################################################

// Functional shared pattern & prototype property


var Emplyee = function(empNm, sal, dept, id ) { 
  
  this.name = empNm; 
  this.dept = dept; 
  this.sal = sal; 
  this.id = id; 
  
}

// prototype shared methods it shared amongs all instances
Emplyee.prototype.displayInfo = function() { 
  return 'this is emp  ' +this.id  +'his name is '+this.name;
}
Emplyee.prototype.getEmpname = function() { 
  return this.empNm;
}

var emp = new Emplyee("ali", 23, 2222, 'CSE'); 



//#############################################################
//###############################################################

// prototype chaining and overriding 
// when we call method doesn't exist in our prototype chain of our class first  
// if it dsoesnt find it goes level up to its parent object where evry object inherit and use 
// called method 

var Emplyee = function(empNm, sal, dept, id ) { 
  
  this.name = empNm; 
  this.dept = dept; 
  this.sal = sal; 
  this.id = id; 
  
}

// prototype shared methods it shared amongs all instances
Emplyee.prototype.displayInfo = function() { 
  return 'this is emp  ' +this.id  +'his name is '+this.name;
}
Emplyee.prototype.getEmpname = function() { 
  return this.empNm;
}

// Override the toString Method of object Object sort of polymorphism implementaion
Emplyee.prototype.toString = function() { 
  return 'iam + '+this.name+'may sal is '+this.sal+'my departement'+this.dept+'my id is '+this.id;
}

var emp = new Emplyee("ali", 23, 2222, 'CSE'); 
// will called from object object when is not initialized 
emp.toString();


//#############################################################
//###############################################################


// Constructor Overloading: happens when defining constructor whith default aregs 
var emp = new Emplyee("ali", 23, 2222, 'CSE'); 

// when set constructor without parameters it takes undefined value by default
// we avoid set undefined value by setting default values 



//#############################################################
//###############################################################

