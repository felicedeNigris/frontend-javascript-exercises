module.exports.createCourse = function(courseTitle, courseDuration, courseStudents){
    
    var courseObj = {
            title: courseTitle,
            duration: courseDuration,
            students: courseStudents
          };

    if((typeof courseTitle == 'string') 
      && (typeof courseDuration ==  'string') 
      && (courseStudents.constructor === Array)){

        return courseObj;
    }
    else
    {

      return null;

    }

};

module.exports.addProperty = function(object, newProp, newValue){
  if((typeof object === 'object') && (newProp in object === true)){
    return object;
  }
  else
  {
    object[newProp] = newValue; /* this took forever for me to figure out.
     object.newProp(DOT NOTATION) didn't work and would create a property newProp
     but object.[newProp] checks the functions newProp argument correctly.
     */
    return object;
  }

};


module.exports.formLetter = function(letter){
    
    if( ('recipient' in letter === true) && ('sender' in letter === true)&& ('msg' in letter === true)){
        return "Hello " + letter.recipient + ",\n\n" + letter.msg +"\n\nSincerely,\n" + letter.sender;
    }
    else
    {
        return null;
    }
    
};



module.exports.canIGet = function(item,money){

  if((item ==='MacBook Air' && money >= 999)||(item ==='MacBook Pro' && money >=1299)||
    (item == 'Mac Pro' && money >= 2499)||(item ==='Apple Sticker' && money >= 1)){
    return true;
  }
  else
  {
    return false;
  }

};