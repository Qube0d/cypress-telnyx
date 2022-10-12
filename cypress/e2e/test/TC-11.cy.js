import mainPage from '../page/main.page';

describe('Check "See all products" from "Products" blog', () => {

  beforeEach(() => {
    cy.visit('https://telnyx.com/');
    cy.viewport(1940, 1080);
    cy.get('body').then(($body) => {
      if ($body.find('[aria-label="close and deny"]').length > 0) {
        cy.get('[aria-label="close and deny"]').click();
      }
    });
  });

  it('Check "See all products" from "Products" blog', () => {
    mainPage.focusProductsDropDown();
    mainPage.clickSeeAllProducts();
    mainPage.URLSeeAllProducts();
  });
})


