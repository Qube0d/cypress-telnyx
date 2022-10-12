class AboutPage{
    locator = {
        AboutUs() {
            return cy.get('.sc-f6d2e4fb-2 div:nth-child(1)');
    }
    }
    headerAboutUs() {
        this.locator.AboutUs().should('have.text', 'About Us');
    }
}

module.exports = new AboutPage();