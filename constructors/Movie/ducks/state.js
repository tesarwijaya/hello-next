const initialState = {
  search: {
    built: false,
    data: {
      Response: false,
      Search: [],
      totalResult: 0,
    },
    error: {
      message: '',
    },
    isLoading: false,
    form: {
      query: '',
    },
  },
  detail: {
    modal: '',
    data: {
      Actors: '',
      Awards: '',
      BoxOffice: '',
      Country: '',
      DVD: '',
      Director: '',
      Genre: '',
      Language: '',
      Metascore: '',
      Plot: '',
      Poster: '',
      Production: '',
      Rated: '',
      Ratings: [],
      Released: '',
      Response: '',
      Runtime: '',
      Title: '',
      Type: '',
      Website: '',
      Writer: '',
      Year: '',
      imdbID: '',
      imdbRating: '',
      imdbVotes: '',
    },
    error: {
      message: '',
    },
    isLoading: false,
  },

  favorites: [],
}

export default initialState
