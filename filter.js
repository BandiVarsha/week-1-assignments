
var filter = function(arr, fn) {
    const arrr = [];
    for (let i=0;i<arr.length;i++)
    {
        if(fn(arr[i],i))
        {
            arrr.push(arr[i]);
        }
    }
    return arrr;
    
};