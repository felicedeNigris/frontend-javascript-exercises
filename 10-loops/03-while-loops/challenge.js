module.exports.stream = function(conditionalFn,actionFn){
    while( conditionalFn() ){ //conditional function returns a boolean (while loop is in conditionalFn)
        
        actionFn(); //call action function
    }
};


module.exports.sumNumbers =   function(argarr){
    counter = argarr.length;
    var totalsum = 0;
    while(counter >= 1){
        counter--;
        console.log(argarr[counter]);
        totalsum += argarr[counter];
        
    }
    return totalsum;
};
;

