class CareersPage{
    locator = {
        careersAtTelnyx() {
            return cy.get('.sc-f6d2e4fb-2>div');
        }
    }
    headerCareersAtTelnyx() {
        this.locator.careersAtTelnyx().should('have.text', 'careers at telnyx');
    }
}

module.exports = new CareersPage();