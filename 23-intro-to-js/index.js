console.log('Hi there')


// How to write functions in JavaScript

  // write a function that prints 'hello world' to the console

  // write a function that accepts a 'name' parameter and prints "Hi, my name is <name>" to the console

  // write a funtion that accepts 2 numbers as parameters and adds them

  function add(num1, num2) {
    return num1 + num2
  }

  // write a function that accepts a number as a parameter and doubles it

  function doubler(num){
    return num * 2
  }

  // write a function that accepts a number as a parameter and prints "❌ You're too young to enter the clurb! ❌" is the parameter 
  // is less than 21 and "🤡 Welcome to the clurb! 🚀" if the parameter is 21 or over

  function inTheClurb(age) {
    return (age < 21 ? "❌ You're too young to enter the clurb! ❌" : "🤡 Welcome to the clurb! 🚀")
  }

  // modify the above function to allow an underage patron in if they have a fake id

  function inTheClurb(age, fakeId = false) {
    
    return (age < 21 ? "❌ You're too young to enter the clurb! ❌" : "🤡 Welcome to the clurb! 🚀")
  }
