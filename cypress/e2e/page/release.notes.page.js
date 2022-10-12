class ReleaseNotesPage{
    locator = {
        ReleaseNotes() {
            return cy.get('h1.Text-sc-5o8owa-0');
        }
    }
        headerReleaseNotes() {
            this.locator.ReleaseNotes().should('have.text', 'Release Notes');
    }
}
module.exports = new ReleaseNotesPage();