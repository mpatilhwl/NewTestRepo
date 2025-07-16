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

    // Verify login was successful (you can add assertions here)
    // await expect(loginPage.userProfileText).toBeVisible();

    // Perform logout
    await loginPage.performLogout();

    // You can add assertions to verify logout was successful
  });

  // test('should fill login credentials correctly', async ({ page }) => {
  //   const username = 'progmgr20';
  //   const password = '​Y4mth@ng!24123';

  //   await loginPage.navigateToLoginPage();
  //   await loginPage.fillLoginCredentials(username, password);

  //   // Verify credentials are filled
  //   await expect(loginPage.loginNameInput).toHaveValue(username);
  //   await expect(loginPage.loginPasswordInput).toHaveValue(password);
  // });

  // test('should navigate to login page successfully', async ({ page }) => {
  //   await loginPage.navigateToLoginPage();
    
  //   // Verify page navigation
  //   await expect(page).toHaveURL('https://qa1.hwlmsp.com');
  //   await expect(loginPage.loginNameInput).toBeVisible();
  //   await expect(loginPage.loginPasswordInput).toBeVisible();
  //   await expect(loginPage.loginButton).toBeVisible();
  // });
});