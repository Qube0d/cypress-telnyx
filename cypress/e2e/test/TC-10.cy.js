import mainPage from '../page/main.page'

describe('Check Twitter button from footer', () => {

  beforeEach(() => {
    cy.visit('https://telnyx.com/');
    cy.viewport(1940, 1080);
    cy.get('body').then(($body) => {
      if ($body.find('[aria-label="close and deny"]').length > 0) {
        cy.get('[aria-label="close and deny"]').click();
      }
    });
  });

  it('Check Twitter button from footer', () => {
    mainPage.scrollFooterBlock();
    mainPage.clickFollowOnTwitter();
    mainPage.checkUrlFollowOnTwitter();
  });
})

