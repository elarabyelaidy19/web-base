var titlize = (names, callBack) => { 
    var newName = names.map (name => `Mx. ${name} Jingleheimer Schmidt`); 
    callBack(newName); 
}

var printNames = (names) => { 
    names.forEach(name => console.log(name));
} 



// Elephant 

function Elephant(name, height, tricks){ 
    this.name = name; 
    this.height = height; 
    this.tricks = tricks
}

Elephant.prototype.trumpet = function() { 
    console.log(this.name+ "phrRRRRRRRRRRR!!!!!!!'");
}

Elephant.prototype.grow = function() { 
    this.height += 12; 
} 

Elephant.prototype.addTricks = function() { 
    this.tricks.push(trick);
}

Elephant.prototype.play = function() { 
    console.log(`${this.name} is ${this.tricks[Math.floor(Math.random()*this.tricks.length)]}`)
}



let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]); 

let herd = [ellie, charlie, kate, micah]; 

Elephant.pradeHelper = function(ele) { 
    console.log(`${ele.name} is trororo`);
}

herd.forEach(Elephant.pradeHelper); 