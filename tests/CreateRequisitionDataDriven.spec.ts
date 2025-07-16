import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CreateRequisitionPage } from '../pages/CreateRequisitionPage';
import { requisitionTestData, defaultRequisitionData, RequisitionTestData } from '../testData/requisitionTestData';

test.describe('Create Requisition - Data Driven Tests', () => {
  let loginPage: LoginPage;
  let createRequisitionPage: CreateRequisitionPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    createRequisitionPage = new CreateRequisitionPage(page);
  });

  // Data-driven test using multiple test data sets
  requisitionTestData.forEach((testData: RequisitionTestData, index: number) => {
    test(`Create Requisition - ${testData.testDescription} (Dataset ${index + 1})`, async ({ page }) => {
      // Step 1: Login
      await loginPage.performLogin(testData.username, testData.password, testData.loginUrl);

      // Step 2: Create Requisition with test data
      await createRequisitionPage.createCompleteRequisition(
        testData.startTime,
        testData.endTime,
        testData.shiftCount,
        testData.orientationValue
      );

      // Verification: Check if we're back on the home page
      await expect(page).toHaveURL('https://qa2.hwlmsp.com');
    });
  });

  test('Create Requisition - Default Configuration', async ({ page }) => {
    // Use default test data
    const testData = defaultRequisitionData;

    // Step 1: Login
    await loginPage.performLogin(testData.username, testData.password, testData.loginUrl);

    // Step 2: Create Requisition with default parameters
    await createRequisitionPage.createCompleteRequisition();

    // Verification: Check if we're back on the home page
    await expect(page).toHaveURL('https://qa2.hwlmsp.com');
  });

  test('Create Requisition - Parameterized Individual Steps', async ({ page }) => {
    const testData = requisitionTestData[0]; // Use first dataset

    // Step 1: Navigate and Login
    await createRequisitionPage.navigateToLoginPage(testData.loginUrl);
    await loginPage.fillLoginCredentials(testData.username, testData.password);
    await loginPage.clickLoginButton();
    await loginPage.waitForUserProfile();

    // Step 2: Navigate to Create Requisition
    await createRequisitionPage.selectUserProfileAndNavigate();

    // Step 3: Fill form with test data
    await createRequisitionPage.selectHospitalAndDepartment();
    await createRequisitionPage.selectPosition();
    await createRequisitionPage.setContractDates();
    await createRequisitionPage.selectContractType();
    await createRequisitionPage.selectFMLA();
    await createRequisitionPage.proceedToNextStep();
    await createRequisitionPage.selectAllAndProceed();
    await createRequisitionPage.configureOrientation(testData.orientationValue);
    await createRequisitionPage.proceedToNextStep();
    await createRequisitionPage.addTemplate(testData.startTime, testData.endTime, testData.shiftCount);
    await createRequisitionPage.selectRateType();
    await createRequisitionPage.selectDays();
    await createRequisitionPage.createScheduleAndBroadcast();
    await createRequisitionPage.navigateToHome();

    // Verification: Check if we're back on the home page
    await expect(page).toHaveURL('https://qa2.hwlmsp.com');
  });

  test('Create Requisition - Validation Test', async ({ page }) => {
    const testData = defaultRequisitionData;

    // Step 1: Login
    await loginPage.performLogin(testData.username, testData.password, testData.loginUrl);

    // Step 2: Navigate to Create Requisition
    await createRequisitionPage.selectUserProfileAndNavigate();

    // Step 3: Validate form elements are visible
    await expect(createRequisitionPage.hospitalDropdown).toBeVisible();
    await expect(createRequisitionPage.requisitionsLink).toBeVisible();
    
    // Step 4: Fill partial form and validate
    await createRequisitionPage.selectHospitalAndDepartment();
    await expect(createRequisitionPage.anesthesiologistButton).toBeVisible();
    
    await createRequisitionPage.selectPosition();
    await expect(createRequisitionPage.contractStartDate).toBeVisible();
    
    await createRequisitionPage.setContractDates();
    await expect(createRequisitionPage.selectContractTypeLink).toBeVisible();
  });
});