var createCounter = function(init) { 
    let n=init;
    return{
      increment:function()
      {
          return ++init;
      },
      reset:function()
      {   
          init=n;
          return n;
      },
      decrement:function(){
          return --init;
      },
      };
};