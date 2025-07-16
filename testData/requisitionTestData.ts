export interface RequisitionTestData {
  loginUrl: string;
  username: string;
  password: string;
  startTime: string;
  endTime: string;
  shiftCount: string;
  orientationValue: string;
  testDescription: string;
}

export const requisitionTestData: RequisitionTestData[] = [
  {
    loginUrl: 'https://qa2.hwlmsp.com/user/loggedOut?referrer=%2F&loginName=&statusCode=401&softSSOMessage=',
    username: 'progmgr20',
    password: 'Y4mth@ng!24',
    startTime: '10',
    endTime: '18',
    shiftCount: '5',
    orientationValue: '10',
    testDescription: 'Standard 8-hour shift with 5 days'
  },
  {
    loginUrl: 'https://qa2.hwlmsp.com/user/loggedOut?referrer=%2F&loginName=&statusCode=401&softSSOMessage=',
    username: 'progmgr20',
    password: 'Y4mth@ng!24',
    startTime: '08',
    endTime: '16',
    shiftCount: '3',
    orientationValue: '15',
    testDescription: 'Morning shift with 3 days and extended orientation'
  },
  {
    loginUrl: 'https://qa2.hwlmsp.com/user/loggedOut?referrer=%2F&loginName=&statusCode=401&softSSOMessage=',
    username: 'progmgr20',
    password: 'Y4mth@ng!24',
    startTime: '14',
    endTime: '22',
    shiftCount: '4',
    orientationValue: '5',
    testDescription: 'Evening shift with 4 days and minimal orientation'
  }
];

export const defaultRequisitionData: RequisitionTestData = {
  loginUrl: 'https://qa2.hwlmsp.com/user/loggedOut?referrer=%2F&loginName=&statusCode=401&softSSOMessage=',
  username: 'progmgr20',
  password: 'Y4mth@ng!24',
  startTime: '10',
  endTime: '18',
  shiftCount: '5',
  orientationValue: '10',
  testDescription: 'Default test configuration'
};