export const getQueryParamsFromUrl = (query: string): string | null => {
  return new URLSearchParams(window.location.search).get(query)
}
