
var sortBy = function(arr, fn) {
    for(let i=0;i<arr.length;i++){
       for(let j=i+1;j<arr.length;j++){
          if(fn(arr[i])>fn(arr[j])){
              let temp = 0;
              temp = arr[j];
              arr[j] = arr[i];
              arr[i] = temp
          }
          }
          }      return arr;   
};