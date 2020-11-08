import React from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  Container,
  Col,
  Modal,
  Row,
  Table,
} from 'react-bootstrap'

function isFavorite(favorites, url) {
  return !!favorites.filter((v) => v.url === url).length
}

function Search({
  modal,
  modalHandler,
  modalClose,
  favorites,
  favoriteAddHandler,
  favoriteRemoveHandler,
  data,
}) {
  return (
    <>
      {data.results.length > 0 && (
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair Color</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.results.map((v, i) => (
            <tr key={i.toString()}>
              <td><Button onClick={() => modalHandler(v)} variant="link">{v.name}</Button></td>
              <td>{v.height}</td>
              <td>{v.mass}</td>
              <td>{v.hair_color}</td>
              <td>
                {isFavorite(favorites, v.url) ? (
                  <Button variant="outline-danger" onClick={favoriteRemoveHandler(v)}>Remove from My Favorite</Button>
                ) : (
                  <Button variant="outline-primary" onClick={favoriteAddHandler(v)}>Add to My Favorite</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      )}

      <Modal show={Object.keys(modal).length} onHide={() => modalClose()} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modal.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <h5>Name</h5>
                <p>{modal.name}</p>
                <h5>Height</h5>
                <p>{modal.height}</p>
                <h5>Mass</h5>
                <p>{modal.mass}</p>
                <h5>Hair Color</h5>
                <p>{modal.hair_color}</p>
                <h5>Skin Color</h5>
                <p>{modal.skin_color}</p>
                <h5>Eye Color</h5>
                <p>{modal.eye_color}</p>
                <h5>Birth Year</h5>
                <p>{modal.birth_year}</p>
                <h5>Gender</h5>
                <p>{modal.gender}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => modalClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

Search.propTypes = {
  modal: PropTypes.shape({
    name: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair_color: PropTypes.string,
    skin_color: PropTypes.string,
    eye_color: PropTypes.string,
    birth_year: PropTypes.string,
    gender: PropTypes.string,
  }).isRequired,
  modalHandler: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  favoriteAddHandler: PropTypes.func.isRequired,
  favoriteRemoveHandler: PropTypes.func.isRequired,
  data: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
}

export default Search
