

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

// let myName = ()=>{
//     return "Hello";
// }
// let greeting = (sayHi ,name)=> {
//     console.log(sayHi() + " " + name)
// }
// greeting(myName, "ThapaTechnical");


// let perOne = (friend,callfrd)=>{
//     console.log(` I am busy right now. I am talking to ${friend}, I will call you back. `)
//     callfrd();
// }

// let perTwo = () => {
//     console.log(`Hey, what's up. I call  back you.`)
// }

// perOne("Thapa",perTwo);
// perTwo();


//  closure  Function

const interviewQuestions = (name) => {
    return function (topic){
        if(name ==="vinod"){
            console.log(`Hi, ${name}. Plz explain what is ${topic}.`);
        }else if(name ==="Thapa"){
            console.log(`Hi, ${name}. Plz explain what is ${topic}.`);
        }else if(name ==="Thapatechnical"){
            console.log(`Hi, ${name}. Plz explain what is ${topic}.`);
        }else {
            console.log("Welcome to TT Company");
        }
    }
}
// const candidates = interviewQuestions("vinod");
// candidates("UI")
// const candidates1 = interviewQuestions("Thapa");
// candidates1("React")

interviewQuestions("vinod")("UI");
interviewQuestions("Thapa")("React");