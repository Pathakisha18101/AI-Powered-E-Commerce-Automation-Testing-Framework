import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { DashboardPage } from '../src/pages/DashboardPage';
import { USERS } from '../src/data/users';

test('Product should be available after login', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.navigate();

  await loginPage.login(
    USERS.validUser.email,
    USERS.validUser.password
  );

  const count = await dashboardPage.getProductCount();

  console.log('Product Count:', count);

  const products = await dashboardPage.getAllProductNames();

  console.log('Products Found:');
  console.log(products);

  const isAvailable = await dashboardPage.isProductAvailable(
    'ZARA COAT 3'
  );

  expect(isAvailable).toBeTruthy();
});