class Footer {
    elements = {
        getMachineStateIcon: () => cy.get('[href="/"] > .r-maxWidth-dnmrzs'),
        getLogPartIcon: ()=> cy.get('[href="/two"] > .r-maxWidth-dnmrzs'),
    }

    clickMachineStateIcon() {
        this.elements.getMachineStateIcon().click();
    }

    clickLogPartIcon() {
        this.elements.getLogPartIcon().click();
    }
}

export const footer = new Footer();
