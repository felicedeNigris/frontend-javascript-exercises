module.exports.getKeys = function(argObj){
    objKeys = [];
    for(var i in argObj){
      objKeys.push(i);
    }
    return objKeys;
};

module.exports.getValues = function(argObj){
    objKeys = [];
    for(var i in argObj){
      objKeys.push(argObj[i]);
    }
    return objKeys;
};


module.exports.objectToArray= function(argObj){
    objKeyValue = [];
    for(var i in argObj){
      objKeyValue.push( i +" is " + argObj[i]);
    }
    return objKeyValue;
};
