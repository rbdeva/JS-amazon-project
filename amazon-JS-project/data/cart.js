export let cart = [{

  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2,

}, {
  productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}
];

//Above, We created  some default values so that it is easy to understand

//The below function manages the cart

export function addToCart([productId]){

  let matchingItem;
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
        matchingItem=cartItem;
    }

  });

  if(matchingItem){
    matchingItem.quantity+=1;
  }
  else{
   cart.push({
    productId: productId,
    quantity: 1
   });
  }

}
//The below function takes the product id and remove it
/* How?
1. Create a new array
2. Loop through the cart
3. Add each product to the new array , except for this productId
*/
export function removeFromCart(productId){
  const newCart = [];
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
cart = newCart;

}