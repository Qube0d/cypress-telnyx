class NetworkPage{
    locator={
        SeeOurPricing() {
            return cy.get('main a[href="/pricing"]');
        }

    }
    scrollSeeOurPricing() {
        this.locator.SeeOurPricing().scrollIntoView();
    }
    clickSeeOurPricing() {
        this.locator.SeeOurPricing().should('have.text', 'See our Pricing', 'visible');
        this.locator.SeeOurPricing().invoke('removeAttr', 'target').click();
        cy.url().should('eq', 'https://telnyx.com/pricing')
    }
}
module.exports = new NetworkPage();