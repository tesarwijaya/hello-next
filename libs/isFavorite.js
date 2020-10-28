function isFavorite(favorites, id) {
  return !!favorites.filter((v) => v.imdbID === id).length
}

export default isFavorite
