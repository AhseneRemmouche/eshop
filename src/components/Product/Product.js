import React from 'react'
import './Product.css'

function Product({ id, title, image, price, rating, style }) {
  function addTobasket() {
    console.log('button clicked')
  }
  return (
    <div className='product' id={id} style={style}>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small>$</small>
          <strong>{price}</strong>
          <div>
            <p>{rating}⭐</p>
          </div>
        </p>
      </div>
      <img src={image} />
      <button onClick={addTobasket}>Add to Basket</button>
    </div>
  )
}

export default Product