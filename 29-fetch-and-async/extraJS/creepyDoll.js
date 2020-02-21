function creepyDoll(){
  let image = document.createElement('img')
  image.src = "https://i.imgur.com/S0ErK.jpg"
  image.style.height = '100%'
  image.style.width = '100%'

  document.body.style.backgroundColor = 'black'
  document.body.prepend(image)

  var scream = new Audio('extraJS/scream.mp3')
  scream.play();

  setTimeout(function(){
      image.remove()
      document.body.style.backgroundColor = ''
  }, 3000)
}

window.addEventListener("offline", function(){
  creepyDoll()
})