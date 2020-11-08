import React from 'react'
import wait from 'async-wait-until'

import {
  people,
} from '../ducks/actions'

import Component from '../component'

class Container extends React.Component {
  static async getInitialProps({ store }) {
    await store.dispatch(people({ page: 1 }))

    await wait(() => store.getState().People.people.isBuilt)

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
