//import or load lodash
const _  _.curry() =require('lodash');
var abc = function(a, b, c) {
    return a + b + c;
  };
   
  var curried = _.curry(abc);
  var addBy2 = curried(2);
  console.log(addBy2(0,0));
  // => 2
  console.log(addBy2(1,1));
  // => 4
  console.log(curried(4)(5)(6));
  // => 15