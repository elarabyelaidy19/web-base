// ERROR OBJECTS  

// types of errors 
// 1- syntax error  => missed parenthis on alert  
var alert = alert("hello world")  

// 2- Type Error 
// function not available 
console.logg 

// 3- Range Error 
console.log((123.54).toFixed(101)) // to fixed range 0 to 100 
 
// 4- Error Object 
// 

var myError = new Error("throwed message"); 

throw myError; 


var result = parseInt(prompt("enter your number between 10 and 20", "15")); 
if (result < 20)
  throw "15 less than 20";
else if (result > 20) 
  throw new RangeError ("out of range"); 
else 
  alert("value within accepted range");


// properties 
console.log(myError.name);
console.log(myError.message); 


//#############################################################
//###############################################################

// Error Handling 


try { 
  var result = parseInt(prompt("enter your number between 10 and 20", "15")); 
  if (result < 10) // if value less than 10
    throw "less than expected";  // this will throw error and goes to catch
  else if (result > 20) 
    throw new RangeError ("out of range"); 
  else 
    alert("value within accepted range");

  console.log("inside try")  

} catch(e) { // work only if there is an error within try block
  
  if (e instanceof RangeError) {  // if instance of Rangeerror excute here else 
    console.log("this is range error");
    console.log(e.name); 
    console.log(e.message); 
  } 
  else if (e=="less than expected") {  // goes here compare e with throwed message and excute  
    console.log("low value")
  }
  // console.logg("type error")
  console.log("catched error");
} finally {  // work if there is error at both try and catch
  // any code outside finally will never work 
  console.log("done") 
}
// any code outside finally will never work 
console.log("i will never work if there is error in catch and try")




//#############################################################
//###############################################################

// on error 
onerror = errorHandle; 

    function errorHandle(msg,url,l,col,err) { 
      console.log(msg);
      console.log(url); 
      console.log(l); 
      return false; // error messge will not show in browser
    }


    var result = parseInt(prompt("enter your number between 10 and 20", "15")); 
    if (result < 10) // if value less than 10
      throw "less than expected";  // this will throw error and goes to catch
    else if (result > 20) 
      throw new RangeError ("out of range"); 
    else 
      alert("value within accepted range");

    
    console.log("inside try")    
    console.log("this is range error");


    // any code outside finally will never work 
    console.log("done")
