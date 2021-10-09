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

// 1- Open fun 
// win var capture the returned object from calling open fun
var win;
function openNewWin() { 
  win = open("index2.html","","width=250,height=250" )

} 

// 2- Close fun 
// work on the gloal object (Window object) 
// insted we call it on the child created from the open fun
function closeWin() { 
  win.close("index2.html","")
}


// 3- focus fun
// make the change in the parent window (at same page)
function changeBkg() { 
  win.document.bgColor = "red"; 
  win.focus();
}

// 4 -moveBy 
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

