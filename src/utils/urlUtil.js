export const getQueryParamsFromUrl = (query) => {
  return new URLSearchParams(window.location.search).get(query)
}
