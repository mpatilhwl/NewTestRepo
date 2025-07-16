import { Page, Locator } from '@playwright/test';

export class CreateRequisitionPage {
  readonly page: Page;
  
  // User profile and navigation
  readonly userProfileDropdown: Locator;
  readonly apAndPhysicianOption: Locator;
  readonly requisitionsLink: Locator;
  readonly createRequisitionLink: Locator;
  
  // Hospital and Department selection
  readonly hospitalDropdown: Locator;
  readonly adventHealthOption: Locator;
  readonly adminNcAlliedSupportSpan: Locator;
  readonly cardiologyOption: Locator;
  
  // Position selection
  readonly anesthesiologistButton: Locator;
  readonly cardiologistOption: Locator;
  
  // Date fields
  readonly contractStartDate: Locator;
  readonly contractEndDate: Locator;
  readonly requisitionNumber: Locator;
  readonly day1Link: Locator;
  readonly day31Link: Locator;
  
  // Contract type
  readonly selectContractTypeLink: Locator;
  readonly contractTypeCheckbox: Locator;
  readonly okButton: Locator;
  
  // FMLA selection
  readonly fmlaDropdown: Locator;
  readonly fmlaOption: Locator;
  
  // Navigation buttons
  readonly nextButton: Locator;
  readonly selectAllCheckbox: Locator;
  
  // Orientation section
  readonly orientationValueField: Locator;
  
  // Template section
  readonly addTemplatesLink: Locator;
  readonly startTimeTextbox: Locator;
  readonly endTimeTextbox: Locator;
  readonly shiftCountTextbox: Locator;
  readonly rateTypeDropdown: Locator;
  readonly weekdayHourlyFixedOption: Locator;
  readonly day2Cell: Locator;
  readonly day4Cell: Locator;
  readonly createScheduleLink: Locator;
  readonly broadcastLink: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // Initialize locators based on your exact code
    this.userProfileDropdown = page.locator('.nice-select.select-box.add-select.input__field.input__field--hoshi.custom-select');
    this.apAndPhysicianOption = page.getByRole('listitem').filter({ hasText: 'AP and Physician' });
    this.requisitionsLink = page.getByRole('link', { name: 'Requisitions' });
    this.createRequisitionLink = page.getByRole('link', { name: 'Create Requisition' });
    
    this.hospitalDropdown = page.locator('#locHospitalId div');
    this.adventHealthOption = page.getByRole('listitem').filter({ hasText: 'Advent Health Care Center,' });
    this.adminNcAlliedSupportSpan = page.locator('span').filter({ hasText: 'Admin NC Allied Support (CC' }).locator('div');
    this.cardiologyOption = page.getByRole('listitem').filter({ hasText: 'Cardiology (AAAA Cost Center)' });
    
    this.anesthesiologistButton = page.locator('span').filter({ hasText: 'Anesthesiologist (Physician)' }).getByRole('button');
    this.cardiologistOption = page.locator('#addTemplateForm').getByText('Cardiologist (Physician)', { exact: true }).nth(1);
    
    this.contractStartDate = page.locator('#contractStartDate');
    this.contractEndDate = page.locator('#contractEndDate');
    this.requisitionNumber = page.locator('#requisitionNumber');
    this.day1Link = page.getByRole('link', { name: '1', exact: true });
    this.day31Link = page.getByRole('link', { name: '31' });
    
    this.selectContractTypeLink = page.getByRole('link', { name: 'Select Contract Type *' });
    this.contractTypeCheckbox = page.locator('#contTypeSel_235');
    this.okButton = page.getByRole('button', { name: 'Ok' });
    
    this.fmlaDropdown = page.locator('div').filter({ hasText: /^FMLAFull-Time VacancyPart timeProgram ConversionVacation Coverage$/ });
    this.fmlaOption = page.getByRole('listitem').filter({ hasText: 'FMLA' });
    
    this.nextButton = page.getByRole('link', { name: 'Next' });
    this.selectAllCheckbox = page.getByRole('checkbox', { name: 'Select All' });
    
    this.orientationValueField = page.getByRole('row', { name: 'Orientation1 Fixed Fixed' }).getByPlaceholder('Value').nth(1);
    
    this.addTemplatesLink = page.getByRole('link', { name: 'Add Templates' });
    this.startTimeTextbox = page.getByRole('textbox', { name: 'Start Time' });
    this.endTimeTextbox = page.getByRole('textbox', { name: 'End Time' });
    this.shiftCountTextbox = page.getByRole('textbox', { name: 'Shift Count' });
    this.rateTypeDropdown = page.locator('#fixedRateTypePhySpan');
    this.weekdayHourlyFixedOption = page.getByRole('listitem').filter({ hasText: 'Weekday-Hourly-Fixed' });
    this.day2Cell = page.getByRole('cell', { name: '2', exact: true }).getByRole('link');
    this.day4Cell = page.getByRole('cell', { name: '4', exact: true }).getByRole('link');
    this.createScheduleLink = page.getByRole('link', { name: 'Create schedule for template' });
    this.broadcastLink = page.getByRole('link', { name: 'Broadcast' });
  }

  /**
   * Navigate to login page
   */
  async navigateToLoginPage(url: string) {
    await this.page.goto(url);
  }

  /**
   * Select user profile and navigate to requisitions
   */
  async selectUserProfileAndNavigate() {
    await this.userProfileDropdown.click();
    await this.apAndPhysicianOption.click();
    await this.page.waitForTimeout(5000);
    await this.requisitionsLink.click();
    await this.createRequisitionLink.click();
  }

  /**
   * Select hospital and department
   */
  async selectHospitalAndDepartment() {
    await this.hospitalDropdown.click();
    await this.adventHealthOption.click();
    await this.adminNcAlliedSupportSpan.click();
    await this.cardiologyOption.click();
  }

  /**
   * Select position (Cardiologist)
   */
  async selectPosition() {
    await this.anesthesiologistButton.click();
    await this.cardiologistOption.click();
  }

  /**
   * Set contract dates (1st to 31st)
   */
  async setContractDates() {
    await this.contractStartDate.click();
    await this.requisitionNumber.click();
    await this.day1Link.click();
    await this.contractEndDate.click();
    await this.day31Link.click();
  }

  /**
   * Select contract type
   */
  async selectContractType() {
    await this.selectContractTypeLink.click();
    await this.contractTypeCheckbox.check();
    await this.okButton.click();
  }

  /**
   * Select FMLA option
   */
  async selectFMLA() {
    await this.fmlaDropdown.click();
    await this.fmlaOption.click();
  }

  /**
   * Navigate to next step
   */
  async proceedToNextStep() {
    await this.nextButton.click();
  }

  /**
   * Select all options and proceed
   */
  async selectAllAndProceed() {
    await this.selectAllCheckbox.check();
    await this.nextButton.click();
  }

  /**
   * Configure orientation value
   */
  async configureOrientation(value: string = '10') {
    await this.orientationValueField.click();
    await this.orientationValueField.fill(value);
    await this.orientationValueField.press('Tab');
  }

  /**
   * Add template with time and shift details
   */
  async addTemplate(startTime: string = '10', endTime: string = '18', shiftCount: string = '5') {
    await this.addTemplatesLink.click();
    await this.startTimeTextbox.click();
    await this.startTimeTextbox.fill(startTime);
    await this.endTimeTextbox.click();
    await this.endTimeTextbox.fill(endTime);
    await this.shiftCountTextbox.click();
    await this.shiftCountTextbox.fill(shiftCount);
  }

  /**
   * Select rate type
   */
  async selectRateType() {
    await this.rateTypeDropdown.click();
    await this.weekdayHourlyFixedOption.click();
  }

  /**
   * Select specific days (2nd and 4th)
   */
  async selectDays() {
    await this.day2Cell.click();
    await this.day4Cell.click();
  }

  /**
   * Create schedule and broadcast
   */
  async createScheduleAndBroadcast() {
    await this.createScheduleLink.click();
    await this.broadcastLink.click();
  }

  /**
   * Navigate to home page
   */
  async navigateToHome() {
    await this.page.goto('https://qa2.hwlmsp.com');
  }

  /**
   * Complete end-to-end requisition creation workflow
   */
  async createCompleteRequisition(
    startTime: string = '10',
    endTime: string = '18',
    shiftCount: string = '5',
    orientationValue: string = '10'
  ) {
    await this.selectUserProfileAndNavigate();
    await this.selectHospitalAndDepartment();
    await this.selectPosition();
    await this.setContractDates();
    await this.selectContractType();
    await this.selectFMLA();
    await this.proceedToNextStep();
    await this.selectAllAndProceed();
    await this.configureOrientation(orientationValue);
    await this.proceedToNextStep();
    await this.addTemplate(startTime, endTime, shiftCount);
    await this.selectRateType();
    await this.selectDays();
    await this.createScheduleAndBroadcast();
    await this.navigateToHome();
  }
}