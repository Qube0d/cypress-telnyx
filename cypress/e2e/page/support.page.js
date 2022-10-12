class SupportPage{
    locator = {
    SupportPageTitle() {
            return cy.get('[class="header__headline"]')
        }
    };
    checkSupportPageTitle() {
        this.locator.SupportPageTitle().should('have.text', 'Support Center');
    }




}

module.exports = new SupportPage();