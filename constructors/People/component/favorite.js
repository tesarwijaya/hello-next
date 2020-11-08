import React from 'react'
import PropTypes from 'prop-types'
import { Button, Table } from 'react-bootstrap'

function isFavorite(favorites, url) {
  return !!favorites.filter((v) => v.url === url).length
}

function Favorite({
  modalHandler,
  favorites,
  favoriteAddHandler,
  favoriteRemoveHandler,
}) {
  return (
    <Table responsive style={{ marginTop: 32, marginBottom: 32 }}>
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
        {favorites.length > 0 ? (
          favorites.map((v, i) => (
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
          ))
        ) : (
          <tr>
            <td colSpan="5" style={{ textAlign: 'center' }}>
              You dont have Favorite Character
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

Favorite.propTypes = {
  modalHandler: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  favoriteAddHandler: PropTypes.func.isRequired,
  favoriteRemoveHandler: PropTypes.func.isRequired,
}

export default Favorite
