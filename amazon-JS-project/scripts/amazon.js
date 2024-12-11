import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';



/* To combine html together */
let productsHTML = ' ';
/* Here forEach takes each object and save it into parameter called product and runs the function */


products.forEach((product) => {
  productsHTML = productsHTML + `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
          <!-- toFixed() convert a number into string and inside brackets we have to place how many digits we want -->
            $${(product.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
           data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`;
});


document.querySelector('.js-products-grid').innerHTML = productsHTML;


function updateCardQuantity(){

  
  //Upating quantity to make cart button interactive on top right

  let cartQuantity = 0; //to count the cart quantity
          cart.forEach((cartItem) => {
            cartQuantity += cartItem.quantity;
          });


          document.querySelector('.js-cart-quantity')
            .innerHTML = cartQuantity;

}



/* We selected all the add to cart button from the page using querySelectorAll and used forEach to loop to all add to cart buttons*/
document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
          const productId = button.dataset.productId;
           /*data-product-id converted to productId. kebab case to camel case  */

           addToCart(productId);
           updateCardQuantity()
                     
        });
    });

