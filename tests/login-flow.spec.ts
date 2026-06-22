import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { DashboardPage } from '../src/pages/DashboardPage';
import { TestDataLoader } from '../src/utils/TestDataLoader';

const loginData = TestDataLoader.load<any>('login-data.json');

test('User should login successfully', async ({ page }) => {

  console.log('AI Test Data Email:', loginData.validUsers[0].email);

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.navigate();

  await loginPage.login(
    loginData.validUsers[0].email,
    loginData.validUsers[0].password
  );

  // Debug Section
  await page.waitForTimeout(5000);

  console.log('Current URL:', page.url());

  await page.screenshot({
    path: 'after-login.png',
    fullPage: true
  });

  const isLoaded = await dashboardPage.isDashboardLoaded();

  expect(isLoaded).toBeTruthy();
});