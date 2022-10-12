class DataAndPrivacy{
    locator = {
        DataAndPrivacy() {
            return cy.get('.sc-31a8cefb-6') 
        }
    }
    headerDataAndPrivacy() {
        this.locator.DataAndPrivacy().should('have.text', 'Data & Privacy');
    }
}
module.exports = new DataAndPrivacy();