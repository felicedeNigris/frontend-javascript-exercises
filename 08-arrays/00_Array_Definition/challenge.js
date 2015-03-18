module.exports.newArray = function(a,b,c,d){
var arrayArgs = [];
for(i =0; i< arguments.length; i++){
   arrayArgs.push(arguments[i]); 
}

return arrayArgs;

};

module.exports.firstAndLast = function(arrayitem){
  var pushArray =[];
  if(arrayitem instanceof Array && arrayitem.length > 2){
    pushArray.push(arrayitem[0]);
    pushArray.push(arrayitem.pop());
    return pushArray;
  }
  else{
    return null;
  }
};