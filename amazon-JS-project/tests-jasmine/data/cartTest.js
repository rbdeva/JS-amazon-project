import {addToCart, cart, loadFromStorage} from "../../data/cart.js";


describe('test suite: addToCart', () => {
  it('adds an existing product to the cart', () => {


  });

  it('adds a new product to the cart', () => {
    spyOn(localStorage, 'setItem').and.callFake(() => {
      return parseFloat.JSON
    });

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);  
    });
    console.log(localStorage.getItem('cart')); // []
    loadFromStorage();
    //Here, we mock localStorage.getItem  first into an emprty array and then we reload the cart. so now cart will be empty

    

    //adding one product to the cart
    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
  });

});