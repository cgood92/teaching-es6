import { fetchAndTransform } from './'

test('fetching SWAPI character and transform', () => {
  const expected = {
    purpose: "EDUCATION",
    version: 1,
    firstMovie: "The Empire Strikes Back",
    home: "Tatooine",
    name: "Luke Skywalker",
    otherMovies: 4,
    url: "http://swapi.co/api/people/1/",
  }
  return fetchAndTransform().then(([result]) => {
    expect(result).toEqual(expected)
  })
})
