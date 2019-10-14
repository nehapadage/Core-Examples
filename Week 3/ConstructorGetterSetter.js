class Rectangle                // class declaration
 {
    constructor(height , width)          // constructor of class
    {				//Parameterized constructor
       this.height = height;
       this.width = width;
    }

    get area()                     //  getter
    {
        return this.height*this.width;
    }

    static display()                        //static method
    {
        console.log("Hello..");        
    }
 }

 let rect = new Rectangle(10,50)        // object of class
 console.log(rect.area);

 Rectangle.display();                   // calling static method using class name instead of object

   /*
    * In JS we can add properties at any time using object . we don't need to write in constructor only
    */
 rect.color = 'red';
 console.log(rect.color);