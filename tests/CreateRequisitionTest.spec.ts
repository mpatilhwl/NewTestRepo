import { test, expect } from '@playwright/test';
import { CreateRequisitionPage } from '../pages/CreateRequisitionPage';
import { LoginPage } from '../pages/LoginPage';
import { TestConfig } from '../test.config';  

test.describe('Create Requisition Tests', () => {
  let createRequisitionPage: CreateRequisitionPage;
   let loginPage: LoginPage;


  // test.beforeEach(async ({ page }) => {
  //   loginPage = new LoginPage(page);
  // });
  test.beforeEach(async ({ page }) => {
    createRequisitionPage = new CreateRequisitionPage(page);
    loginPage = new LoginPage(page);
  });

  test('Create complete requisition workflow', async ({ page }) => {

     let testConfig = new TestConfig();
    const username = testConfig.username;
    const password = testConfig.password;
    const appUrl = testConfig.appUrl;
    
    // Perform login
    await loginPage.performLogin(username, password, appUrl);

  
    // Execute the complete requisition creation workflow
    await createRequisitionPage.createCompleteRequisition();
    
    // Navigate to requisition home to verify completion
    await createRequisitionPage.navigateToRequisitionHome();

      // Perform logout
    await loginPage.performLogout();
    
    // Add assertions here to verify the requisition was created successfully
    // Example: await expect(page).toHaveURL(/requisitionHome/);
  });

  // test('Create requisition step by step', async ({ page }) => {
  //   // Navigate to create requisition page
  //   await createRequisitionPage.navigateToCreateRequisition();
    
  //   // Select hospital and department
  //   await createRequisitionPage.selectHospitalAndDepartment();
    
  //   // Select position
  //   await createRequisitionPage.selectPosition();
    
  //   // Set contract dates
  //   await createRequisitionPage.setContractDates();
    
  //   // Select contract type
  //   await createRequisitionPage.selectContractType();
    
  //   // Select FMLA
  //   await createRequisitionPage.selectFMLA();
    
  //   // Proceed to next step
  //   await createRequisitionPage.proceedToNextStep();
    
  //   // Select all and proceed
  //   await createRequisitionPage.selectAllAndProceed();
    
  //   // Configure orientation
  //   await createRequisitionPage.configureOrientation('10');
    
  //   // Proceed to next step
  //   await createRequisitionPage.proceedToNextStep();
    
  //   // Add template with custom values
  //   await createRequisitionPage.addTemplate('10', '18', '5');
    
  //   // Select rate type
  //   await createRequisitionPage.selectRateType();
    
  //   // Select days
  //   await createRequisitionPage.selectDays();
    
  //   // Create schedule and broadcast
  //   await createRequisitionPage.createScheduleAndBroadcast();
    
  //   // Navigate to requisition home
  //   await createRequisitionPage.navigateToRequisitionHome();

    
    
    // Add assertions to verify the workflow completed successfully
    // Example: await expect(page).toHaveURL(/requisitionHome/);
  });

  // test('Create requisition with custom orientation value', async ({ page }) => {
  //   await createRequisitionPage.navigateToCreateRequisition();
  //   await createRequisitionPage.selectHospitalAndDepartment();
  //   await createRequisitionPage.selectPosition();
  //   await createRequisitionPage.setContractDates();
  //   await createRequisitionPage.selectContractType();
  //   await createRequisitionPage.selectFMLA();
  //   await createRequisitionPage.proceedToNextStep();
  //   await createRequisitionPage.selectAllAndProceed();
    
  //   // Test with custom orientation value
  //   await createRequisitionPage.configureOrientation('15');
    
  //   await createRequisitionPage.proceedToNextStep();
  //   await createRequisitionPage.addTemplate();
  //   await createRequisitionPage.selectRateType();
  //   await createRequisitionPage.selectDays();
  //   await createRequisitionPage.createScheduleAndBroadcast();
  //   await createRequisitionPage.navigateToRequisitionHome();
  // });

  // test('Create requisition with custom template values', async ({ page }) => {
  //   await createRequisitionPage.navigateToCreateRequisition();
  //   await createRequisitionPage.selectHospitalAndDepartment();
  //   await createRequisitionPage.selectPosition();
  //   await createRequisitionPage.setContractDates();
  //   await createRequisitionPage.selectContractType();
  //   await createRequisitionPage.selectFMLA();
  //   await createRequisitionPage.proceedToNextStep();
  //   await createRequisitionPage.selectAllAndProceed();
  //   await createRequisitionPage.configureOrientation();
  //   await createRequisitionPage.proceedToNextStep();
    
  //   // Test with custom template values
  //   await createRequisitionPage.addTemplate('08', '16', '3');
    
  //   await createRequisitionPage.selectRateType();
  //   await createRequisitionPage.selectDays();
  //   await createRequisitionPage.createScheduleAndBroadcast();
  //   await createRequisitionPage.navigateToRequisitionHome();
