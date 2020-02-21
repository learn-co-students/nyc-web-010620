document.addEventListener("DOMContentLoaded", function(event) {
  const base_url = "http://localhost:3000/movies"

  fetch(base_url)
  .then(resp => resp.json())
  .then(movies => {
    movies.forEach(addMovie)
  })


  let imageContainer = document.getElementById('image-container')

  imageContainer.addEventListener('click', function(event){
    if (event.target.className === 'up-vote'){
      const li = event.target.parentNode
      const span = li.getElementsByTagName('span')[0]
      const score = parseInt(span.innerText)
      const newScore = score + 1
      span.innerText = newScore

      const body = { score: newScore }
      
      fetch(`${base_url}/${li.dataset.id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify(body)
      })



    } if (event.target.dataset.purpose === 'delete'){
      event.target.innerText = 'hey there'
      const deleteButton = event.target
      const li = deleteButton.parentNode

      li.remove()
    }
  })

  const button = document.createElement('button')
  button.innerText = 'Add Movie'
  document.body.insertBefore(button, document.body.children[2])

  button.addEventListener('click', function(e) {
    const newForm = document.createElement('form')

    newForm.innerHTML = `
      <label for="title">Title: </label>
      <input type="text" name="title">
      <label for="imageUrl">Image Url: </label>
      <input type="text" name="imageUrl">
      <label for="year">Year: </label>
      <input type="text" name="year">
      <input type="submit" value="Create Movie">
    `

    document.body.replaceChild(newForm, button)

    newForm.addEventListener('submit', function(e) {
      e.preventDefault()

      const title = e.target.title.value
      const imageUrl = e.target.imageUrl.value
      const year = e.target.year.value
      const score = 0

      const newMovie = { title, imageUrl, year, score }
      
      addMovie(newMovie)
      
      document.body.replaceChild(button, newForm)
    })
  })
})

let addMovie = movie => {
  const ul = document.getElementsByTagName('ul')[0]
  const li = document.createElement('li')
  li.className = 'movie'
  li.dataset.id = movie.id
  
  li.innerHTML = `
    <h3>${movie.title}</h3>
    <img alt="" src="${movie.imageUrl}" />
    <h4>Year: </h4>
    <p>${movie.year}</p>
    <h4>Score: <span>${movie.score}</span> </h4>
    <button class="up-vote">Up Vote</button>
    <button >Down Vote</button>
    <button data-purpose="delete" data-beef='tasty'>&times;</button>
  `

  ul.append(li)
}


