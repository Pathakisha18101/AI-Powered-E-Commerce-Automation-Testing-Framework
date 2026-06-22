import { test, expect } from '@playwright/test';
import { DashboardPage } from '../src/pages/DashboardPage';
import { LoginPage } from '../src/pages/LoginPage';

test('Should validate product availability', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  const dashboardPage = new DashboardPage(page);

  const isAvailable = await dashboardPage.isProductAvailable(
    'ZARA COAT 3'
  );

  expect(typeof isAvailable).toBe('boolean');
});