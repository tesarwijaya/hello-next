import {
  PEOPLE,
  PEOPLE_FAILED,
  PEOPLE_SUCCESS,
  PEOPLE_MODAL,

  PEOPLE_FAVORITE_ADD,
  PEOPLE_FAVORITE_REMOVE,
} from './reducer'

export function people(data) {
  return {
    type: PEOPLE,
    payload: { data },
  }
}

export function peopleFailed(error) {
  return {
    type: PEOPLE_FAILED,
    payload: { error },
  }
}

export function peopleSuccess(data) {
  return {
    type: PEOPLE_SUCCESS,
    payload: { data },
  }
}

export function peopleFavoriteAdd(data) {
  return {
    type: PEOPLE_FAVORITE_ADD,
    payload: { data },
  }
}

export function peopleFavoriteRemove(data) {
  return {
    type: PEOPLE_FAVORITE_REMOVE,
    payload: { data },
  }
}

export function peopleModal(data) {
  return {
    type: PEOPLE_MODAL,
    payload: { data },
  }
}
