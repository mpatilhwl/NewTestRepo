import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CreateRequisitionPage } from '../pages/CreateRequisitionPage';
import { TestUtils } from '../utils/TestUtils';
import { defaultRequisitionData } from '../testData/requisitionTestData';

test.describe('Create Requisition - Enhanced Tests with Utilities', () => {
  let loginPage: LoginPage;
  let createRequisitionPage: CreateRequisitionPage;
  let testUtils: TestUtils;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    createRequisitionPage = new CreateRequisitionPage(page);
    testUtils = new TestUtils(page);
  });

  test('Create Requisition - Enhanced with Logging and Screenshots', async ({ page }) => {
    const testData = defaultRequisitionData;

    testUtils.logStep('Starting Create Requisition test');
    
    // Step 1: Login
    testUtils.logStep('Performing login');
    await loginPage.performLogin(testData.username, testData.password, testData.loginUrl);
    await testUtils.takeScreenshot('after-login');

    // Step 2: Navigate to Create Requisition
    testUtils.logStep('Navigating to Create Requisition');
    await createRequisitionPage.selectUserProfileAndNavigate();
    await testUtils.takeScreenshot('create-requisition-page');

    // Step 3: Fill Hospital and Department
    testUtils.logStep('Selecting hospital and department');
    await createRequisitionPage.selectHospitalAndDepartment();
    await testUtils.takeScreenshot('hospital-department-selected');

    // Step 4: Select Position
    testUtils.logStep('Selecting position');
    await createRequisitionPage.selectPosition();
    await testUtils.takeScreenshot('position-selected');

    // Step 5: Set Contract Dates
    testUtils.logStep('Setting contract dates');
    await createRequisitionPage.setContractDates();
    await testUtils.takeScreenshot('dates-set');

    // Step 6: Select Contract Type
    testUtils.logStep('Selecting contract type');
    await createRequisitionPage.selectContractType();
    await testUtils.takeScreenshot('contract-type-selected');

    // Step 7: Select FMLA
    testUtils.logStep('Selecting FMLA');
    await createRequisitionPage.selectFMLA();
    await testUtils.takeScreenshot('fmla-selected');

    // Step 8: Proceed to Next Step
    testUtils.logStep('Proceeding to next step');
    await createRequisitionPage.proceedToNextStep();
    await testUtils.takeScreenshot('next-step-1');

    // Step 9: Select All and Proceed
    testUtils.logStep('Selecting all and proceeding');
    await createRequisitionPage.selectAllAndProceed();
    await testUtils.takeScreenshot('select-all-proceed');

    // Step 10: Configure Orientation
    testUtils.logStep('Configuring orientation');
    await createRequisitionPage.configureOrientation(testData.orientationValue);
    await testUtils.takeScreenshot('orientation-configured');

    // Step 11: Proceed to Next Step
    testUtils.logStep('Proceeding to template step');
    await createRequisitionPage.proceedToNextStep();
    await testUtils.takeScreenshot('template-step');

    // Step 12: Add Template
    testUtils.logStep('Adding template');
    await createRequisitionPage.addTemplate(testData.startTime, testData.endTime, testData.shiftCount);
    await testUtils.takeScreenshot('template-added');

    // Step 13: Select Rate Type
    testUtils.logStep('Selecting rate type');
    await createRequisitionPage.selectRateType();
    await testUtils.takeScreenshot('rate-type-selected');

    // Step 14: Select Days
    testUtils.logStep('Selecting days');
    await createRequisitionPage.selectDays();
    await testUtils.takeScreenshot('days-selected');

    // Step 15: Create Schedule and Broadcast
    testUtils.logStep('Creating schedule and broadcasting');
    await createRequisitionPage.createScheduleAndBroadcast();
    await testUtils.takeScreenshot('schedule-broadcast');

    // Step 16: Navigate to Home
    testUtils.logStep('Navigating to home');
    await createRequisitionPage.navigateToHome();
    await testUtils.takeScreenshot('final-home-page');

    // Verification
    testUtils.logStep('Verifying final URL');
    await testUtils.verifyUrl('https://qa2.hwlmsp.com');
    
    testUtils.logStep('Test completed successfully');
  });

  test('Create Requisition - With Retry Logic', async ({ page }) => {
    const testData = defaultRequisitionData;

    testUtils.logStep('Starting Create Requisition test with retry logic');

    // Step 1: Login with retry
    await testUtils.retryAction(async () => {
      await loginPage.performLogin(testData.username, testData.password, testData.loginUrl);
    }, 3, 2000);

    // Step 2: Create Requisition with retry for critical steps
    await testUtils.retryAction(async () => {
      await createRequisitionPage.selectUserProfileAndNavigate();
    }, 2, 1000);

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

    // Retry broadcast step as it might be flaky
    await testUtils.retryAction(async () => {
      await createRequisitionPage.createScheduleAndBroadcast();
    }, 3, 3000);

    await createRequisitionPage.navigateToHome();

    // Verification
    await testUtils.verifyUrl('https://qa2.hwlmsp.com');
  });

  test('Create Requisition - With Dynamic Test Data', async ({ page }) => {
    // Generate dynamic test data
    const dynamicTestData = {
      ...defaultRequisitionData,
      startTime: testUtils.formatTime(testUtils.generateRandomNumber(8, 12)),
      endTime: testUtils.formatTime(testUtils.generateRandomNumber(16, 20)),
      shiftCount: testUtils.generateRandomNumber(3, 7).toString(),
      orientationValue: testUtils.generateRandomNumber(5, 20).toString()
    };

    testUtils.logStep(`Using dynamic test data: Start Time: ${dynamicTestData.startTime}, End Time: ${dynamicTestData.endTime}, Shift Count: ${dynamicTestData.shiftCount}, Orientation: ${dynamicTestData.orientationValue}`);

    // Step 1: Login
    await loginPage.performLogin(dynamicTestData.username, dynamicTestData.password, dynamicTestData.loginUrl);

    // Step 2: Create Requisition with dynamic data
    await createRequisitionPage.createCompleteRequisition(
      dynamicTestData.startTime,
      dynamicTestData.endTime,
      dynamicTestData.shiftCount,
      dynamicTestData.orientationValue
    );

    // Verification
    await testUtils.verifyUrl('https://qa2.hwlmsp.com');
  });

  test('Create Requisition - Validation and Error Handling', async ({ page }) => {
    const testData = defaultRequisitionData;

    // Step 1: Login
    await loginPage.performLogin(testData.username, testData.password, testData.loginUrl);

    // Step 2: Navigate to Create Requisition
    await createRequisitionPage.selectUserProfileAndNavigate();

    // Step 3: Validate elements are present before interacting
    testUtils.logStep('Validating form elements');
    
    await testUtils.waitForElement('#locHospitalId div');
    expect(await testUtils.isElementVisible('#locHospitalId div')).toBeTruthy();
    
    await createRequisitionPage.selectHospitalAndDepartment();
    
    await testUtils.waitForElement('span:has-text("Anesthesiologist (Physician)")');
    expect(await testUtils.isElementVisible('span:has-text("Anesthesiologist (Physician)")')).toBeTruthy();
    
    await createRequisitionPage.selectPosition();
    
    await testUtils.waitForElement('#contractStartDate');
    expect(await testUtils.isElementVisible('#contractStartDate')).toBeTruthy();
    
    // Continue with rest of the flow
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

    // Final verification
    await testUtils.verifyUrl('https://qa2.hwlmsp.com');
  });

  test.afterEach(async ({ page }) => {
    // Clean up after each test
    testUtils.logStep('Cleaning up after test');
    await testUtils.clearStorage();
  });
});