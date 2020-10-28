import React from 'react'
import wait from 'async-wait-until'

import {
  movieSearch,
  movieSearchForm,
} from '../ducks/actions'

import Component from '../component'

class Container extends React.Component {
  static async getInitialProps({ store }) {
    await store.dispatch(movieSearchForm('query', 'hulk'))

    await store.dispatch(movieSearch())

    console.log('sss: ', store.getState())

    await wait(() => {
      return store.getState().Movie.search.built === true
    })

    return {}
  }
  componentDidMount() {}

  render() {
    return (
      <Component {...this.props} />
    )
  }
}

export default Container
