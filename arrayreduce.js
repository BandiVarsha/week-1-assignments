var reduce = function(nums, fn, init) {
    var arrr = init;
    for(let i=0;i<nums.length;i++)
    { 
        arrr=fn(arrr,nums[i]);
    }
    return arrr;   
};