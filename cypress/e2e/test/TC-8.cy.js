import mainPage from "../page/main.page";
import networkPage from '../page/network.page'


describe('Check Our pricing from network page', () => {

  beforeEach(() => {
    cy.visit('https://telnyx.com/');
    cy.viewport(1940, 1080);
    cy.get('body').then(($body) => {
      if ($body.find('[aria-label="close and deny"]').length > 0) {
        cy.get('[aria-label="close and deny"]').click();
      }
    });
  });

  it('Check Our pricing from network page', () => {
    mainPage.clickNetworkPage();
    networkPage.clickSeeOurPricing();
  });
})

