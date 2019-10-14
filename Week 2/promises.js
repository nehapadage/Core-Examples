/*
var promise = new Promise(function(resolve, reject) { 
    const x = "geeksforgeeksa"; 
    const y = "geeksforgeeks"
    if(x === y) { 
      resolve(); 
    } else { 
      reject(); 
    } 
  }); 
    
  promise. 
      then(function () { 
          console.log('Success, You are a GEEK'); 
      }).
     
      catch(function () { 
          console.log('Some error has occured'); 
      }); 
      */

     let p= new Promise(function(resolve , reject)  {

      let a=1+1;
      if(a==2)
          resolve(console.log('success'));
           
      else{
          reject(console.log('fail'));
      }
  });