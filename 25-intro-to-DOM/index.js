// function multiplier(x) {
//   return function(y) {
//     return x * y
//   }
// }

// let doubler = multiplier(2)

// function myMap(array, callback) {
//   const newArray = []
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     const newElement = callback(element)
//     newArray.push(newElement)
//   }

//   return newArray
// }

const ul = document.getElementsByTagName('ul')[0]

const li = document.createElement('li')
li.className = 'movie'

li.innerHTML = `
  <h3>Parasite</h3>
  <img alt="" src="https://mymodernmet.com/wp/wp-content/uploads/2020/02/parasite-film-tribute-1.jpg" />
  <h4>Year: </h4>
  <p>2019</p>
  <h4>Score: <span>0</span> </h4>
  <button>Up Vote</button>
  <button>Down Vote</button>
  <button>&times;</button>
`

ul.append(li)