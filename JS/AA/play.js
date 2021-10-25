
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
 


// Constructor  

function kitten(name, age) { 
  this.name = name; 
  this.age = age; 

  this.mew = function() { 
    console.log(this.name+" Say hello");
  };
}

var con = new kitten("kitty", 4);
con.name; 
con.mew(); 


// function prototype 

function kitten(name, age) { 
  this.name = name; 
  this.age = age; 
}

kitten.prototype.mew = function() { 
  console.log(this.name+" say hello"+"my age is"+ this.age); 
}

c1 = new kitten("kitty", 2); 
c2 = new kitten("boos", 2);  


// 
function isSubstring(searchString, subString) { 
    return searchString.includes(subString);
}


// FizzBuzz 

var fizzBuzz = function(arr) { 
  div = [];  
  for(var i = 0; i <arr.length; i++) { 
    if(arr[i] % 3 === 0 && arr[i] % 5===0) {
      continue;
    } else if (arr[i] % 3 === 0 || arr[i] % 5===0) { 
      div.push(arr[i]); 
    }
  }  
  return div; 
} 


// isPrime 

var isPrime = function(n) {    
  for(var i = 2; i**2<= n; i++) { 
    if(n%i==0) { 
      return false
    }
  }
  return true;  
}  


var sumOfPrimes = function(n) { 
  sum = 0; 
  
  for(var i = 2; i<=n; i++) { 
    if(isPrime(i)) 
      sum += i 
  }
  return sum; 

}

