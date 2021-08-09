import React from 'react'
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
  return (
    <div className="item-list-container">
      <h1 className="text-center">{greeting}</h1>
    </div>
  )
}

export default ItemListContainer
