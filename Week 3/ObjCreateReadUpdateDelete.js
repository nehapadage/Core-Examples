//object created as 'person'
let person = {
    name : "Neha",
    lastname : "Padage",
    Age : 23,
    contact_no : 8788668702
}


//read the objects

console.log(person);
console.log("reading objects: "+person.name+"\t"+person.lastname+"\t"+person.Age+"\t"+person.contact_no+"\n");

//delete object

delete person.Age;                         
console.log("delete object: "+person.name+"\t"+person.lastname+"\t"+person.Age+"\t"+person.contact_no+"\n");

//update object

person.name = "Priyanka"
person.Age = 24

console.log("Updated objects : "+person.name+"\t"+person.Age+"\n");