/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];
let totalPaid = 0;

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const product1 = {
  name: 'cherry',
  price: 4,
  quantity: 0,
  productId: 1,
  image: '../images/cherry.jpg'
};

const product2 = {
  name: 'strawberry',
  price: 5,
  quantity: 0,
  productId: 2,
  image: '../images/strawberry.jpg'
};

const product3 = {
  name: 'orange',
  price: 10,
  quantity: 0,
  productId: 3,
  image: '../images/orange.jpg'
};

products.push(product1);
products.push(product2);
products.push(product3);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  if (productId === 1) {

    if (cart.includes(product1)) {
      // increase product quantity here
      product1.quantity++;
    } else {
      product1.quantity = 1;
      cart.push(product1);
    }

  } else if (productId === 2) {

    if (cart.includes(product2)) {
      // increase product quantity here
      product2.quantity++;
    } else {
      product2.quantity = 1;
      cart.push(product2);
    }

  } else if (productId === 3) {

    if (cart.includes(product3)) {
      // increase product quantity here
      product3.quantity++;
    } else {
      product3.quantity = 1;
      cart.push(product3);
    }

  }

}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  switch (productId) {
    case 1:
      product1.quantity++;
      break;
    case 2:
      product2.quantity++;
      break;
    case 3:
      product3.quantity++;
      break;
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {

  switch (productId) {
    case 1:
      product1.quantity--;
      if (product1.quantity === 0) {
        const productIndex = cart.findIndex(product => product.productId === productId);
        cart.splice(productIndex, 1);
      }
      break;
    case 2:
      product2.quantity--;
      if (product2.quantity === 0) {
        const productIndex = cart.findIndex(product => product.productId === productId);
        cart.splice(productIndex, 1);
      }
      break;
    case 3:
      product3.quantity--;
      if (product3.quantity === 0) {
        const productIndex = cart.findIndex(product => product.productId === productId);
        cart.splice(productIndex, 1);
      }
      break;
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  const productIndex = cart.findIndex(product => product.productId === productId);
  switch (productId) {
    case 1:
      product1.quantity = 0;
      cart.splice(productIndex, 1);
      break;
    case 2:
      product2.quantity = 0;
      cart.splice(productIndex, 1);
      break;
    case 3:
      product3.quantity = 0;
      cart.splice(productIndex, 1);
      break;
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal() {
  let productCost = 0;
  let totalCost = 0;
  cart.forEach(item => {
    productCost = item.quantity * item.price;
    totalCost = totalCost + productCost;
  });
  return totalCost;
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart = [];
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

function pay(amount) {
  totalPaid = totalPaid + amount;
  const remainingBalance = cartTotal() - totalPaid;
  if (remainingBalance === 0) {
    cart = [];
    totalPaid = 0;
    return remainingBalance;
  } else if (remainingBalance > 0) {
    return -Math.abs(remainingBalance);
  } else {
    return Math.abs(remainingBalance);
  }
}



/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
