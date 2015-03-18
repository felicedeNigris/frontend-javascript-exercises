module.exports.reversePlusOne = function(arry){
    var returnArray = [];
    if(arry instanceof Array && arry.length > 1){
        for(i =0; i< arry.length; i++){
          returnArray.push(arry[i]);
        }
        returnArray = returnArray.reverse();
        returnArray.unshift(1);
        return returnArray;
    }
    else
    {
        return null;
    }

};

module.exports.plusesEverywhere = function(arry){

var str = "";
    if(arry instanceof Array && arry.length > 0){
      for(b =0; b < arry.length; b++){
          str += arry[b] + "+";
      }
      return str.slice(0,-1);
    }
    else
    {
      return null;
    }

};

module.exports.arrayQuantityPlusOne = function(arry){

  checkifNumber = function(element, index, array){
     if((typeof element) == 'number'){
        return true;
    }
    else{
        return false;
    }
  };

  if(arry instanceof Array && arry.every(checkifNumber)){
    return arry.length + 1;
  }
  else
  {
    return null;
  }
};
