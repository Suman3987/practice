

const animals = [
    {name : "Fluffykins" , species: "rabbit"},
    {name : "Caro" , species: "dog"},
    {name : "Hamilton" , species: "dog"},
    {name : "Harold" , species: "fish"},
    {name : "Ursula" , species: "cat"},
    {name : "Jimmy" , species: "fish"},
]

// 
let animal=[]
for (let i = 0; i < animals.length; i++)
 if (animals[i].species === "dog")
 animal.push(animals[i])

console.log(animal);


// let animal=[];

// for(let i = 0; i <animals.length ; i++){
//     if (animals[i].species === "dog")
//     animal.push(animals[i]);
// }

// console.log(animal);

// let data = [2,4,5,10];

//  let x = (item) => {
//     return 10 * item
// }
//     let result = data.map(x)

//  console.log(result);

let myName = ()=>{
    return "Hello";
}
let greeting = (sayHi ,name)=> {
    console.log(sayHi() + " " + name)
}
greeting(myName, "ThapaTechnical");
