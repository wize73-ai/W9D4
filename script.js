class Person {
    constructor(name,age){
        this.name = name;
        this age = age;
    }
    greet() {
        console.log("hello, my name is ${this.name} and I am ${this.age} .")
    }
}

const Person1 = new Person('Alice',38)
const Person2 = new Person('james',50)

class Car() {
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year
    }
    DisplayInfo(){
        console.log(`Car :$(this.make) $(this.model), year: $(this.year)`)
    }
}
// ### Methods 

///1. **Array Methods:**
//    - `new Array(size)`: Creates an array of a specified size.
//    - `push(element)`: Adds an element to the end of an array.
//    - `splice(index, count)`: Removes elements from an array starting at a specified index.
//    - `reduce(callback, initialValue)`: Applies a function against an accumulator and each element in the array to reduce it to a single value.

// 2. **Object Methods:**
//    - `hasOwnProperty(key)`: Checks if an object has a property with the specified key.
//    - `Object.values(object)`: Returns an array of the object's values.

// 3. **String Methods:**
//    - `charCodeAt(index)`: Returns the Unicode value of the character at the specified index in a string.
//    - `toString()`: Converts a value to a string.

// 4. **Console Methods:**
//    - `console.log(message)`: Outputs a message to the console.
//    - `console.error(message)`: Outputs an error message to the console.
// Collapse

///

n
 
// // Classes

// class Person {
//     constructor(firstName, lastName, age) {
//         debugger
//         this.fullName = `${firstName} ${lastName}`
//         this.age = age
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//     }
// }

// const person1 = new Person('Alice', "Chris", 30);
// console.log("🚀 ~ person1:", person1)
// const person2 = new Person("Max", 98)



// class Car {
//     constructor(make, modal, year) {
//         this.make = make
//         this.modal = modal === "Corolla" ? "hello" : false
//         this.year = year
//     }

//     displayInfo() {
//         console.log(`Car: ${this.make} ${this.modal}, Year: ${this.year}`)
//     }
// }

// const car1 = new Car("Toyota", "Corolla", 2000)
// car1.displayInfo()

class HashTable {
    constructor(size) {
        debugger
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);     
        }
        return hash % this.size
    }

    set(key, value) {
        debugger
        const index = this.hash(key);
        this.table[index] = value
    }

    get(key) {
        const index = this.hash(key)
        return this.table[index]
    }
}

const hashTable = new HashTable(50);
console.log("🚀 ~ hashTable:", hashTable)