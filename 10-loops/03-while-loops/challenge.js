module.exports.stream = function(conditionalFn,actionFn){
    while( conditionalFn() ){ //conditional function returns a boolean (while loop is in conditionalFn)
        
        actionFn(); //call action function
    }
};


module.exports.sumNumbers =   function(argarr){
    counter = argarr.length;
    var totalsum = 0;
    while(counter >= 1){ // while greater than one
        counter--; 
        console.log(argarr[counter]);//print array element[counter]

        totalsum += argarr[counter];// add the sum to totalsum variable
    }
    return totalsum;
};
;

