import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestConfig } from '../test.config';  

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  test('should login and logout successfully', async ({ page }) => {
    // Test data
    // const username = 'progmgr20';
    // const password = '​Y4mth@ng!24123';

    let testConfig = new TestConfig();
    const username = testConfig.username;
    const password = testConfig.password;
    const appUrl = testConfig.appUrl;
    
    // Perform login
    await loginPage.performLogin(username, password, appUrl);

    // Perform logout
    await loginPage.performLogout();

    // You can add assertions to verify logout was successful
  });

});