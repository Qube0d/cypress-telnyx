import mainPage from '../page/main.page';
import blogPage from "../page/blog.page";

describe('Check buttons filter from "Filter by product" in "Blog" page', () => {

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
    mainPage.scrollFooterBlock();
    mainPage.clickBlog();
    cy.url().should('eq', 'https://telnyx.com/resources')
    blogPage.clickMessaging();
    cy.url().should('include', '/resources?topic=Messaging')
    blogPage.clickVerifyApi();
    cy.url().should('include', 'resources?topic=Verify%20API')
    blogPage.clickSipTrunking();
    cy.url().should('include', 'resources?topic=SIP%20Trunking')
    blogPage.clickFax();
    cy.url().should('include', 'resources?topic=Fax')
    blogPage.clickWireless();
    cy.url().should('include', 'resources?topic=Wireless')
  });
})






