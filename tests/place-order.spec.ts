import { test, expect } from '@playwright/test';

import { LoginPage } from '../src/pages/LoginPage';
import { DashboardPage } from '../src/pages/DashboardPage';
import { CartPage } from '../src/pages/CartPage';
import { CheckoutPage } from '../src/pages/CheckoutPage';
import { OrderConfirmationPage } from '../src/pages/OrderConfirmationPage';

import { USERS } from '../src/data/users';


test('User should place order successfully', async ({ page }) => {


  const loginPage = new LoginPage(page);

  const dashboardPage = new DashboardPage(page);

  const cartPage = new CartPage(page);

  const checkoutPage = new CheckoutPage(page);

  const orderConfirmationPage =
    new OrderConfirmationPage(page);



  // Login

  await loginPage.navigate();


  await loginPage.login(
    USERS.validUser.email,
    USERS.validUser.password
  );



  // Add Product

  await dashboardPage.addProductToCart(
    'ZARA COAT 3'
  );



  // Go To Cart

  await dashboardPage.goToCart();



  // Validate Product In Cart

  const isPresent =
    await cartPage.isProductPresent(
      'ZARA COAT 3'
    );


  expect(isPresent).toBeTruthy();



  // Checkout

  await cartPage.proceedToCheckout();



  // Select Country

  await checkoutPage.selectCountry(
    'India'
  );



  // Place Order

  await checkoutPage.placeOrder();



  // Order Confirmation Validation


  const successMessage =
    await orderConfirmationPage.getSuccessMessage();


  console.log(
    'Success Message:',
    successMessage
  );


  expect(
  successMessage.toLowerCase()
).toContain(
  'thankyou for the order'
);


  const orderId =
    await orderConfirmationPage.getOrderId();


  console.log(
    'Order ID:',
    orderId
  );


  expect(orderId).not.toBe('');

});