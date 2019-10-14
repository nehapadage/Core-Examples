function array()
{   
    let Intarr = [1,2,3,4]
    let stringarr = ['a','b','c']

    let arrmerge = Intarr.concat(stringarr);            // Merging of Two Arrays
    console.log("array merge => "+arrmerge);
    
    let arrsplice = Intarr.splice(2);                   // splices starting 2 indexes
    console.log("array splice => "+arrsplice);

    let arr="Neha Padage Welcome in Bridgelabz";        //splits the whole string into small strings
    var result=arr.split(" ");
    console.log(result);
    
  
}

array();


var colors = ['red', 'green', 'blue']           // For each method

function print(val) {
  console.log(val)
}

colors.forEach(print)



              
function capitalize(val) {                      // Array map method

    return val.toUpperCase()
}

var capitalizedColors = colors.map(capitalize)

console.log(capitalizedColors)



var values = [1, 60, 34, 30, 20, 5]             // Array filter

function lessThan20(val) {
    return val < 20
}

var valuesLessThan20 = values.filter(lessThan20)

console.log(valuesLessThan20)



var people = [                                                      // Array find
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
]

function teenager(person) {
    return person.age > 10 && person.age < 20
}

var firstTeenager = people.find(teenager)

console.log('First found teenager:', firstTeenager.name)


//                         // Array Every
// var people = [
//   {name: 'Jack', age: 50},
//   {name: 'Michael', age: 9}, 
//   {name: 'John', age: 40}, 
//   {name: 'Ann', age: 19}, 
//   {name: 'Elisabeth', age: 16}
// ]

// function teenager(person) {
//     return person.age > 10 && person.age < 20
// }

// var everyoneIsTeenager = people.every(teenager)

// console.log('Everyone is teenager: ', everyoneIsTeenager)


//                                                 // some
// var people = [
//   {name: 'Jack', age: 50},
//   {name: 'Michael', age: 9}, 
//   {name: 'John', age: 40}, 
//   {name: 'Ann', age: 19}, 
//   {name: 'Elisabeth', age: 16}
// ]

// function teenager(person) {
//     return person.age > 10 && person.age < 20
// }

// var thereAreTeenagers = people.some(teenager)

// console.log('There are teenagers:', thereAreTeenagers)
