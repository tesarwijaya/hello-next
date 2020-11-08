import { connect } from 'react-redux'

import Container from './container'

import {
  people,

  peopleFavoriteAdd,
  peopleFavoriteRemove,

  peopleModal,
} from './ducks/actions'

function mapStateToProps(state) {
  return {
    data: state.People.people.data,
    modal: state.People.people.modal,
    favorites: state.People.favorites,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    people(data) {
      return (e) => {
        e.preventDefault()

        dispatch(people(data))
      }
    },
    modalHandler(data) {
      dispatch(peopleModal(data))
    },
    modalClose() {
      dispatch(peopleModal({}))
    },
    favoriteAddHandler(data) {
      return () => {
        dispatch(peopleFavoriteAdd(data))
      }
    },
    favoriteRemoveHandler(data) {
      return () => {
        dispatch(peopleFavoriteRemove(data))
      }
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container)
