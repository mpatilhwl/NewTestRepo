import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa1.hwlmsp.com');
  await page.locator('#loginName').fill('progmgr20');
  await page.locator('#loginPassword').fill('​Y4mth@ng!24123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(5000);
  await page.getByText('Progmgr20 Program Manager').click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Log out' }).click();
  
});