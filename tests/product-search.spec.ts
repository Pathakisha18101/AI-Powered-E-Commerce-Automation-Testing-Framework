import { test, expect } from '@playwright/test';
import { DashboardPage } from '../src/pages/DashboardPage';
import { LoginPage } from '../src/pages/LoginPage';

test('Should retrieve product names from dashboard', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  const dashboardPage = new DashboardPage(page);

  const products = await dashboardPage.getAllProductNames();

  expect(products).toBeDefined();
});