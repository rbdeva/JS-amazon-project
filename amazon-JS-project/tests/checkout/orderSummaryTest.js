import {renderOrderSummary} from '../../scripts/checkout/orderSummary.js';
import {addToCart, cart, loadFromStorage} from "../../data/cart.js";
import {loadProducts} from '../../data/proucts.js';


describe('test suite: renderOrderSummary', () => {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 =  '15b6fc6f-327a-4ec4-896f-486349e85a3d';

  beforeAll((done) => {
    loadProducts( () => {
      done();
    });
  });
  beforeEach(() => {
    spyOn(localStorage, 'setItem');

    document.querySelector('.js-test-container').innerHTML = 
    `
      <div class="js-order-summary"></div>
      <div class="js-payment-summary" ></div>
    
    `;

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: productId1,
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: productId2,
        quantity: 1,
        deliveryOptionId: '2'
      }]);  
    });
    loadFromStorage();
    
    renderOrderSummary();
  });

  it('displays the cart', () => {
    
    //Out cart has 2 items so we are checking whether we have 2 containers or not
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(2);
    expect(
      document.querySelector(`.js-product-quantity-${productId1}`).innerText
    ).toContain('Quantity: 2');
    expect(
      document.querySelector(`.js-product-quantity-${productId2}`).innerText
    ).toContain('Quantity: 1');

    //HTML Taking lot of space, so we are removing HTML after out tests
    document.querySelector('.js-test-container').innerHTML = '';
  });

  it('Removes a product', () => {
    
    document.querySelector(`.js-delete-link-${productId1}`).click();
    //After delete the product we expect to have only one element in the page
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(1);
    //As we deleted this product we expect this to be null
    expect(
      document.querySelector(`.js-cart-item-container-${productId1}`)
    ).toEqual(null);
    //Product 2 is not deleted soit shold not be null
    expect(
      document.querySelector(`.js-cart-item-container-${productId2}`)
    ).not.toEqual(null);
    //is cart array updating?
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(productId2);

    //Just a clean up at the end of each tests 
    document.querySelector('.js-test-container').innerHTML = '';

  });

});