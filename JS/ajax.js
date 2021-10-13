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
var xhr = new XMLHttpRequest(); 
// event handler 

xhr.onreadystatechange 
// take object of the ready state
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


// ajax Complete response  
// create req, resp via clicking button 
document.getElementById("btn").addEventListener("click", function() { 
        
  // xhr object 
  var xhr = new XMLHttpRequest();
  // returned text 
  var txt= ""
  // capture ready state object 
  xhr.onreadystatechange = function() { 
    // if response complete successfully save it in txt 
    if (xhr.readyState==4) { 
      if (xhr.status==200) { 
        // read the response text and assign it to txt
        txt = xhr.responseText; 
        // find the first div tag and put txt content in it 
        document.getElementsByTagName("div")[0].innerHTML = txt;
      }
    }
  }
  xhr.open("GET","simple.txt"); 
  xhr.send("");  
});




//#############################################################
//############################################################### 

// validator jsonlint.com
// json 

//  JSON FUNCTIONS 

// json.parse() 
// convert json file into JS Object

// json.stringfy 
// convert js objects into  json file 


// maniuplate json 


document.getElementById("btn").addEventListener("click", function() { 
        
     
  var xhr = new XMLHttpRequest();
  var txt= "" 
  var jsObj, jsonObj;
  xhr.onreadystatechange = function() { 

    if (xhr.readyState==4) { 
      if (xhr.status==200) { 
        // assign the the text response in jsonObj 
        jsonObj = xhr.responseText;  
        // parse jsonObj to jsObj 
        jsObj = JSON.parse(jsonObj);
        
        console.log(jsObj); 

        // ascess value of js obj
       document.getElementsByTagName("div")[0].innerHTML = jsObj[2].color;
      }
    }
  }
  xhr.open("GET","json.json"); 
  xhr.send("");  
}) 


// REFACTORING  


document.getElementById("btn").addEventListener("click", function() { 
        
     
  var xhr = new XMLHttpRequest();

  var jsObj, jsonObj;
  xhr.onreadystatechange = function() { 

    if (xhr.readyState==4) { 
      if (xhr.status==200) { 
        // assign the the text response in jsonObj 
        // parse jsonObj to jsObj 
        jsObj = JSON.parse(xhr.responseText);
        
        console.log(jsObj); 
        displayFormat(jsObj);

        // ascess value of js obj
      }
    }
  }
  xhr.open("GET","json.json"); 
  xhr.send("");  

})

function displayFormat(obj) { 
    
  document.getElementsByTagName("div")[0].innerHTML = obj[2].color;
}