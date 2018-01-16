export function fetchData() {
  return fetch('https://overwatch-api.net/api/v1/hero')
    .then(response => response.json())
}