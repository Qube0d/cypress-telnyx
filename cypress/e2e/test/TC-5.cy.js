import mainPage from "../page/main.page";
import signUpPage from "../page/sign.up.page";


describe('Check Sign up button footer', () => {

  beforeEach(() => {
    cy.visit('https://telnyx.com/');
    cy.viewport(1940, 1080);
    cy.get('body').then(($body) => {
      if ($body.find('[aria-label="close and deny"]').length > 0) {
        cy.get('[aria-label="close and deny"]').click();
      }
    });
  });

  it('Check Sign up button footer', () => {
    mainPage.scrollFooterBlock();
    mainPage.checkHeaderSignUpFooter();
    mainPage.clickSignUpFooter();
    cy.url().should('eq', 'https://telnyx.com/sign-up');
    signUpPage.checkHeaderSignUp();
  });
})

        
       