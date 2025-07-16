import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginNameInput: Locator;
  readonly loginPasswordInput: Locator;
  readonly loginButton: Locator;
  readonly userProfileText: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginNameInput = page.locator('#loginName');
    this.loginPasswordInput = page.locator('#loginPassword');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.userProfileText = page.getByText('Progmgr20 Program Manager');
    this.logoutLink = page.getByRole('link', { name: 'Log out' });
  }

  async navigateToLoginPage(url: string) {
    await this.page.goto(url);
  }

  async fillLoginCredentials(username: string, password: string) {
    await this.loginNameInput.fill(username);
    await this.loginPasswordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async waitForUserProfile() {
    await this.page.waitForTimeout(5000);
  }

  async clickUserProfile() {
    await this.userProfileText.click();
  }

  async waitBeforeLogout() {
    await this.page.waitForTimeout(1000);
  }

  async clickLogout() {
    await this.logoutLink.click();
  }

  async performLogin(username: string, password: string, url: string) {
    await this.navigateToLoginPage(url);
    await this.fillLoginCredentials(username, password);
    await this.clickLoginButton();
    await this.waitForUserProfile();
  }

  async performLogout() {
    await this.clickUserProfile();
    await this.waitBeforeLogout();
    await this.clickLogout();
  }
}