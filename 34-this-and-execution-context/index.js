this.name = 'Winslow'
/************ Function Called with New Keyword ***********/
// inside a constructor fn, this will be the newly created object
 
class Person {
  constructor(name, favColor){
    this.name = name
    this.favColor = favColor
  }
  
  sayName(){
    console.log(`My name is ${this.name}`)
  }

  sayColor = () => {
    console.log(`My favorite color is ${this.favColor}`)
  }
  
}

const filip = new Person("Filip", "cerulean")
/********************************************************/

/************ Bind Call Apply ****************************/
// within a function called with `apply/call/bind`, 
// 'this'will be the object passed as the first parameter

const steven = { name: 'steven' }
const isabelle = { name: 'isabelle' }
const meghann = { name: 'meghann' }

function sayName(location, time){
  console.log(`${this.name} says hello from ${location} at ${time}!`)
}

// sayName.call(steven, 'Penhold', '10:21 am')
// sayName.apply(isabelle, 'Miami', '10:21 am')
// sayName.bind(meghann)("New Jersy", "lunchtime")


/********************************************************/

/************ Function called on an Object ***************/
// within a `function` called within a particular object/context (i.e. `Object.method()`)
// 'this' will be the context/object

const dog = {
  name: 'Perky',
  speak: function(){
    console.log(`Woof! My name is ${this.name}`)
  }
}

// dog.speak() => this is the dog
// let talk = dog.speak
// talk() => this is the window

/********************************************************/

/************ Simple Function Call ***********************/
//  for a simple function call `fn()` will be the window object (browser) 
// or the global object (Node)

function sayThis() {
  console.log(this)
}


// sayThis() => this is the window
/********************************************************/

/************ Arrow Functions ****************************/

const bill = {
  name: 'bill',
  sayName: () => {
    console.log(`My name is ${this.name}`)
  }
} 


/********************************************************/
