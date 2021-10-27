Array.prototype.uniq = function() { 
    let uniqArray = [] 

    this.forEach(ele => { 
        if(uniqArray[uniqArray.length - 1] != ele) 
            uniqArray.push(ele); 
    })
    return uniqArray;
}

