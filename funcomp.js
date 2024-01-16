var compose = function(functions) {  
    return function(x) {
        let i = functions.length;
        for(d=i-1;d>=0;d--)
        {
            x=functions[d](x);
        }
        return x;        
    }
};