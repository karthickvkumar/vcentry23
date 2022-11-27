import React, {useEffect, useState} from "react";

import axios from "axios";
import { Slide } from 'react-slideshow-image';

import Header from "../components/header";
import Footer from "../components/footer";
import Product from "../components/product";
import ProductPreview from "../components/product-preview";

import 'react-slideshow-image/dist/styles.css';

const HomePage = () => {

    const [latestProduct, setLatestProduct] = useState([]);
    const [productPreview, setProductPreview] = useState({
        recentlyViewed : [],
        topNew : [],
        topSelling : []
      });

    const loadLatestProduct = () => {
        const url = "https://shop143.herokuapp.com/telebuy/api/products/latest";

        axios.get(url)
            .then((response) => {
                setLatestProduct(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert("Something went wrong, pls try again later");
            })
    }

    const loadRecentProduct = () => {
        const url = "https://shop143.herokuapp.com/telebuy/api/product/preview";
        axios.get(url)
        .then((response) => {
            setProductPreview(response.data);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        loadLatestProduct();
        loadRecentProduct();
    }, [])

    const images = [
        require("../images/h4-slide.png"),
        require("../images/h4-slide2.png"),
        require("../images/h4-slide3.png"),
        require("../images/h4-slide4.png"),  
    ];

  return(
    <div>
     <Header></Header>
      <div className="slider-content">
        <Slide>
              <div className="each-slide-effect">
                  <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <div className="caption-group">
                        <h2 className="caption title">
                            iPhone <span className="primary">6 <strong>Plus</strong></span>
                        </h2>
                        <h4 className="caption subtitle">Dual SIM</h4>
                        <a className="caption button-radius" href="#"><span className="icon"></span>Shop now</a>
                    </div>
                  </div>
              </div>
              <div className="each-slide-effect">
                  <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <div className="caption-group">
                          <h2 className="caption title">
                              by one, get one <span className="primary">50% <strong>off</strong></span>
                          </h2>
                          <h4 className="caption subtitle">school supplies & backpacks.*</h4>
                          <a className="caption button-radius" href="#"><span className="icon"></span>Shop now</a>
                      </div>
                  </div>
              </div>
              <div className="each-slide-effect">
                  <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                  <div className="caption-group">
                        <h2 className="caption title">
                            Apple <span className="primary">Store <strong>Ipod</strong></span>
                        </h2>
                        <h4 className="caption subtitle">Select Item</h4>
                        <a className="caption button-radius" href="#"><span className="icon"></span>Shop now</a>
                    </div>
                  </div>
              </div>
              <div className="each-slide-effect">
                  <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                  <div className="caption-group">
                        <h2 className="caption title">
                            Apple <span className="primary">Store <strong>Ipod</strong></span>
                        </h2>
                        <h4 className="caption subtitle">& Phone</h4>
                        <a className="caption button-radius" href="#"><span className="icon"></span>Shop now</a>
                    </div>
                  </div>
              </div>
          </Slide>
      </div>

      <div className="maincontent-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="latest-product">
                        <h2 className="section-title">Latest Products</h2>
                        <div className="product-carousel">
                            {
                            latestProduct.map((value, index) => {
                                return(
                                    <Product product={value} key={index}></Product>
                                )
                            })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Promo Section */}
    <div className="promo-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="single-promo promo1">
                        <i className="fa fa-refresh"></i>
                        <p>30 Days return</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-promo promo2">
                        <i className="fa fa-truck"></i>
                        <p>Free shipping</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-promo promo3">
                        <i className="fa fa-lock"></i>
                        <p>Secure payments</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-promo promo4">
                        <i className="fa fa-gift"></i>
                        <p>New products</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Recent Section */}
    <div className="product-widget-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="single-product-widget">
                        <h2 className="product-wid-title">Top Sellers</h2>
                        <a href="" className="wid-view-more">View All</a>
                        
                        {
                            productPreview.topSelling.map((value, index) => {
                                return(
                                    <ProductPreview product={value} key={index}></ProductPreview>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-product-widget">
                        <h2 className="product-wid-title">Recently Viewed</h2>
                        <a href="#" className="wid-view-more">View All</a>
                        {
                            productPreview.recentlyViewed.map((value, index) => {
                                return(
                                    <ProductPreview product={value} key={index}></ProductPreview>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-product-widget">
                        <h2 className="product-wid-title">Top New</h2>
                        <a href="#" className="wid-view-more">View All</a>
                        {
                            productPreview.topNew.map((value, index) => {
                                return(
                                    <ProductPreview product={value} key={index}></ProductPreview>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default HomePage;