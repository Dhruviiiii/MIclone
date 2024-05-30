import React from 'react'
import ProductReviewCard from './ProductReviewCard.js'
import '../styles/ProductReview.css'

const ProductReview = ({ProductReview}) => {
  return (
    <div className='Productreviews'>
        {ProductReview.map((item,index)=>(
        <ProductReviewCard key={item.image} price={item.price} name={item.name} image={item.image} index={index} review={item.review}/>
        ))}
      
    </div>
  )
}

export default ProductReview
