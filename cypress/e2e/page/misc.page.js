import mainPage from "./main.page";
import aboutCompanyPage from "./about.company.page";
import careersPage from "./careers.page";


class MiscPage{
    

    mainPageCalcCheck() {
        cy.get('.Text-sc-5o8owa-0>a>span').should('be.visible');
    }

    clickBack() {
        cy.go('back');
    }




}
module.exports = new MiscPage();