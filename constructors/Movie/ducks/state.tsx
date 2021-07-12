export interface InitialState {
  search: Search
  detail: Detail
  favorites: Array<any>
}

export interface Search {
  isBuilt: boolean
  data: SearchData
  error: Error
  isLoading: boolean
  form: SearchForm
}

export interface SearchData {
  Response: boolean
  Search: Array<any>
  totalResult: number
}

export interface Error {
  message: string
}

export interface SearchForm {
  query: string
}

export interface Detail {
  modal: string
  data: DetailData
  error: Error
  isLoading: boolean
}

export interface DetailData {
  Actors: string
  Awards: string
  BoxOffice: string
  Country: string
  DVD: string
  Director: string
  Genre: string
  Language: string
  Metascore: string
  Plot: string
  Poster: string
  Production: string
  Rated: string
  Ratings: Array<any>
  Released: string
  Response: string
  Runtime: string
  Title: string
  Type: string
  Website: string
  Writer: string
  Year: string
  imdbID: string
  imdbRating: string
  imdbVotes: string
}


const initialState: InitialState = {
  search: {
    isBuilt: false,
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
