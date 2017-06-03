import fetch from 'node-fetch'
import cachedData from './data.json'

const toJSON = response => response.json()
const getHomeworldName = json =>
  Promise.all(
    json.results.map(person =>
      fetch(person.homeworld)
        .then(toJSON)
        .then(({ name }) => ({ ...person, homeworld: name }))
    )
  ).then(results => ({ ...json, results }))

const getFilmNames = json =>
  Promise.all(
    json.results.map(person =>
      Promise.all(
        person.films.map(film =>
          fetch(film)
            .then(toJSON)
            .then(({ title }) => title)
        )
      ).then(films => ({ ...person, films }))
    )
  ).then(results => ({ ...json, results }))

export const fetchCharacters = (cache = true) =>
  cache ? new Promise(resolve => resolve(cachedData)) :
    fetch('http://swapi.co/api/people')
      .then(toJSON)
      .then(getHomeworldName)
      .then(getFilmNames)
