// headers --> use these at your own discretion
const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
// urls
const kaijusURL = 'http://localhost:4000/kaijus/'
const sightingsURL = 'http://localhost:4000/sightings'
// parse incoming data
const parseData = response => response.json()
// error handler
const catchError = error => console.log(`%c${error}`, 'color: red;')

//////////////////////////////////////////////////////

// Fetches for kaijus, will return a promise
// GET /kaijus
export const fetchKaijus = () => fetch(kaijusURL)
.then(parseData)
.catch(catchError)

// TODO: define a few more kaiju fetches

export const postKaiju = data => fetch(kaijusURL, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
})
.then(parseData)
.catch(catchError)

export const editKaiju = ({id, name, power, image}) => fetch(`${kaijusURL}/${id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
        name,
        power,
        image
    })
})
.then(parseData)
.catch(catchError)

//////////////////////////////////////////////////////

// Fetches for sightings, will return a promise
// GET /sightings
export const fetchSightings = () => fetch(sightingsURL)
.then(parseData)
.catch(catchError)

// TODO: define a few more sighting fetches
