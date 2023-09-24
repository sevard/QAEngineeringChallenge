class TwoPage {
    elements = {
        getMachineNameDropDown: () => cy.get(':nth-child(2) > [data-testid="web_picker"]'),
        getPartNameDropDown: () => cy.get(':nth-child(4) > [data-testid="web_picker"]'),
        getPartValueInput: () => cy.get('.css-textinput-11aywtz'),
        getSaveBtn: () => cy.get(':nth-child(2) > .r-transitionProperty-1i6wzkk > .css-text-146c3p1'),
    }

    selectMachineName (value) {
        this.elements.getMachineNameDropDown().select(value);
    }

    selectPartName (value) {
        this.elements.getPartNameDropDown().select(value);
    }

    enterToPartValueInput (value) {
        this.elements.getPartValueInput().type(value)
    }

    clearPartValueInput() {
        this.elements.getPartValueInput().clear();
    }

    clickSaveButton() {
        this.elements.getSaveBtn().click();
    }
}

export const twoPage = new TwoPage();
