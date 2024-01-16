var map = function(arr, fn) {
    const arrr = [];
    for(let i=0;i<arr.length;i++) 
    {
        arrr[i] = fn(arr [i], i) ;
    }
   return arrr;   
};
// gfgt