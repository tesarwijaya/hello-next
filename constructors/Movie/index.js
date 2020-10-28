import { connect } from 'react-redux'

import Container from './container'

import {
  movieSearch,
  movieSearchForm,

  movieSearchFavoriteAdd,
  movieSearchFavoriteRemove,

  movieSearchDetailModal,
  movieSearchDetail,
} from './ducks/actions'

function mapStateToProps(state) {
  return {
    search: state.Movie.search,
    detail: state.Movie.detail,
    favorites: state.Movie.favorites,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchHandler() {
      return (e) => {
        e.preventDefault()

        dispatch(movieSearch())
      }
    },
    formHandler() {
      return (e) => {
        dispatch(movieSearchForm(e.target.name, e.target.value))
      }
    },
    detailModalHandler(data) {
      dispatch(movieSearchDetailModal(data))
      dispatch(movieSearchDetail())
    },
    detailModalClose() {
      dispatch(movieSearchDetailModal(''))
    },
    favoriteAddHandler(data) {
      return () => {
        dispatch(movieSearchFavoriteAdd(data))
      }
    },
    favoriteRemoveHandler(data) {
      return () => {
        dispatch(movieSearchFavoriteRemove(data))
      }
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container)
