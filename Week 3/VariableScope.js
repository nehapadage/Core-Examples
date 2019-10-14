var fullMoon = true;

var species = "human";

if (fullMoon) {
  // Attempt to create a new variable in a block
  var species = "werewolf";
  console.log(`It is a full moon. Lupin is currently a ${species}.`);       // output : werewolf
}

console.log(`It is not a full moon. Lupin is currently a ${species}.`);     // output : werewolf




// Initialize a global variable
let speciess = "human";

if (fullMoon) {
  // Initialize a block-scoped variable
  let speciess = "werewolf";
  console.log(`It is a full moon. Lupin is currently a ${speciess}.`);      // output : werewolf
}

console.log(`It is not a full moon. Lupin is currently a ${speciess}.`);        // output : human