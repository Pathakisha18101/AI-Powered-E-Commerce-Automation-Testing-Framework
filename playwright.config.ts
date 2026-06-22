import { defineConfig } from '@playwright/test';
import { ENV } from './src/config/env';

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  expect: {
    timeout: 5000
  },

  use: {
    headless: true,
    viewport: {
      width: 1366,
      height: 768
    },
    actionTimeout: 10000,
    baseURL: ENV.baseUrl,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  }
});