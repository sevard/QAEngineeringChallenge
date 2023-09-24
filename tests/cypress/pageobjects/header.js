class Header {
    elements = {
        getHeaderTitle: () => 
            cy.get('[style="z-index: 0; display: flex;"] > .r-flexDirection-1d5kdc7 > :nth-child(2)'),
    }

    assertHeaderTitle(title) {
        this.elements.getHeaderTitle().should('contain.text', title);
    }
}

export const header = new Header();
