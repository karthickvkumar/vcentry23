import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import { useSelector } from "react-redux";

const CartPage = () => {

  const product = useSelector((state) => state.ProductReducer.product);


  return(
    <div>
      <Header></Header>
      <div class="product-big-title-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="product-bit-title text-center">
                        <h2>Shopping Cart</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="single-product-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
            <div class="row">


                <div class="col-md-12">
                    <div class="product-content-right">
                        <div class="woocommerce">
                            <form method="post" action="#">
                                <table cellspacing="0" class="shop_table cart">
                                    <thead>
                                        <tr>
                                            <th class="product-remove">&nbsp;</th>
                                            <th class="product-thumbnail">&nbsp;</th>
                                            <th class="product-name">Product</th>
                                            <th class="product-price">Price</th>
                                            <th class="product-quantity">Quantity</th>
                                            <th class="product-subtotal">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            product.map((value, index) => {
                                                return(
                                                    <tr class="cart_item">
                                            <td class="product-remove">
                                                <a title="Remove this item" class="remove" href="#">×</a>
                                            </td>

                                            <td class="product-thumbnail">
                                                <a href="single-product.html"><img width="145" height="145"
                                                        alt="poster_1_up" class="shop_thumbnail"
                                                        src={value.image}/></a>
                                            </td>

                                            <td class="product-name">
                                                <a href="single-product.html">{value.name}</a>
                                            </td>

                                            <td class="product-price">
                                                <span class="amount">{value.actual_price}</span>
                                            </td>

                                            <td class="product-quantity">
                                                <div class="quantity buttons_added">
                                                    <input type="button" class="minus" value="-"/>
                                                    <input type="number" size="4" class="input-text qty text"
                                                        title="Qty" value="1" min="0" step="1"/>
                                                    <input type="button" class="plus" value="+"/>
                                                </div>
                                            </td>

                                            <td class="product-subtotal">
                                                <span class="amount">{value.actual_price}</span>
                                            </td>
                                        </tr>
                                                )
                                            })
                                        }
                                        
                                        <tr>
                                            <td class="actions" colspan="6">
                                                <div class="coupon">
                                                    <label for="coupon_code">Coupon:</label>
                                                    <input type="text" placeholder="Coupon code" value=""
                                                        id="coupon_code" class="input-text" name="coupon_code"/>
                                                    <input type="submit" value="Apply Coupon" name="apply_coupon"
                                                        class="button"/>
                                                </div>
                                                <input type="submit" value="Update Cart" name="update_cart"
                                                    class="button"/>
                                                <input type="submit" value="Checkout" name="proceed"
                                                    class="checkout-button button alt wc-forward"/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>

                            <div class="cart-collaterals">





                                <div class="cart_totals ">
                                    <h2>Cart Totals</h2>

                                    <table cellspacing="0">
                                        <tbody>
                                            <tr class="cart-subtotal">
                                                <th>Cart Subtotal</th>
                                                <td><span class="amount">£15.00</span></td>
                                            </tr>

                                            <tr class="shipping">
                                                <th>Shipping and Handling</th>
                                                <td>Free Shipping</td>
                                            </tr>

                                            <tr class="order-total">
                                                <th>Order Total</th>
                                                <td><strong><span class="amount">£15.00</span></strong> </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>





                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <Footer></Footer>
    </div>
  )
}

export default CartPage;