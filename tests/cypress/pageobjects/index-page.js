class IndexPage {
    elements = {
        getLogPartLink: () => cy.get('.r-paddingBottom-19yat4t > .css-textHasAncestor-1jxf684'),
        getCalcHealthBtn: () => cy.get('.r-alignItems-1awozwy > .r-backgroundColor-14sbq61 > .css-text-146c3p1'),
        getResetMachineDataBtn: () => cy.get('.r-marginTop-156q2ks > .css-view-175oi2r > .css-text-146c3p1'),
        getPartNameInfo: () =>  cy.get('.r-alignItems-1awozwy > :nth-child(3)'),
        getFactoryHealthScoresInfo: () => cy.get('.r-alignItems-1awozwy > :nth-child(6)'),
        getMachineHealthScoresInfo: () => cy.get('.r-alignItems-1awozwy > :nth-child(8)'),
    }

    clickPleaseLogPartLink () {
        this.elements.getLogPartLink().click();
    }

    clickCalculateHealthButton () {
        this.elements.getCalcHealthBtn().click();
    }

    clickResetMachineDataButton () {
        this.elements.getResetMachineDataBtn().click();
    }

    assertPartNameInfo (text) {
        this.elements.getPartNameInfo().should('have.text', text);
    }

    assertFactoryHealthScores (text) {
        this.elements.getFactoryHealthScoresInfo().should('have.text', text);
    }

    assertMachineHealthScores (text) {
        this.elements.getMachineHealthScoresInfo().should('have.text', text);
    }
}

export const indexPage = new IndexPage();
