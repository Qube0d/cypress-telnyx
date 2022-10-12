
class MainPage {
    //HEADER
    locatorHeader = {
        ProductsDropDown() {
            return cy.get('.sc-14c941d7-7>ul>li:nth-child(1)>span');
        },
        SeeAllProducts() {
            return cy.get('header div a[href="/products"]');
        },
        PricingDropDown() {
            return cy.get('.sc-14c941d7-7>ul>li:nth-child(10)>span');
        },
        SmsAPI() {
            return cy.get('header a[href="/pricing/messaging"]');
        },
        SeeAllPricing() {
            return cy.get('[href="/pricing"]');
        },
        NetworkPage() {
            return cy.get('span a[href="/solutions/global-ip-network"]');
        },
        SignUp() {
            return cy.get('header li a[href="/sign-up"]');
        },
        CallUs() {
            return cy.get('[type="button"]');
        },
        SupportCenter() {
            return cy.get('.sc-ee0ec023-2 a:nth-child(3)');
        },
        LogIn() {
            return cy.get('.sc-ee0ec023-2 a:nth-child(4)');
        },
        TalkToExpert() {
            return cy.get('header li a[href="/contact-us"]');
        },
        JoinTheWaitlist() {
            return cy.get('header span a[href="/products/storage"]');
        }
    }
    //BODY
    locatorBody = {
    //Switch + Save with Telnyx.
    SwitchSaveBlock() {
            return cy.get('.sc-1e626587-1');   
    },
    VoiceButton() {
            return cy.get('.ButtonGroup__Container-sc-6knlsx-0>button:nth-child(1)');
    },
    SmsButton() {
            return cy.get('.ButtonGroup__Container-sc-6knlsx-0>button:nth-child(2)');
    },
    OutboundCallsSwitcher() {
            return cy.get('.ant-slider>div:nth-child(4)');
    },
    SaveUP() {
            return cy.get('.sc-1a5981e5-15') 
    }, 
    }
    //FOOTER
    locatorsFooter = {
        //BLOCK FOOTER
        FooterBlock() {
            return cy.get('.sc-7b6c9f9b-3');
        },
        //Resources
        DeveloperDocs() {
            return cy.get('footer a[href="https://developers.telnyx.com/docs/v2"]');
        },
        Blog() {
            return cy.get('footer a[href="/resources"]');
        },
        ResourceHub() {
            return cy.get('[href="/learn"]');
        },
        ReleaseNotes() {
            return cy.get('[href="/release-notes"]');
        },
        // Company
        AboutUS() {
            return cy.get('footer a[href="/company/about"]');
        },
        Careers() {
            return cy.get('footer a[href="/company/careers"]');
        },
        DataAndPrivacy() {
            return cy.get('footer a[href="/company/data-privacy"]');
        },
        SupportCenter() {
            return cy.get('footer a[href="https://support.telnyx.com/en/"]');
        },
        ReportAbuse() {
            return cy.get('[href="/report-abuse"]');
        },
        PrivacyPolicy() {
            return cy.get('[href="/privacy-policy"]');
        },
        CookiePolicy() {
            return cy.get('[href="/cookie-policy"]');
        },
        AcceptableUsePolicy() {
            return cy.get('[href="/acceptable-use-policy"]');
        },
        WebsiteTermsAndConditions() {
            return cy.get('[href="/terms-and-conditions"]');
        },
        LawEnforcementRequest() {
            return cy.get('[href="https://telnyx.com/law-enforcement-request"]');
        },
    
        //Mission Control

        SignUp() {
            return cy.get('footer a[href="/sign-up"]');
        },
        LogIn() {
            return cy.get('footer a[href="https://portal.telnyx.com/"]');
        },
    
        //Social

        ConnectOnLinkedIn() {
            return cy.get('[href="https://www.linkedin.com/company/telnyx/"]');
        },
        FollowOnTwitter() {
            return cy.get('[href="https://twitter.com/telnyx"]');
        },
        FollowOnFacebook() {
            return cy.get('[href="https://www.facebook.com/Telnyx/"]');
        }
    }

    //HEADER
    focusProductsDropDown() {
        //cy.get('.sc-14c941d7-7>ul>li:nth-child(1)>span').contains('See all products').click()
        this.locatorHeader.ProductsDropDown().click();
        //cy.wait('See all products').should('be.visible');
        //cy.get('select').select().should('have.text', 'See all products');
        //this.locatorHeader.ProductsDropDown().focused()
        //this.locatorHeader.ProductsDropDown().wait(2000);
    }
    clickSeeAllProducts() {
        this.locatorHeader.SeeAllProducts().click({ force: true })
        //this.locatorHeader.SeeAllProducts().invoke('removeAttr', 'target').click();
    }
    URLSeeAllProducts() {
        cy.url().should('eq', 'https://telnyx.com/products')
    }
    focusPricingDropDown() {
        this.locatorHeader.PricingDropDown().click();
    }
    clickSeeAllPricing() {
        this.locatorHeader.SeeAllPricing().click({ force: true })
    }
    URLSeeAllPricing() {
        cy.url().should('eq', 'https://telnyx.com/pricing')
    }
    clickSmsAPI() {
        this.locatorHeader.SmsAPI().click({ force: true })
        cy.url().should('eq', 'https://telnyx.com/pricing/messaging')
    }
    















    clickSignUp() {
        this.locatorHeader.SignUp().invoke('removeAttr', 'target').click();
    }
    checkHeaderSignUp(){
        this.locatorHeader.SignUp().should('have.text', 'Sign up', 'visible');
    }
    clickNetworkPage() {
        this.locatorHeader.NetworkPage().invoke('removeAttr', 'target').click();
        this.locatorHeader.NetworkPage().should('have.text', 'Network', 'visible');
        cy.url().should('eq', 'https://telnyx.com/solutions/global-ip-network')
    }

    //BODY
    //Switch + Save with Telnyx.
    scrollSwitchSaveBlock() {
        this.locatorBody.SwitchSaveBlock().scrollIntoView().wait(2000);
    }
    clickVoice() {
        this.locatorBody.VoiceButton().invoke('removeAttr','target').click()
    }
    moveOutboundCallsSwitcher() {
        this.locatorBody.OutboundCallsSwitcher().first()
        .trigger('mousedown', { button: 0 }, { force: true })
        .wait(2000)
        .trigger('mousemove', 50, 0, { force: true })
        .trigger('mouseup'); 
    }
    checkSaveUP() {
        this.locatorBody.SaveUP().first().contains('$2778');
    }






    //FOOTER
    //BLOCK FOOTER
    scrollFooterBlock() {
        this.locatorsFooter.FooterBlock().scrollIntoView();
    }
    //Resources
    clickDeveloperDocs() {
        this.locatorsFooter.DeveloperDocs().invoke('removeAttr', 'target').click();
    }
    clickBlog() {
        this.locatorsFooter.Blog().invoke('removeAttr', 'target').click();
    }
    clickResourceHub() {
        this.locatorsFooter.ResourceHub().invoke('removeAttr', 'target').click();
    }
    clickReleaseNotes() {
        this.locatorsFooter.ReleaseNotes().invoke('removeAttr', 'target').click();
    }
    //Company
    clickAboutUSFooter() {
        this.locatorsFooter.AboutUS().invoke('removeAttr', 'target').click();
    }
    clickCareers() {
        this.locatorsFooter.Careers().invoke('removeAttr', 'target').click();
    }
    clickDataAndPrivacy() {
        this.locatorsFooter.DataAndPrivacy().invoke('removeAttr', 'target').click();
    }

    //Mission Control
    clickSignUpFooter() {
        this.locatorsFooter.SignUp().invoke('removeAttr', 'target').click();
    }
    checkHeaderSignUpFooter(){
        this.locatorsFooter.SignUp().should('have.text', 'Sign up ', 'visible');
    }

    scrollSupportCenter() {
        this.locatorsFooter.SupportCenter().scrollIntoView().should('be.visible');
    }
    clickSupportCenter() {
        this.locatorsFooter.SupportCenter().invoke('removeAttr', 'target').click();
    }





        //Social

    clickConnectOnLinkedIn() {
        this.locatorsFooter.ConnectOnLinkedIn().invoke('removeAttr', 'target').click();
    }
    checkUrlLinkedIn() {
        //cy.url().should('eq', 'https://www.linkedin.com/company/telnyx/')
        cy.url().should('include', '/company/telnyx')
    }
    clickFollowOnTwitter() {
        this.locatorsFooter.FollowOnTwitter().invoke('removeAttr', 'target').click();
    }
    checkUrlFollowOnTwitter() {
        cy.url().should('eq', 'https://twitter.com/telnyx')
    }


}

module.exports = new MainPage();