function multiplier(x) {
  return function(y) {
    return x * y
  }
}

let doubler = multiplier(2)

function myMap(array, callback) {
  const newArray = []
  
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const newElement = callback(element)
    newArray.push(newElement)
  }

  return newArray
}

let array = [1,2,3,4]

myMap(array, doubler) // => [2,4,6,8]