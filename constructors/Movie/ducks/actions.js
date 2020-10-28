import {
  MOVIE_SEARCH,
  MOVIE_SEARCH_FAILED,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FORM,

  MOVIE_SEARCH_FAVORITE_ADD,
  MOVIE_SEARCH_FAVORITE_REMOVE,

  MOVIE_SEARCH_DETAIL,
  MOVIE_SEARCH_DETAIL_FAILED,
  MOVIE_SEARCH_DETAIL_MODAL,
  MOVIE_SEARCH_DETAIL_SUCCESS,
} from './reducer'

export function movieSearch() {
  return {
    type: MOVIE_SEARCH,
  }
}

export function movieSearchFailed(error) {
  return {
    type: MOVIE_SEARCH_FAILED,
    payload: { error },
  }
}

export function movieSearchSuccess(data) {
  return {
    type: MOVIE_SEARCH_SUCCESS,
    payload: { data },
  }
}

export function movieSearchForm(meta, data) {
  return {
    type: MOVIE_SEARCH_FORM,
    payload: { meta, data },
  }
}

export function movieSearchFavoriteAdd(data) {
  return {
    type: MOVIE_SEARCH_FAVORITE_ADD,
    payload: { data },
  }
}

export function movieSearchFavoriteRemove(data) {
  return {
    type: MOVIE_SEARCH_FAVORITE_REMOVE,
    payload: { data },
  }
}

export function movieSearchDetail() {
  return {
    type: MOVIE_SEARCH_DETAIL,
  }
}

export function movieSearchDetailFailed(error) {
  return {
    type: MOVIE_SEARCH_DETAIL_FAILED,
    payload: { error },
  }
}

export function movieSearchDetailModal(data) {
  return {
    type: MOVIE_SEARCH_DETAIL_MODAL,
    payload: { data },
  }
}

export function movieSearchDetailSuccess(data) {
  return {
    type: MOVIE_SEARCH_DETAIL_SUCCESS,
    payload: { data },
  }
}
