import { Page, Locator } from '@playwright/test';

export class CreateRequisitionPage {
  readonly page: Page;
  
  // Navigation elements
  readonly alliedAndNursingLink: Locator;
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
  readonly startTimeOption: Locator;
  readonly endTimeOption: Locator;
  readonly rateTypeDropdown: Locator;
  readonly weekdayHourlyFixedOption: Locator;
  readonly day2Cell: Locator;
  readonly day4Cell: Locator;
  readonly createScheduleLink: Locator;
  readonly broadcastLink: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // Initialize locators
    this.alliedAndNursingLink = page.getByText('Allied and Nursing Allied');
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
    this.contractTypeCheckbox = page.locator('#contTypeSel_227');
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
    this.startTimeOption = page.getByText(':00');
    this.endTimeOption = page.getByText('18:00');
    this.rateTypeDropdown = page.getByRole('cell', { name: 'Day-13 Holiday-Hourly Holiday-Hourly-Fixed OnCall-Holiday OnCall-Weekday Rate Range W-END-New WD-Night WE-Night-Oncall Weekday-Daily Weekday-Hourly-Fixed Weekday-Hourly-Range Weekend-Hourly-Fixed Weekend-Hourly-RR WeekEnd-OnCall Daily-Weekday-Diff Daily-Weekday-Mult-Weekday-Daily Hourly-DepD Hourly-DepM OnCall-Weekend Weekday-Hourly-Differential Weekday-Hourly-Multiplier Weekend-Evening Select Rate Type', exact: true }).locator('div');
    this.weekdayHourlyFixedOption = page.getByRole('listitem').filter({ hasText: 'Weekday-Hourly-Fixed' });
    this.day2Cell = page.getByRole('cell', { name: '2', exact: true }).getByRole('link');
    this.day4Cell = page.getByRole('cell', { name: '4', exact: true }).getByRole('link');
    this.createScheduleLink = page.getByRole('link', { name: 'Create schedule for template' });
    this.broadcastLink = page.getByRole('link', { name: 'Broadcast' });
  }

  // Navigation methods
  async navigateToCreateRequisition() {
    await this.alliedAndNursingLink.click();
    await this.apAndPhysicianOption.click();
    await this.requisitionsLink.click();
    await this.createRequisitionLink.click();
  }

  // Hospital and department selection
  async selectHospitalAndDepartment() {
    await this.hospitalDropdown.click();
    await this.adventHealthOption.click();
    await this.adminNcAlliedSupportSpan.click();
    await this.cardiologyOption.click();
  }

  // Position selection
  async selectPosition() {
    await this.anesthesiologistButton.click();
    await this.cardiologistOption.click();
  }

  // Date selection
  async setContractDates() {
    await this.contractStartDate.click();
    await this.requisitionNumber.click();
    await this.day1Link.click();
    await this.contractEndDate.click();
    await this.day31Link.click();
  }

  // Contract type selection
  async selectContractType() {
    await this.selectContractTypeLink.click();
    await this.contractTypeCheckbox.check();
    await this.okButton.click();
  }

  // FMLA selection
  async selectFMLA() {
    await this.fmlaDropdown.click();
    await this.fmlaOption.click();
  }

  // Navigate through steps
  async proceedToNextStep() {
    await this.nextButton.click();
  }

  async selectAllAndProceed() {
    await this.selectAllCheckbox.check();
    await this.nextButton.click();
  }

  // Orientation configuration
  async configureOrientation(value: string = '10') {
    await this.orientationValueField.click();
    await this.orientationValueField.fill(value);
    await this.orientationValueField.press('Tab');
  }

  // Template configuration
  async addTemplate(startTime: string = '10', endTime: string = '18', shiftCount: string = '5') {
    await this.addTemplatesLink.click();
    await this.startTimeTextbox.click();
    await this.startTimeTextbox.fill(startTime);
    await this.startTimeOption.click();
    await this.endTimeTextbox.click();
    await this.endTimeTextbox.fill(endTime);
    await this.endTimeOption.click();
    await this.shiftCountTextbox.click();
    await this.shiftCountTextbox.fill(shiftCount);
  }

  async selectRateType() {
    await this.rateTypeDropdown.click();
    await this.weekdayHourlyFixedOption.click();
  }

  async selectDays() {
    await this.day2Cell.click();
    await this.day4Cell.click();
  }

  async createScheduleAndBroadcast() {
    await this.createScheduleLink.click();
    await this.broadcastLink.click();
    await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for broadcast to complete
  }

  // Complete workflow method
  async createCompleteRequisition(appUrl: string) {
    await this.page.goto(appUrl);
    await this.navigateToCreateRequisition();
    await this.selectHospitalAndDepartment();
    await this.selectPosition();
    await this.setContractDates();
    await this.selectContractType();
    await this.selectFMLA();
    await this.proceedToNextStep();
    await this.selectAllAndProceed();
    await this.configureOrientation();
    await this.proceedToNextStep();
    await this.addTemplate();
    await this.selectRateType();
    await this.selectDays();
    await this.createScheduleAndBroadcast();
  }

  // Navigate to requisition home
  async navigateToRequisitionHome() {
    await this.page.goto('https://qa2.hwlmsp.com/shiftrock/requisitionLocum/requisitionHome?stateHidFilter=&hospHidFilter=&deptHidFilter=&classHidFilter=&statusHidFilter=Open&requisitionFilter=&clinHidFilter=&taskOrderHidFilter=&fillStatusHidFilter=&refReqStartHidFilter=&reqStartDaysHidFilter=60&reqCoordinatoridFilter=&countReqIds=&sortField=created&sortOrder=&isItGoFilter=&mspContractFilter=&reqCloseFilter=&rejectFilter=&offset=');
  }
}