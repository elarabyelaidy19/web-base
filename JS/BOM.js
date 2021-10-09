// JS require hosting environment e.g Browser 
// Browsers have Browser Object Model 
// Browser has multiple Objects their parent is the Window Object 
// ** Window 
//  1- history
//  2- location
//  3- screen
//  4- navigator
//  5- document
// you can acess components of any object using dot notaion 

// Window Object properties 

// 1- Open prop
// win var capture the returned object from calling open fun
var win;
function openNewWin() { 
  win = open("index2.html","","width=250,height=250" )

} 

// 2- Close prop
// work on the gloal object (Window object) 
// insted we call it on the child created from the open fun
function closeWin() { 
  win.close("index2.html","")
}


// 3- focus prop
// make the change in the parent window (at same page)
function changeBkg() { 
  win.document.bgColor = "red"; 
  win.focus();
}

// 4 -moveBy prop
// move by shift by given coor
function mo() { 
  win.moveBy(50, 50); 
  win.focus();
}
// 5- moveTo
// move totally to position
function mov() { 
  win.moveTo(150, 150); 
  win.focus();
}


//#############################################################
//############################################################### 

// Window Object Methods 

// setInterval 
// setInterval(callback fn, duration) in milliseconds
// works one time after every interval of time
var timerId
function startAlert() { 
  timerId = setInterval(function(){
    alert("Time interval");
  }, 2000);
}

// claerInterval

function endAlert() { 
  clearInterval(timerId)
}
// setTimeout 
// works one time after the interval 
var timerId
function startAlert() { 
  timerId = setTimeout(function(){
    alert("Time interval");
  }, 2000);
}

// clearTimeout


function endAlert() { 
  clearTimeout(timerId);
}

//#############################################################
//############################################################### 

// History
// history object refer to the history of the same opend tap (tab now) 

// prop 
history.length();
// return nums of visited pages(urls) on the same tab 


// Methods 
history.forward(); 
// go one page forowrd

history.back(); 
// go one page backword  

history.go(n); 
// go to n visited page 


//#############################################################
//############################################################### 

// Location Object 
// dealing with the info infered from Urls
// url, protocol, queryString, HostName 

// prop 
location.href(); 
// return Url 
location.protocol(); 
// protocol 
location.hostname(); 
// hostname
location.port(); 
// listener port 
location.search(); 
// return the query string 


// Methods 

location.replace(); // take complete Url
// replace pages with same length of storage 

location.assign() // take url 
// navigate to url and cancle forowrd history push url after and cancle forowrd to next page history.length increse 

location.replace() 
// refresh the page 


//#############################################################
//############################################################### 

// Navigator Object 
// concerned of all information about the browser

navigator.language();
navigator.cookieEnabled();
navigator.userAgent();
// .........
// and so on