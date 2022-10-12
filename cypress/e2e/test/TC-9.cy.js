import mainPage from "../page/main.page";


describe('Move slider "Make outbound calls" to "362,000" and get value is "2778"', () => {

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
    mainPage.scrollSwitchSaveBlock();
    mainPage.moveOutboundCallsSwitcher();
    mainPage.clickVoice();
    mainPage.checkSaveUP();
  });
})

  
   