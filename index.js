import { fetchCharacters } from './lib'

const base = {
  version: 1,
  purpose: 'EDUCATION',
}

export const fetchAndTransform = () =>
  fetchCharacters()
    .then(({ results }) =>
      results.map(({ name, homeworld: home, url, films: [firstMovie, ...otherMovies] }) =>
        ({
          ...base,
          name,
          home,
          url,
          firstMovie,
          otherMovies: otherMovies.length,
        })
      )
    )
