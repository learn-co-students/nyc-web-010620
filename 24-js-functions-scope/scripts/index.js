// console.log("locked and loaded")

// SCOPE

// global, function, and block scope

// const someVariable = 'steven' // <= global scope


// function someFunction(){

//   // const someVariable = 'steven' <= function scope
//   (function(){
//     const otherVariable = 'edward'

//     console.log(someVariable)
//     console.log(otherVariable)

//   })() //IIFE

//   // console.log(otherVariable)

// }

// console.log(someVariable)

// if (true){
//   let myVar = "howdy" // <= block scope
//   console.log(myVar)
// }

// console.log(myVar)

// HOISTING
// variables declared with `var` and functions declared with `function` keyword are hoisted

// console.log(dog)

// var dog = 'Bear'

// console.log(dog)


// bark()
// bark2()

function bark(){
  console.log('woof')
}

let bark2 = function(){
  console.log('woof2')
}

// var VS. let VS. const
// var variables are hoisted, let and const are not
// var variables can be redeclared and reassigned
// let variables can be reassigned but not redeclared
// const variables cannot be reassigned or redeclared



// First Class Functions
// * allows functions to have properties
// * alows function to be passed into other functions
// * function can be returned by other functions
// * functions can be assigned to a variables

function multiplier(x){
  return function(y){
    console.log("x", x)
    console.log("y", y)
    console.log(x * y)
  }
}

let someVar = multiplier

// closure 
let doubler = multiplier(2)
let tripler = multiplier(3)