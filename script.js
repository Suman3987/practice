

const animals = [
    {name : "Fluffykins" , species: "rabbit"},
    {name : "Caro" , species: "dog"},
    {name : "Hamilton" , species: "dog"},
    {name : "Harold" , species: "fish"},
    {name : "Ursula" , species: "cat"},
    {name : "Jimmy" , species: "fish"},
]

let dogs= animals.filter(function(animal){
    return animal.species === "dog";

})
console.log(dogs);

// let animal=[];

// for(let i = 0; i <animals.length ; i++){
//     if (animals[i].species === "dog")
//     animal.push(animals[i]);
// }

// console.log(animal);