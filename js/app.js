let myDoc = document;



// 1ra forma de crear un objeto en javascript
const myDog = {
    // Propiedad y valor
    "name": "Firulais",
    "age": 5,
    "legs": 4
};



// 2da forma de crear un objeto en javascript
const myCat = {
    name: "Milo",
    age: 6,
    legs: 4
};

console.log(myCat.name);
console.log(myDog.legs);

// function Mouse() {
//     return "perez";
// };

myCat.tail = 1;
console.log(myCat.tail);



// 3ra forma de crear un objeto en javascript usando una clase
// es lo que vamos a usar en React

class Mouse {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


const myMouse = new Mouse('Perez');
console.log(myMouse);




// 4ta forma de crear un objeto en javascript usando una funcion
// this.document;

// function Mouse(name) {
//     this.age = 4;
//     this.name = name;
// };


// const myMouse = new Mouse('Perez');
// console.log(myMouse);