import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa2.hwlmsp.com/user/loggedOut?referrer=%2F&loginName=&statusCode=401&softSSOMessage=');
  await page.locator('#loginName').fill('progmgr20');
  await page.locator('#loginPassword').fill('Y4mth@ng!24');
  await page.getByRole('button', { name: 'Login' }).click();
 
  await page.locator('.nice-select.select-box.add-select.input__field.input__field--hoshi.custom-select')
.click();
  await page.getByRole('listitem').filter({ hasText: 'AP and Physician' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: 'Requisitions' }).click();
  await page.getByRole('link', { name: 'Create Requisition' }).click();
  await page.locator('#locHospitalId div').click();
  await page.getByRole('listitem').filter({ hasText: 'Advent Health Care Center,' }).click();
  await page.locator('span').filter({ hasText: 'Admin NC Allied Support (CC' }).locator('div').click();
  await page.getByRole('listitem').filter({ hasText: 'Cardiology (AAAA Cost Center)' }).click();
  await page.locator('span').filter({ hasText: 'Anesthesiologist (Physician)' }).getByRole('button').click();
  await page.locator('#addTemplateForm').getByText('Cardiologist (Physician)', { exact: true }).nth(1).click();
  await page.locator('#contractStartDate').click();
  await page.locator('#requisitionNumber').click();
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.locator('#contractEndDate').click();
  await page.getByRole('link', { name: '31' }).click();
  await page.getByRole('link', { name: 'Select Contract Type *' }).click();
  await page.locator('#contTypeSel_235').check();
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.locator('div').filter({ hasText: /^FMLAFull-Time VacancyPart timeProgram ConversionVacation Coverage$/ }).click();
  await page.getByRole('listitem').filter({ hasText: 'FMLA' }).click();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByRole('checkbox', { name: 'Select All' }).check();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByRole('row', { name: 'Orientation1 Fixed Fixed' }).getByPlaceholder('Value').nth(1).click();
  await page.getByRole('row', { name: 'Orientation1 Fixed Fixed' }).getByPlaceholder('Value').nth(1).fill('10');
  await page.getByRole('row', { name: 'Orientation1 Fixed Fixed' }).getByPlaceholder('Value').nth(1).press('Tab');
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByRole('link', { name: 'Add Templates' }).click();
  await page.getByRole('textbox', { name: 'Start Time' }).click();
  await page.getByRole('textbox', { name: 'Start Time' }).fill('10');
  //await page.getByRole('link', { name: 'Requisitions' }).click();
  await page.getByRole('textbox', { name: 'End Time' }).click();
  await page.getByRole('textbox', { name: 'End Time' }).fill('18');
  //await page.getByText('18:00').click();
  await page.getByRole('textbox', { name: 'Shift Count' }).click();
  await page.getByRole('textbox', { name: 'Shift Count' }).fill('5');
  await page.locator('#fixedRateTypePhySpan').click();
  await page.getByRole('listitem').filter({ hasText: 'Weekday-Hourly-Fixed' }).click();
  await page.getByRole('cell', { name: '2', exact: true }).getByRole('link').click();
  await page.getByRole('cell', { name: '4', exact: true }).getByRole('link').click();
  await page.getByRole('link', { name: 'Create schedule for template' }).click();
  await page.getByRole('link', { name: 'Broadcast' }).click();
  await page.goto('https://qa2.hwlmsp.com');
  
});


