import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import {loadCart} from '../data/cart.js'
//import '../data/cart-class.js';
//import  '../data/backend-practice.js'

//Below, we load the products and we wait for products to finish and then we load the cart and we also wait to finish and then run rest of our code.
async function loadPage(){
  //console.log('load page');

  try{

    //throw 'error1';

  await loadProductsFetch();

  const value = await new Promise((resolve, reject) => {
    //throw 'error2';
    loadCart(() => {
      //reject('error3');
      resolve('value3');
    });
  });

  } catch(error) {
    console.log("Unexpected error. Please try again later");
  }
  
  renderOrderSummary();
  renderPaymentSummary();

}
loadPage();


/* 
Promise.all([
  loadProductsFetch(), //fetch, by defauly, creates promises
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/



/*

new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  console.log(value);
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
  }); 

*/



/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
}); //code 10
*/


