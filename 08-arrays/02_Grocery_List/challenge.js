module.exports.addItem = function(arg, list){
    for(i=0;i<list.length; i++){
        if((list[i] === arg) === true){
           return list;//list.splice(list[i],1);
        }
        else
        {
           list.push(arg);
           return list;
        }
    }
};

module.exports.reverseSortedList = function(arry){
  if(arry instanceof Array){
    return arry.reverse(arry.sort());
  }
  else{
    return arry;
  }

  

};