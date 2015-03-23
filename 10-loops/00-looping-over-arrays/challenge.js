module.exports.sumNumbers = function(sampleArray){
    var arraySum = 0;
    if(sampleArray.length === 0){
        return 0;
    }
    else
    {
      for(i = 0; i < sampleArray.length; i++){
        arraySum += sampleArray[i];
    }
    return arraySum;
    }
};


module.exports.splitAndLowerCaseString = function(inputString){
  return inputString.toLowerCase().split(',');   

};

module.exports.addIndex = function(sampleArray){
    var newarray =[];
    for(i =0; i< sampleArray.length; i++){
        newarray.push(i + " is " + sampleArray[i]);
    }
    return newarray;

};