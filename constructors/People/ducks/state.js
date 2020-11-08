const initialState = {
  people: {
    isBuilt: false,
    data: {
      count: 0,
      next: null,
      previous: null,
      results: [],
    },
    error: {
      message: '',
    },
    isLoading: false,

    modal: {},
  },

  favorites: [],
}

export default initialState
