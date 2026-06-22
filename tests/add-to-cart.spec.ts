import { test, expect } from '@playwright/test';
import { DashboardPage } from '../src/pages/DashboardPage';
import { LoginPage } from '../src/pages/LoginPage';
import { PRODUCTS } from '../src/data/products';

test('Add product business action should exist', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  const dashboardPage = new DashboardPage(page);

  expect(
    typeof dashboardPage.addProductToCart
  ).toBe('function');
});