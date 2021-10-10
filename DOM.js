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
