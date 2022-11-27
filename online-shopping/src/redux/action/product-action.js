export function addToCart(product){
  return{
    type : "ADD_TO_CART",
    value: product
  }
}