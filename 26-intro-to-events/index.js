document.addEventListener("DOMContentLoaded", function(event) {
  const movies = [
    {
      title: 'The Goonies',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/515DYf99zfL.jpg',
      year: 1985,
      score: 0
    },
    { 
      title: 'Free Willy',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Free_willy.jpg/220px-Free_willy.jpg',
      year: 1993,
      score: 0  
    },
    { 
      title: 'Top Gun',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
      year: 1986,
      score: 0  
    },
    { 
      title: 'Mean Girls',
      imageUrl: 'https://img01.mgo-images.com/image/thumbnail?id=1MV270609a1c6c89af5538a6d63cea71ed4&ql=70&sizes=310x465',
      year: 2004,
      score: 0  
    },
    { 
      title: 'Parasite',
      imageUrl: 'https://mymodernmet.com/wp/wp-content/uploads/2020/02/parasite-film-tribute-1.jpg',
      year: 2019,
      score: 0  
    }
  ]


  // √iterate through the movies
  // √create li for each movie
  // √interpolate movie details into HTML
  // √append each li to the the ul

  movies.forEach(addMovie)

  const upVotes = Array.from(document.getElementsByClassName('up-vote'))

  upVotes.forEach(function(button) {
    
    button.addEventListener('click', function(event) {
      const li = event.target.parentNode
      const span = li.getElementsByTagName('span')[0]
      const score = parseInt(span.innerText)
      span.innerText = score + 1
    })
  })
})

let addMovie = movie => {
  const ul = document.getElementsByTagName('ul')[0]
  const li = document.createElement('li')
  li.className = 'movie'
  
  li.innerHTML = `
    <h3>${movie.title}</h3>
    <img alt="" src="${movie.imageUrl}" />
    <h4>Year: </h4>
    <p>${movie.year}</p>
    <h4>Score: <span>${movie.score}</span> </h4>
    <button class="up-vote">Up Vote</button>
    <button>Down Vote</button>
    <button>&times;</button>
  `

  ul.append(li)
}