import mainPage from "../page/main.page";
import signUpPage from "../page/sign.up.page";


describe('Create account with wrong data', () => {

  beforeEach(() => {
    cy.visit('https://telnyx.com/');
    cy.viewport(1940, 1080);
    cy.get('body').then(($body) => {
      if ($body.find('[aria-label="close and deny"]').length > 0) {
        cy.get('[aria-label="close and deny"]').click();
      }
    });
  });

  it('Create account with wrong data', () => {
    mainPage.clickSignUp();
    cy.url().should('eq', 'https://telnyx.com/sign-up');
    signUpPage.checkHeaderSignUp();
    signUpPage.fillAll({ login: 'John Dou', name: 'test@gmail.com', pass: '123Test123' });
    signUpPage.clickEmailReceiveCheckBox();
    signUpPage.clickTermsAndConditionsCheckBox();
    signUpPage.clickCreateAccount();
    signUpPage.PasswordMust();
  });
})
