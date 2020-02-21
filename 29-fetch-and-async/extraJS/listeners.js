// √get the node I want to listen to
// √add a listener for "click"
// √change the src attribut on the img

// let image = document.querySelector('img')
let image = document.getElementById('welcome-image')

image.addEventListener('click', function(event){
  console.dir(event.target)
  let pic = event.target
  pic.src = "https://i.ytimg.com/vi/qYKrqd9VacY/maxresdefault.jpg"
})


image.addEventListener('mouseover', function(event){
  event.target.style.border = 'solid thick turquoise'
})

image.addEventListener('mouseout', function(event){
  event.target.style.border = ''
})


// https://i.ytimg.com/vi/qYKrqd9VacY/maxresdefault.jpg