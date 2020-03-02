class Adapter {
  static base_url = "http://localhost:3000/api/v1/movies"

  static getMovies(){
    return fetch(this.base_url)
    .then(resp => resp.json())
  }
}