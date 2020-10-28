import React from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'

import Favorite from './favorite'
import Search from './search'

function Movie(props) {
  return (
    <Container>
      <Tabs defaultActiveKey="search" style={{ marginTop: 32 }}>
        <Tab eventKey="search" title="Search">
          <Search {...props} />
        </Tab>
        <Tab eventKey="favorite" title="My Favorite">
          <Favorite {...props} />
        </Tab>
      </Tabs>
    </Container>
  )
}

export default Movie
