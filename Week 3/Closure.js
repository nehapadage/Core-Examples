function makeYounger(age){
    function b(){ 
    console.log("Original age is :"+age); 
    }
    b();
    return( function (){ 
    return age/2; }
    ); 
    }
    var displayAge = makeYounger(20); 
    console.log(displayAge());