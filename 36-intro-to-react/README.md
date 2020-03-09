Intro to React
=============================

## SWBATs
- [ ] Recognize declarative and imperative coding paradigms
- [ ] Visualize/identify Components on any website
- [ ] Explain what a Component is conceptually in the UI
- [ ] Briefly explain Babel's purpose in React
- [ ] Explain what a React Component actually is in code
- [ ] Use JSX to build custom components and render them in the browser
- [ ] See how props are to components as arguments are to functions
- [ ] Go over a whole bunch of ES6 things 
- [ ] LUNCHWORK ==> App ideas 


## Notes

### ES6
- Spread Operator 
- Arrow functions... when do you parens and when are you implicitly returning 
- Destructuring assignment 
- class notation 
- key value assignment shortcut 
- dynamic object keys  **


```js
const firstName = 'caryn'
const lastName = 'mcccarthy'
const person = { firstName, lastName }
```

** instead of me just doing the thing... i'll ask you guys which technique i could/should use 

### Declarative vs Imperative Programming


## declarative
- give a direction 
- make me a burrito bowl (with blank blank and blank)

## imperative
- explicitly stating each and every step 
- chop the corn off the cobb, add cilantro and lime, ... EVERY SINGLE STEP 













#### Imperative
```js
const header = document.createElement('h1')
header.innerText = 'Wassup yall'
header.class = "screaming"

const container = document.querySelector('#container')
container.append(header)
```

#### Declarative
```js

function addHeader(){
    const header = document.createElement('h1')
    header.innerText = 'Wassup yall'
    header.class = "screaming"
    
    const container = document.querySelector('#container')
    container.append(header)
}

addHeader()

```


### Abstractions to JSX

First form: *STATIC HTML*
```jsx
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <h1>Hello, beef!</h1>
    <h1>Hello, squid!</h1>
  </div>,
  document.getElementById('root')
);
```

Second form: *Dynamic, reusable components using regular functions and arguments*


Third Form: *Static components using JSX*


FINAL FORM: *Dynamic, reusable components using JSX and props*

----------

## ES6 Notes
```js
const myCards = [
  {language: 'en', title: 'Hello, World!', subtitle: 'Welcome to React'},
  {language: 'sp', title: 'Hola, Mundo!', subtitle: 'Bienvenido a React', excited: true},
  {language: 'fr', title: 'Hallo Welt!', subtitle: ' Willkommen bei React!', excited: true},
  {language: 'ru', title: 'Привет, мир!', subtitle: 'добро пожаловать реагировать', excited: true}
]
```










### Dynamic Object Keys
Use square brackets to use the value of a variable as the key in an object
```js

const people = ['Caryn', 'Meghann', 'Jallen', 'Isabelle', 'Justin']
const phrases = ['Do better!', 'I need', 'To get', 'More phrases', 'For folks']

const sayingsObj = {}

people.forEach((name, index) => {
  sayingsObj[name] = phrases[index]
})

console.log(sayingsObj)
```

### Forms of Arrow Functions
A shorter, cleaner way to write functions (especially one liners). Know when to use parentheses and when you're implicitly returning v. explicitly returning. 

     HANDS UP IF... it will return undefined or error out 
      - () => { const myPerson = {name: 'mojo', species: 'cat'} } ==== 4   WILL RETURN UNDEFINED
      - () => {name: 'mojo', species: 'cat'}    ==== 1     WILL ERROR
      - () => ({name: 'mojo', species: 'cat'})   ==== 9    WILL RETURN THE OBJECT
      - (m) => m * 100   ==== 1     WILL RETURN THE NUMBER (M*100)
      - (m) => { m * 100 }   ==== 2   WILL RETURN UNDEFINED 

### Spread Operator
Expands any iterable (string, array, object) to its set of items. You can use this to "spread" an object so its keys each become a prop!

### Destructuring Assignment
Unpacks values from an array or object into discrete variables. Destructure props into individual local variables this way!

### Ternary Operator
Common shortcut for an "if" statement


----------

## Links

[Babel](https://babeljs.io/)
[React](https://reactjs.org/)
[Whiteboarding App](https://awwapp.com)

----------

## Parking Lot 
- key prop & efficient diffing 