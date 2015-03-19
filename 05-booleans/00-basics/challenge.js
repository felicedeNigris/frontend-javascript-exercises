module.exports.equalStrings = function(stringOne, stringTwo) {
  if(stringOne === stringTwo){
    return true;
  }
  else
  {
    return false;
  }
};

module.exports.notEqual = function(one, two) {
  if((one !== two) || (one != two)){
    return true;
  }
  else
  {
    return false;
  }
};

module.exports.inBetween = function(lower, middle, upper) {
    if(parseInt(middle, 10) > parseInt(lower,10) && parseInt(middle,10) < parseInt(upper,10)){
      return true;
    }
    else
    {
      return false;
    }
};


module.exports.outsideRanges = function(number) {
    if((typeof number == 'number') && !(number <=20 && number >= 10) && !(number > 42 && number <= 75) && !(number > 1 &&  number < 6)){
      return true;
    }
    else
    {
      return false;
    }
};



module.exports.nameAndPrice = function(name, price) {
    if((name == "NYTimes" || name == "LATimes") && price >= 1){
      return true;
    }
    else
    {
      return false;
    }
};