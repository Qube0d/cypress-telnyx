import mainPage from '../page/main.page';
import supportPage from '../page/support.page';
import aboutPage from '../page/about.company.page';
import careersPage from '../page/careers.page';
import dataAndPrivacy from '../page/dataAndPrivacy.page';
import miscPage from '../page/misc.page';
import developersDocs from '../page/developers.docs.page';
import blogPage from '../page/blog.page';
import resourceHub from '../page/resource.hub.page';
import releaseNotesPage from '../page/release.notes.page';


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

    mainPage.clickDeveloperDocs();
    developersDocs.headerdevelopersDocs();
    cy.go('back')
    mainPage.clickBlog();
    blogPage.headerBlog();
    cy.go('back')
    mainPage.clickResourceHub();
    resourceHub.headerResourceHub();
    cy.go('back')
    mainPage.clickReleaseNotes();
    releaseNotesPage.headerReleaseNotes();
  });
})














 

















// And('I click back button from browser', () => {
//     cy.go('back');
// });

// Support Center
// Report Abuse
// Privacy Policy
// Cookie Policy
// Acceptable Use Policy
// Website Terms and Conditions
// Law Enforcement Request
