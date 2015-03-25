module.exports.copy = function(argObj){
    var newObj ={};
    for(var i in argObj){
        newObj[i] = argObj[i];
    }
    return newObj;
};;

module.exports.extend = function(dest,src){
    for(var i in src){
        if((i in dest) === true){
          dest[i] = src[i];
       }
       else if((i in dest)===false){
           dest[i] = src[i];
       }
    }
    return dest;
};

module.exports.hasElems = function(o,a){
  var oarray = Object.keys(o).sort(); //sorted object properties
  var a2 = a.sort(); //sorted array
    for(var x =0; x <= a.length; x ++){
        if(oarray[x] === a2[x] || a.length === 0){
            return true;
        }
        else
        {
            return false;
        }
    }
};


  