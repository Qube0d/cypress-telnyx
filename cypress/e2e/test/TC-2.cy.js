import mainPage from '../page/main.page';
const footerCompanyMenuItems = [
    'About Us',
    'Careers',
    'Data & Privacy',
    'Support Center',
    'Report Abuse',
    'Privacy Policy',
    'Cookie Policy',
    'Acceptable Use Policy',
    'Website Terms and Conditions',
    'Law Enforcement Request',
  ];

describe('Check footer Company list', () => {

  beforeEach(() => {
      cy.visit('https://telnyx.com/');
      cy.viewport(1940, 1080);
      cy.get('body').then(($body) => {
        if ($body.find('[aria-label="close and deny"]').length > 0) {
      cy.get('[aria-label="close and deny"]').click();
      }
    });
    });

  it('I scroll down main page too footer', () => {
    mainPage.scrollFooterBlock();
});
  it('I check if all menu sections have the necessary tabs', () => {
    footerCompanyMenuItems.length
  });
})