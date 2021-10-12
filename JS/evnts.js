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

// Mouse Events Slide Shwo 


//#############################################################
//############################################################### 

// FORM EVENTS
// onsubmit 
// onreset 
document.forms[0].onsubmit = function() { 
  alert("Iam an form submit");
} 


// onfocus 
// when focusing on forms select the content of the form
onfocus="select()"
// onblur  
// when moving out of the form set the value nothing
onblur = "this.value='nothing'"



//#############################################################
//############################################################### 

// disply selected options from dropdownlist
// DROPDOWNLIST  
// prop 
// 1 - length 
// 2 - selectindex
// 3- options 


//#############################################################
//############################################################### 

// this keyword
// event handler
// Capturing and bublling
// addEventListener (caputring 
// Custom Event