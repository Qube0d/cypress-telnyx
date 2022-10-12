class MessagingPage {
    locator = {
    SmsPricingButton() {
        return cy.get('.sc-ecffda1a-4>button:nth-child(1)');
    },
    InDepthMessagingPricing(){
        return cy.get('[id="__next"] div.sc-3ef5d51e-23:nth-child(6)');
    },
    operatorKievstar() {
        return cy.get('[id="__next"] div.sc-3ef5d51e-23:nth-child(6) div.sc-3ef5d51e-15:nth-child(4)>div');
        },
    countryUkraine() {
        return cy.get('[href="/pricing/messaging/ua"]');
    }
    }
    selectSmsPricingCountry() {
        this.locator.SmsPricingButton().click();
    }
    clickCountryUkraine() {
        this.locator.countryUkraine().click({ force: true });
    }
    scrollInDepthMessagingPricing() {
        this.locator.InDepthMessagingPricing().scrollIntoView();
        //this.locator.InDepthMessagingPricing().scrollIntoView();
    }
    scrollToKievstar() {
        this.locator.operatorKievstar().should('be.visible');
        this.locator.operatorKievstar().should('have.text', 'Kyivstar$0.1040 per message');
    }

}
module.exports = new MessagingPage();