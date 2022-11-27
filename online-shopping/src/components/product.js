import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/action/product-action";

const Product = (props) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();


  const showDetails = (product) => {
    navigate("/product", {state : product});
  }

  const addProduct = (product) => {
    dispatch(addToCart(product));
    alert("Successfully added to the Cart");
  }

  return(
    <div className="single-product">
      <div className="product-f-image">
          <img src={props.product.image} alt="" />
          <div className="product-hover">
              <a onClick={() => addProduct(props.product)} className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to
                  cart</a>
              <a onClick={() => showDetails(props.product)} className="view-details-link"><i
                      className="fa fa-link"></i> See details</a>
          </div>
      </div>

      <h2><a href="single-product.html">{props.product.name}</a></h2>

      <div className="product-carousel-price">
          <ins>{props.product.discount_price}</ins> <del>{props.product.actual_price}</del>
      </div>
  </div>
  )
}

export default Product;