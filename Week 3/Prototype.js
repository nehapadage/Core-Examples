/**
    * 
    * prototype in javascript
    * here, pen is class with constructor and ballpen , inkpen are two objects of pen class
    *
    */

   var pen = function(name){

    this.name = name;
    this.price = 10;
 };

 var ballpen = new pen();

var inkpen = new pen();

ballpen.color = "blue"

console.log(ballpen.color)              //prints blue
console.log(inkpen.color)               //prints undefined color property is not available for inkpen object

inkpen.color = "red"                    // prints red color property is available for inkpen object
console.log(inkpen.color) 

   /*
    * to make properties available for all objecs we use prototype
    * syatax =>   classname.prototype.key='value';
    */

    pen.prototype.color1 = "black"
    console.log(ballpen.color1)              
    console.log(inkpen.color1) 