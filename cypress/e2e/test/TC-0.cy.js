import supportPage from '../page/support.page';
import mainPage from '../page/main.page';


describe('Visit page "Support Center" from footer of main page', () => {

  beforeEach(() => {
      cy.visit('https://telnyx.com/');
      cy.viewport(1940, 1080);
      cy.get('body').then(($body) => {
        if ($body.find('[aria-label="close and deny"]').length > 0) {
      cy.get('[aria-label="close and deny"]').click();
      }
    });
    });
  
  it(`Scroll to footer block`, () => {
     mainPage.scrollFooterBlock();
    });
  it(`Click "Support Center" button`, () => {
     mainPage.clickSupportCenter();
     supportPage.checkSupportPageTitle();
    }); 
})
 