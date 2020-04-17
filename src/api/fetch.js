export function fetchData () {
  return fetch('https://corona.lmao.ninja/v2/countries')
    .then((res) => res.json())
    .then((data) => {
      if (!data) {
        throw new Error()
      }
      return data
    })
}
