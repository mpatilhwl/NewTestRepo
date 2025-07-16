import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CreateRequisitionPage } from '../pages/CreateRequisitionPage';

test.describe('Create Requisition Tests', () => {
  let loginPage: LoginPage;
  let createRequisitionPage: CreateRequisitionPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    createRequisitionPage = new CreateRequisitionPage(page);
  });

  test('Create Requisition - Complete Workflow', async ({ page }) => {
    // Test data
    const testData = {
      loginUrl: 'https://qa2.hwlmsp.com',
      username: 'progmgr20',
      password: 'Y4mth@ng!24',
      startTime: '10',
      endTime: '18',
      shiftCount: '5',
      orientationValue: '10'
    };

    // Step 1: Login
    await loginPage.performLogin(testData.username, testData.password, testData.loginUrl);

    // Step 2: Create Requisition
    await createRequisitionPage.createCompleteRequisition(
      testData.startTime,
      testData.endTime,
      testData.shiftCount,
      testData.orientationValue
    );

    // Verification: Check if we're back on the home page
    //await expect(page).toHaveURL('https://qa2.hwlmsp.com');
  });

//   test('Create Requisition - Step by Step Workflow', async ({ page }) => {
//     // Test data
//     const testData = {
//       loginUrl: 'https://qa2.hwlmsp.com/user/loggedOut?referrer=%2F&loginName=&statusCode=401&softSSOMessage=',
//       username: 'progmgr20',
//       password: 'Y4mth@ng!24'
//     };

//     // Step 1: Navigate and Login
//     await createRequisitionPage.navigateToLoginPage(testData.loginUrl);
//     await loginPage.fillLoginCredentials(testData.username, testData.password);
//     await loginPage.clickLoginButton();
//     await loginPage.waitForUserProfile();

//     // Step 2: Navigate to Create Requisition
//     await createRequisitionPage.selectUserProfileAndNavigate();

//     // Step 3: Select Hospital and Department
//     await createRequisitionPage.selectHospitalAndDepartment();

//     // Step 4: Select Position
//     await createRequisitionPage.selectPosition();

//     // Step 5: Set Contract Dates
//     await createRequisitionPage.setContractDates();

//     // Step 6: Select Contract Type
//     await createRequisitionPage.selectContractType();

//     // Step 7: Select FMLA
//     await createRequisitionPage.selectFMLA();

//     // Step 8: Proceed to Next Step
//     await createRequisitionPage.proceedToNextStep();

//     // Step 9: Select All and Proceed
//     await createRequisitionPage.selectAllAndProceed();

//     // Step 10: Configure Orientation
//     await createRequisitionPage.configureOrientation('10');

//     // Step 11: Proceed to Next Step
//     await createRequisitionPage.proceedToNextStep();

//     // Step 12: Add Template
//     await createRequisitionPage.addTemplate('10', '18', '5');

//     // Step 13: Select Rate Type
//     await createRequisitionPage.selectRateType();

//     // Step 14: Select Days
//     await createRequisitionPage.selectDays();

//     // Step 15: Create Schedule and Broadcast
//     await createRequisitionPage.createScheduleAndBroadcast();

//     // Step 16: Navigate to Home
//     await createRequisitionPage.navigateToHome();

//     // Verification: Check if we're back on the home page
//     await expect(page).toHaveURL('https://qa2.hwlmsp.com');
//   });

//   test('Create Requisition - With Custom Parameters', async ({ page }) => {
//     // Test data with custom parameters
//     const testData = {
//       loginUrl: 'https://qa2.hwlmsp.com/user/loggedOut?referrer=%2F&loginName=&statusCode=401&softSSOMessage=',
//       username: 'progmgr20',
//       password: 'Y4mth@ng!24',
//       startTime: '08',
//       endTime: '16',
//       shiftCount: '3',
//       orientationValue: '15'
//     };

//     // Step 1: Login
//     await loginPage.performLogin(testData.username, testData.password, testData.loginUrl);

//     // Step 2: Create Requisition with custom parameters
//     await createRequisitionPage.createCompleteRequisition(
//       testData.startTime,
//       testData.endTime,
//       testData.shiftCount,
//       testData.orientationValue
//     );

//     // Verification: Check if we're back on the home page
//     await expect(page).toHaveURL('https://qa2.hwlmsp.com');
//   });

//   test('Create Requisition - Navigation Only', async ({ page }) => {
//     // Test data
//     const testData = {
//       loginUrl: 'https://qa2.hwlmsp.com/user/loggedOut?referrer=%2F&loginName=&statusCode=401&softSSOMessage=',
//       username: 'progmgr20',
//       password: 'Y4mth@ng!24'
//     };

//     // Step 1: Login
//     await loginPage.performLogin(testData.username, testData.password, testData.loginUrl);

//     // Step 2: Navigate to Create Requisition page only
//     await createRequisitionPage.selectUserProfileAndNavigate();

//     // Verification: Check if we can see the hospital dropdown (indicating we're on the create requisition page)
//     await expect(createRequisitionPage.hospitalDropdown).toBeVisible();
//   });

//   test('Create Requisition - Form Filling Only', async ({ page }) => {
//     // Test data
//     const testData = {
//       loginUrl: 'https://qa2.hwlmsp.com/user/loggedOut?referrer=%2F&loginName=&statusCode=401&softSSOMessage=',
//       username: 'progmgr20',
//       password: 'Y4mth@ng!24'
//     };

//     // Step 1: Login
//     await loginPage.performLogin(testData.username, testData.password, testData.loginUrl);

//     // Step 2: Navigate to Create Requisition
//     await createRequisitionPage.selectUserProfileAndNavigate();

//     // Step 3: Fill basic form details
//     await createRequisitionPage.selectHospitalAndDepartment();
//     await createRequisitionPage.selectPosition();
//     await createRequisitionPage.setContractDates();
//     await createRequisitionPage.selectContractType();
//     await createRequisitionPage.selectFMLA();

//     // Verification: Check if Next button is visible (indicating form is filled)
//     await expect(createRequisitionPage.nextButton).toBeVisible();
//   });
 });