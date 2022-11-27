import React , {useEffect, useState} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/action/product-action";

import Header from "../components/header";
import Footer from "../components/footer";

const ShopPage = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [product, setProduct] = useState([]);

    const loadProduct = () => {
        const url = "https://shop143.herokuapp.com/telebuy/api/products";
        axios.get(url)
          .then((response) => {
            setProduct(response.data);
          })
          .catch((error) => {
            console.log(error)
          })
      }

      useEffect(() => {
        loadProduct();
      }, []);

      const showDetails = (product) => {
        navigate("/product", {state : product});
      }

      const addProduct = (product) => {
        dispatch(addToCart(product));
        alert("Successfully added to the Cart");
      }

  return(
    <div>
      <Header></Header>
      <div class="product-big-title-area">
        <div class="container slider-content">
            <div class="row">
                <div class="col-md-12">
                    <div class="product-bit-title text-center">
                        <h2>Smartphones</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="single-product-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
            <div class="row">
                {
                   product.map((value, index) => {
                    return(
                        <div class="col-md-3 col-sm-6" key={index}>
                            <div class="single-shop-product">
                                <div class="product-upper">
                                    <img src={value.image} alt=""/>
                                </div>
                                <h2><a href="">{value.name}</a></h2>
                                <div class="product-carousel-price">
                                    <ins>{value.discount_price}</ins> <del>{value.actual_price}</del>
                                </div>

                                <div class="product-option-shop">
                                    <a class="add_to_cart_button" onClick={() => addProduct(value)}>Add to cart</a>
                                    <a class="add_to_cart_button" onClick={() => showDetails(value)}>Show details</a>
                                </div>
                            </div>
                        </div>
                    )   
                   }) 
                }
                
                
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="product-pagination text-center">
                        <nav>
                            <ul class="pagination">
                                <li>
                                    <a href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li>
                                    <a href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <Footer></Footer>
    </div>
  )
}

export default ShopPage;