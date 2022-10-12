class BlogPage{
    locator = {
    blog() {
            return cy.get('h1.Text-sc-5o8owa-0');
        }
    }
    filterByProduct = {
        messaging() {
            return cy.get('.sc-afdc1d86-2>ul>li:nth-child(1)');
        },
        verifyApi() {
            return cy.get('.sc-afdc1d86-2>ul>li:nth-child(2)');
        },
        sipTrunking() {
            return cy.get('.sc-afdc1d86-2>ul>li:nth-child(3)');
        },
        fax() {
            return cy.get('.sc-afdc1d86-2>ul>li:nth-child(4)');
        },
        wireless() {
            return cy.get('.sc-afdc1d86-2>ul>li:nth-child(5)');
        }
    }
    headerBlog() {
            this.locator.blog().should('have.text', 'Blog');
    }
    clickMessaging() {
        this.filterByProduct.messaging().click({ multiple: true });
    }
    clickVerifyApi() {
        this.filterByProduct.verifyApi().click({ multiple: true });
    }
    clickSipTrunking() {
        this.filterByProduct.sipTrunking().click({ multiple: true });
    }
    clickFax() {
        this.filterByProduct.fax().click({ multiple: true });
    }
    clickWireless() {
        this.filterByProduct.wireless().click({ multiple: true });
    }


}

module.exports = new BlogPage();