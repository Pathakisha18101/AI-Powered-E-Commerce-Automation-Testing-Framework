import { test, expect } from '@playwright/test';
import { DashboardPage } from '../src/pages/DashboardPage';
import { LoginPage } from '../src/pages/LoginPage';

test('Dashboard page object should initialize', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  await expect(loginPage.loginButton).toBeVisible();

  const dashboardPage = new DashboardPage(page);

  expect(dashboardPage).toBeDefined();
});