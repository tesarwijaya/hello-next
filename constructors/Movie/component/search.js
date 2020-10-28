import React from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  Container,
  Col,
  Form,
  Image,
  Modal,
  Row,
  Table,
} from 'react-bootstrap'

import isFavorite from '../../../libs/isFavorite'

function Search({
  detail,
  detailModalClose,
  detailModalHandler,
  favorites,
  favoriteAddHandler,
  favoriteRemoveHandler,
  formHandler,
  search,
  searchHandler,
}) {
  return (
    <>
      <Form onSubmit={searchHandler()}>
        <Form.Row className="justify-content-md-center" style={{ marginTop: 32, marginBottom: 32 }}>
          <Col xs="6">
            <Form.Label htmlFor="inlineFormInput" srOnly>
              Query
            </Form.Label>
            <Form.Control
              placeholder="Search Movie"
              name="query"
              onChange={formHandler()}
              value={search.form.query}
              disabled={search.isLoading}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" disabled={search.isLoading}>
              {search.isLoading ? 'loading...' : 'Search'}
            </Button>
          </Col>
        </Form.Row>
      </Form>
      {search.data.Search.length > 0 && (
      <Table responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>ImDB ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {search.data.Search.map((v) => (
            <tr key={v.imdbID}>
              <td><Button onClick={() => detailModalHandler(v.imdbID)} variant="link">{v.Title}</Button></td>
              <td>{v.Year}</td>
              <td>{v.imdbID}</td>
              <td>
                {isFavorite(favorites, v.imdbID) ? (
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

      <Modal show={!!detail.modal} onHide={() => detailModalClose()} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{detail.isLoading ? 'Loading...' : detail.data.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {detail.isLoading ? 'Loading...' : (
              <>
                <Row>
                  <Col xs="12" md="auto">
                    <Image src={detail.data.Poster} fluid />
                  </Col>
                  <Col>
                    <h5>Year</h5>
                    <p>{detail.data.Year}</p>
                    <h5>Released</h5>
                    <p>{detail.data.Released}</p>
                    <h5>Director</h5>
                    <p>{detail.data.Director}</p>
                    <h5>Actors</h5>
                    <p>{detail.data.Actors}</p>
                    <h5>Plot</h5>
                    <p>{detail.data.Plot}</p>
                    <h5>Awards</h5>
                    <p>{detail.data.Awards}</p>
                  </Col>
                </Row>
              </>
            )}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => detailModalClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

Search.propTypes = {
  detail: PropTypes.shape({
    data: PropTypes.shape({
      Actors: PropTypes.string,
      Awards: PropTypes.string,
      Director: PropTypes.string,
      Poster: PropTypes.string,
      Plot: PropTypes.string,
      Released: PropTypes.string,
      Title: PropTypes.string,
      Year: PropTypes.string,
    }),
    isLoading: PropTypes.bool,
    modal: PropTypes.string,
  }).isRequired,
  detailModalClose: PropTypes.func.isRequired,
  detailModalHandler: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  favoriteAddHandler: PropTypes.func.isRequired,
  favoriteRemoveHandler: PropTypes.func.isRequired,
  formHandler: PropTypes.func.isRequired,
  search: PropTypes.shape({
    data: PropTypes.shape({
      Search: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    form: PropTypes.shape({
      query: PropTypes.string,
    }),
    isLoading: PropTypes.bool,
  }).isRequired,
  searchHandler: PropTypes.func.isRequired,
}

export default Search
