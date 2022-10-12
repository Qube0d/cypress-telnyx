import mainPage from '../page/main.page';
import messagingPricePage from "../page/messaging.price.page";


describe('Check pricing for Kyivstar from "In-Depth Messaging pricing"', () => {

  beforeEach(() => {
    cy.visit('https://telnyx.com/');
    cy.viewport(1940, 1080);
    cy.get('body').then(($body) => {
      if ($body.find('[aria-label="close and deny"]').length > 0) {
        cy.get('[aria-label="close and deny"]').click();
      }
    });
  });

  it('Check pricing for Kyivstar from "In-Depth Messaging pricing"', () => {
    mainPage.focusPricingDropDown();
    mainPage.clickSmsAPI();
    messagingPricePage.clickCountryUkraine();
    messagingPricePage.scrollInDepthMessagingPricing();
    messagingPricePage.scrollToKievstar();
  });
})