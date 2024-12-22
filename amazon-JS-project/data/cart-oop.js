function Cart(localStorageKey){
  const cart = {
    //property: value
    //cart: undefined;
   cartItems: undefined,
    
    //loadFromStorage: function(){ - shotcut for the beolowline code
    loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
    
    if (!this.cartItems) {
      this.cartItems = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
      }];
    }
    },

      //function saveToStorage() {
      //saveToStorage: function(){ - shotcut for the beolowline code
      saveToStorage(){
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },

    //export function addToCart(productId){
    //addToCart(productId): function{ - shotcut for the beolowline code
    addToCart(productId){
      let matchingItem;
    
      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
    
      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        this.cartItems.push({
          productId: productId,
          quantity: 1,
          deliveryOptionId: '1'
        });
      }
    
      this.saveToStorage();
    },
    
    //export function removeFromCart(productId) {
    //removeFromCart(productId): function(){
    removeFromCart(productId) {
      const newCart = [];
    
      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });
    
      this.cartItems = newCart;
    
      this.saveToStorage();
    },

    //export function updateDeliveryOption(productId, deliveryOptionId) {
    //
    updateDeliveryOption(productId, deliveryOptionId){
      let matchingItem;
    
      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
    
      matchingItem.deliveryOptionId = deliveryOptionId;
    
      this.saveToStorage();
    }

};
  return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');


cart.loadFromStorage();


businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);












