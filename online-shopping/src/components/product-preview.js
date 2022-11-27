import React from "react";

const ProductPreview = (props) => {
  return(
    <div className="single-wid-product">
      <a href="single-product.html"><img src={props.product.image} alt=""
              className="product-thumb"/></a>
      <h2><a href="single-product.html">{props.product.name}</a></h2>
      <div className="product-wid-rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
      </div>
      <div className="product-wid-price">
      <ins>{props.product.discount_price}</ins> <del>{props.product.actual_price}</del>
      </div>
  </div>
  )
}

export default ProductPreview;