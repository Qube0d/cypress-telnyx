
class SignUpPage{
    locator = {
    SignUp() {
            return cy.get('h1.Text-sc-5o8owa-0');
        },
    CreateAccount() {
        return cy.get('[type="submit"]');    
        },
    EmailField() {
        return cy.get('[id="email"]');
        },
    EmailError() {
        return cy.get('[id="email_error"]');    
        },
    PasswordField() {
        return cy.get('[id="password"]');  
        },
    FullNameField() {
        return cy.get('[id="full_name"]');  
        },
    FullNameErrore() {
        return cy.get('[id="full_name_error"]');
        },
    TermsAndConditionsCheckBox() {
        return cy.get('.sc-26f7330-5>div>svg>rect');    
        },
    EmailReceiveCheckBox() {
        return cy.get('.sc-26f7330-4 div:nth-child(2)>div>svg>rect');    
        },
    }
    checkHeaderSignUp(){
        this.locator.SignUp().should('have.text', 'Create a free account', 'visible');
    }
    clickCreateAccount() {
        this.locator.CreateAccount().click();
    }
    checkAlertEmailErrore() {
        this.locator.EmailError().should('be.visible');
    }
    checkAlertFullNameErrore() {
        this.locator.FullNameErrore().should('be.visible');
    }
    fillFullNameField() {
        //this.locator.FullNameField().type()
        this.locator.FullNameField().type('John Dou');
    }
    fillEmailField() {
        this.locator.EmailField().type('test@gmail.com');
    }
    fillPasswordField() {
        this.locator.PasswordField().type('123Test123');
    }
    clickTermsAndConditionsCheckBox() {
        this.locator.TermsAndConditionsCheckBox().click();
    }
    clickEmailReceiveCheckBox() {
        this.locator.EmailReceiveCheckBox().click();
    }
    PasswordMust() {
        cy.get('[id="password_requirements"]').should('be.visible');
    }

    fillAll({ login, name, pass }) {
        //this.checkHeaderSignUp();
        if (login) {
            cy.get('[id="full_name"]').type(login);
            //this.locator.EmailField.type(login);    
        }
        if (name) {
            cy.get('[id="email"]').click();
            cy.get('[id="email"]').type(name);
            //this.locator.FullNameField.type(name);
        }
        if (pass) {
            cy.get('[id="password"]').type(pass);
            //this.locator.PasswordField.type(pass)
        }

        //this.clickCreateAccount();
    }

}
module.exports = new SignUpPage();
