// DOM
// Document Object concerned about the displyed screen og html 
// using document to show DOM nodes
document 
// using dir to view nodes prop 
console.dir(document); 
// every nodes have children 
// html have two children body, head 
// body and head are siblings 
// head first child, body second child 
// body parent of all nodes in the body divs, .......  


// Accessing DOM Nodes 
document.body.children[0] // first element
document.body.children[0].nextElementSibling // next element node 
document.body.children[0].nextSibling // return text beacuse of text space ....  

// by id 
document.getElementById("div1")  // return 1 elemnt

// by class  
document.getElementsByClassName("div1") // return collections of elemnts of the same class 

// by tag name 
document.getElementsByTagName("div") // return collection 

// Accessing elements by querySelectors
document.querySelector("selctor") 

// Modifying Nodes  
document.body.children[0].innerHTML="<b> Modified html </b>" // modify node 0 
document.getElementById("div1").innerHTML = "<b>modifying selected element</b>" 

// modify Style  
var ele = document.getElementsByClassName("div1")
ele[0].innerHTML = "div" 
ele[0].style.color="red" 


// NODES CLASS ATTRIBUTES
// add OR remove classes 

document.getElementById("div1").className // return node class name 
document.getElementById("div1").classList.add("c2") // add class to node 
document.getElementById("div1").classList.remove("c2") // remove 
getComputedStyle(getElementById("div1")).color // return style of the node  


// CREATE NEW DOM NODE

// Types of Nodes 
// 1- root node => html 
// 2- element node => any tag 
// 3- Text node => text of any tag 
// 4- Attribute node => attribute of tag
// 5- Cooment node => comment 
// 6- Document node => the document itself is node  

document.createElement() // create element node 
document.createTextNode()
// METHOD 
insertBefore()
document.insertBefore(a,b) // a = inserted b = before  
a.appendChild(b) // a == parent  b = appended child 



/// DOM COLLECTION 
// elements collection 
// access element of collection 
document.images[0] // access elemnt 1 of images collection 


//#############################################################
//###############################################################

// Cookies 

// create cookie
function saveInfo() { 
  var date = new Date();
  date.setDate(date.getMonth() + 3);
  var val = document.getElementById("usrnm").value;
  var val2 = document.getElementById("mail").vlaue;

  // persitent cookie
  document.cookie = "usernameCookie = " +val+";expires = "+date; 
  document.cookie = "userEmailCookie = " +val2+";expires = "+date;
}


// READ COOKIE
document.cookie

//#############################################################
//###############################################################

 // DISPLAY KEY VALUE PAIRS COOKIE 
 var cookie = document.cookie();
cookie = "username=ali;epires=122332"
 cookie.indexOf("username") 
 // => 0 
 cookie.indexOf(":",0); 
 //=> 12
cookie.subString(0,18)

// https://maharatech.gov.eg/mod/resource/view.php?id=7707&forceview=1 

//#############################################################
//###############################################################


//#############################################################
//###############################################################


//#############################################################
//###############################################################

