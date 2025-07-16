# Create Requisition Test Automation

This document describes the Page Object Model (POM) implementation and test classes for the Create Requisition functionality.

## Project Structure

```
NewTestRepo/
├── pages/
│   ├── LoginPage.ts                    # Login page object model
│   └── CreateRequisitionPage.ts        # Create requisition page object model
├── tests/
│   ├── CreateRequisitionTest.spec.ts           # Basic test scenarios
│   ├── CreateRequisitionDataDriven.spec.ts     # Data-driven tests
│   └── CreateRequisitionEnhanced.spec.ts       # Enhanced tests with utilities
├── testData/
│   └── requisitionTestData.ts          # Test data configurations
├── utils/
│   └── TestUtils.ts                    # Utility functions for tests
└── README_CreateRequisition.md         # This documentation
```

## Page Object Models

### LoginPage.ts
Handles login functionality with methods:
- `navigateToLoginPage(url)` - Navigate to login page
- `fillLoginCredentials(username, password)` - Fill login form
- `clickLoginButton()` - Click login button
- `performLogin(username, password, url)` - Complete login workflow

### CreateRequisitionPage.ts
Handles the complete create requisition workflow with methods:

#### Navigation Methods
- `selectUserProfileAndNavigate()` - Select user profile and navigate to requisitions
- `navigateToLoginPage(url)` - Navigate to login page
- `navigateToHome()` - Navigate to home page

#### Form Filling Methods
- `selectHospitalAndDepartment()` - Select hospital and department
- `selectPosition()` - Select cardiologist position
- `setContractDates()` - Set contract start and end dates
- `selectContractType()` - Select contract type
- `selectFMLA()` - Select FMLA option
- `configureOrientation(value)` - Configure orientation value
- `addTemplate(startTime, endTime, shiftCount)` - Add template with time details
- `selectRateType()` - Select rate type
- `selectDays()` - Select specific days
- `createScheduleAndBroadcast()` - Create schedule and broadcast

#### Workflow Methods
- `createCompleteRequisition(startTime, endTime, shiftCount, orientationValue)` - Complete end-to-end workflow

## Test Classes

### 1. CreateRequisitionTest.spec.ts
Basic test scenarios including:
- Complete workflow test
- Step-by-step workflow test
- Custom parameters test
- Navigation only test
- Form filling only test

### 2. CreateRequisitionDataDriven.spec.ts
Data-driven tests using external test data:
- Multiple test data configurations
- Default configuration test
- Parameterized individual steps
- Validation tests

### 3. CreateRequisitionEnhanced.spec.ts
Enhanced tests with utilities:
- Logging and screenshots
- Retry logic for flaky steps
- Dynamic test data generation
- Validation and error handling

## Test Data

### requisitionTestData.ts
Contains test data configurations:
- `RequisitionTestData` interface
- `requisitionTestData[]` array with multiple configurations
- `defaultRequisitionData` for standard tests

Example test data structure:
```typescript
{
  loginUrl: 'https://qa2.hwlmsp.com/user/loggedOut?referrer=%2F&loginName=&statusCode=401&softSSOMessage=',
  username: 'progmgr20',
  password: 'Y4mth@ng!24',
  startTime: '10',
  endTime: '18',
  shiftCount: '5',
  orientationValue: '10',
  testDescription: 'Standard 8-hour shift with 5 days'
}
```

## Utilities

### TestUtils.ts
Utility functions for enhanced testing:
- `waitFor(milliseconds)` - Wait for specific time
- `takeScreenshot(name)` - Take screenshots
- `verifyUrl(expectedUrl)` - Verify page URL
- `waitForElement(selector)` - Wait for element visibility
- `retryAction(action, maxAttempts, delay)` - Retry failed actions
- `generateRandomString(length)` - Generate random test data
- `logStep(description)` - Log test steps

## Usage Examples

### Basic Usage
```typescript
import { LoginPage } from '../pages/LoginPage';
import { CreateRequisitionPage } from '../pages/CreateRequisitionPage';

test('Create Requisition', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const createRequisitionPage = new CreateRequisitionPage(page);
  
  await loginPage.performLogin('username', 'password', 'loginUrl');
  await createRequisitionPage.createCompleteRequisition('10', '18', '5', '10');
});
```

### Data-Driven Usage
```typescript
import { requisitionTestData } from '../testData/requisitionTestData';

requisitionTestData.forEach((testData, index) => {
  test(`Create Requisition - ${testData.testDescription}`, async ({ page }) => {
    // Test implementation using testData
  });
});
```

### Enhanced Usage with Utilities
```typescript
import { TestUtils } from '../utils/TestUtils';

test('Enhanced Create Requisition', async ({ page }) => {
  const testUtils = new TestUtils(page);
  
  testUtils.logStep('Starting test');
  await testUtils.takeScreenshot('start');
  
  // Test implementation with logging and screenshots
  
  await testUtils.verifyUrl('expectedUrl');
});
```

## Running Tests

### Run all Create Requisition tests:
```bash
npx playwright test CreateRequisition
```

### Run specific test file:
```bash
npx playwright test CreateRequisitionTest.spec.ts
npx playwright test CreateRequisitionDataDriven.spec.ts
npx playwright test CreateRequisitionEnhanced.spec.ts
```

### Run with specific browser:
```bash
npx playwright test CreateRequisition --project=chromium
npx playwright test CreateRequisition --project=firefox
npx playwright test CreateRequisition --project=webkit
```

### Run in headed mode:
```bash
npx playwright test CreateRequisition --headed
```

### Generate HTML report:
```bash
npx playwright test CreateRequisition --reporter=html
```

## Best Practices

1. **Page Object Model**: All page interactions are encapsulated in page classes
2. **Data-Driven Testing**: Test data is externalized for easy maintenance
3. **Reusable Methods**: Common workflows are implemented as reusable methods
4. **Error Handling**: Retry logic and validation for flaky elements
5. **Logging**: Comprehensive logging for debugging
6. **Screenshots**: Automatic screenshots for test documentation
7. **Modular Design**: Separate concerns for login, requisition creation, and utilities

## Maintenance

- Update locators in page classes when UI changes
- Add new test data configurations in `requisitionTestData.ts`
- Extend utility functions in `TestUtils.ts` as needed
- Add new test scenarios in respective test files

## Troubleshooting

1. **Element not found**: Check if locators need updating
2. **Timeout issues**: Increase wait times or add retry logic
3. **Flaky tests**: Use retry mechanisms and better wait strategies
4. **Data issues**: Verify test data configurations are correct