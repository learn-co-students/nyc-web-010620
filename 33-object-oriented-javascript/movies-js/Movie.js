class Movie {
  constructor(movieObj){
    this.title = movieObj.title
    this.imageUrl = movieObj.imageUrl
    this.year = movieObj.year
    this.score = movieObj.score
  }

  addMovie(){
    const ul = document.getElementsByTagName('ul')[0]
    const li = document.createElement('li')
    li.className = 'movie'
    li.dataset.id = this.id
    
    li.innerHTML = `
      <h3>${this.title}</h3>
      <img alt="" src="${this.imageUrl}" />
      <h4>Year: </h4>
      <p>${this.year}</p>
      <h4>Score: <span>${this.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button >Down Vote</button>
      <button data-purpose="delete" data-beef='tasty'>&times;</button>
    `
  
    ul.append(li)
  }
}