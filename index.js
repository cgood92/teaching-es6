import { fetchCharacters } from './lib'

export const fetchAndTransform = () =>
  fetchCharacters()
    .then(() => {
      return [{}]
    })
