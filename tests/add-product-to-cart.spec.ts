import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { DashboardPage } from '../src/pages/DashboardPage';
import { CartPage } from '../src/pages/CartPage';
import { USERS } from '../src/data/users';

test('User should add product to cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const cartPage = new CartPage(page);

  await loginPage.navigate();

  await loginPage.login(
    USERS.validUser.email,
    USERS.validUser.password
  );

  await dashboardPage.addProductToCart(
    'ZARA COAT 3'
  );

  await page.waitForTimeout(3000);

  await dashboardPage.goToCart();

  await page.waitForTimeout(3000);

  console.log('Cart URL:', page.url());

  const cartProducts =
    await page.locator('.cartSection h3').allTextContents();

  console.log('Cart Products:', cartProducts);

  const isPresent = await cartPage.isProductPresent(
    'ZARA COAT 3'
  );

  expect(isPresent).toBeTruthy();

});