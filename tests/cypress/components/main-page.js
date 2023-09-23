class MainPage {
    elements = {
        getLogPartLink: () => cy.get('.r-paddingBottom-19yat4t > .css-textHasAncestor-1jxf684'),
        getCalcHealthBtn: () => cy.get('.r-alignItems-1awozwy > .r-backgroundColor-14sbq61 > .css-text-146c3p1'),
    }

    clickPleaseLogPartLink () {
        this.elements.getLogPartLink().click();
    }

    clickCalculateHealthButton () {
        this.elements.getCalcHealthBtn().click();
    }
}

export const mainPage = new MainPage();