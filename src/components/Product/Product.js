import React from 'react'
import './Product.css'

function Product({ id, title, image, price, rating }) {
  function addTobasket() {
    console.log('button clicked')
  }
  return (
    <div className='product' id={id}>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating).fill().map((_, i) => {
            return <p>⭐</p>
          })}

        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={addTobasket}>Add to Basket</button>
    </div>
  )
}

export default Product