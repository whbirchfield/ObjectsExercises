
let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    astronautID: 1
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    astronautID: 2
};

let superChimpTwo = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    astronautID: 3
};

let superCanine = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    astronautID: 4
};

let superInsect = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.1,
    age: 5,
    astronautID: 5
};

/*superInsect[astronautID] = Math.floor(Math.random()*10);
superChimpOne[astronautID] = Math.floor(Math.random()*10);
superChimpTwo[astronautID] = Math.floor(Math.random()*10);
superCanine[astronautID] = Math.floor(Math.random()*10);
salamander[astronautID] = Math.floor(Math.random()*10);
*/


for (item in superChimpOne){
  console.log(item + ", " + superChimpOne[item]);
}

console.log("\n");
for (item in superChimpTwo){
  console.log(item + ", " + superChimpTwo[item]);
}

console.log('\n');
for (item in superInsect){
  console.log(item + ", " + superInsect[item]);
}

console.log('\n');
for (item in salamander){
  console.log(item + ", " + salamander[item]);
}

console.log('\n');
for (item in superCanine){
  console.log(item + ", " + superCanine[item]);
}
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!