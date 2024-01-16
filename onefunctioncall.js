var once = function(fn) {
    let s=false;
    return function(...args){
        if(!s)
        {
            s=true;
            return fn(...args);
        }
        
    }
};
