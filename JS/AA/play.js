
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


function style(a,b) { 
  return a+b;
} 

var expression = function(a,b) { 
  return a+b;
}

var fastArrow = (a,b) => { 
  return a+b;
}
// 
function isEven(n) { 
  if(n%2==0) { 
    console.log(n+" is even");
  }
}

function forEach(a, cb) { 
  for (var i=0; i<a.length; i++) { 
    cb(a[i]);
  }
}

forEach([1,2,3,4,5], isEven);

////// 

[1,2,3,4,5].forEach(function(n) { 
  if(n%2==0) {
     console.log(n);
  }
})

// closures as implicit passing 

function plindrome(string) { 
  function reverse() { 
    return string.split('').reverse().join('');
  }
  return reverse() == string;
}


// private states 
 



