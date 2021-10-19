
function NBAPlayer(name,team,position) { 
  this.name = name;
  this.team = team;
  this.position = position;
}

let curry = new NBAPlayer("steph curry", "GS", "striker"); 
console.log(curry.name); 
console.log(curry.team);

NBAPlayer.prototype.dunk = function() { 
  console.log(this.name +' dunk!');
}

curry.dunk();
curry.__prot__ 
NBAPlayer.prototype 

curry.name = "steph" 
curry.name // steph

curry.dunk(); // steph dunk! 

