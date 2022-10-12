class DevelopersDocs{
    locator = {
    developersDocs(){
            return cy.get('header a[href="/"] span:nth-child(2)');
        }
    }
    headerdevelopersDocs() {
            this.locator.developersDocs().should('have.text', 'Developers');
    }

}
module.exports = new DevelopersDocs();