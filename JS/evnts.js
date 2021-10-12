// js is event driven evry event triger a specific function to exute 
// types of events  
// 1- Mouse 
// 2- keybowrd 
// 3- Other 
//  * onfocus 
//  * onblur 
//  * onerror .. 
// 4- Form 
//  * onSubmit 
//  * 
/* 
<div on(Event)="fun"></div> 
*/


//#############################################################
//############################################################### 

// Mouse Events 
// when mouse over the img source code of image will change 
function changImg() { 
  document.images[0].src = "img/2.jpeg"
}

// when mouse move out image return to its default 
function setOrigi() { 
  document.images[0].src = "img/1.jpeg" 
}
