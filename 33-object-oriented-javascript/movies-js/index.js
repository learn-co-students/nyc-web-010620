document.addEventListener("DOMContentLoaded", function(event) {
  // const base_url = "http://localhost:3000/api/v1/movies"

  Adapter.getMovies()
  .then(data => {
    const movies = data.map(movieData => {
      return new Movie(movieData)
    })

    movies.forEach(movie => {
      movie.addMovie()
    })
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
      const li = event.target.parentNode

      fetch(`${base_url}/${li.dataset.id}`,{
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          accept: "application/json"
        }
      })
      .then(resp => resp.json())
      .then(data => {
        const li = event.target.parentNode

        li.remove()
      })
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
      
      fetch(`${base_url}`, {
        method: "POST",
        headers:  {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify(newMovie)
      })
      .then(resp => resp.json())
      .then(movie => {
        addMovie(movie)
      })

      document.body.replaceChild(button, newForm)
    })
  })
})
