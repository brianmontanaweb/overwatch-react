export function fetchData(url) {
  return fetch(`https://overwatch-api.net/api/v1/${url}`)
    .then(response => response.json())
}