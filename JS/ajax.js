// synchronous 
// request blocking evey req wait to response 

// Asynchronous
// can send nultiple requests and doesn't have responce yet 
// maybe i recive responce from request 3 before req 1 


// XHR OBJECT
//stand for xml http request
// an api have propertiew and methods

// Properties
// ready state define state of the request
XMLHttpRequest.readyState() 
// states 
// 1- 0 => uninitialized 
// 2- 1 => loading  
// 3- 2 => loaded 
// 4- 3 => interactive
// 5- 4 => complete 

XMLHttpRequest.status 
// return the request status code num 
XMLHttpRequest.statusText 
// return text  

XMLHttpRequest.responseText  
// return the response as a string 


// XHR METHODS 
// open()
document.open(method, Url, [' optional attributes']); 
// open connection 

// send()
document.send()  
// take ths request string 'params'