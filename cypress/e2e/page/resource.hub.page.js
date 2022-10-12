class ResourceHubPage{
    locator = {
    ResourceHub() {
            return cy.get('h1.Text-sc-5o8owa-0');
        }
    }
    headerResourceHub() {
            this.locator.ResourceHub().should('have.text', 'Resource Hub');
    }
}
module.exports = new ResourceHubPage();