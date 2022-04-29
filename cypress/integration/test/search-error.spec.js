/// <reference types="cypress" />

context('search-error', () => {
    beforeEach(() => {
        cy.visit('https://www.vouchercodes.co.uk')
        cy.get('[data-qa="el:foodHeaderLink"]').should("be.visible").click();
 
    })
    
    it('should search for restaurant vouchers with the given info', () => {
    cy.get('[data-qa="el:restaurantHeading"]').should("contain.text", 'Find restaurant vouchers & offers near you')
    cy.get('[data-qa="el:locationDropdown enabled:true"]').type('London').should("have.value", 'London')
    .type('{downarrow}')
    .type('{enter}').screenshot()
    cy.debug().get('[data-qa="el:findRestaurantsVoucherButton"]').click().screenshot
    cy.url().should("include", 'restaurant-vouchers/search?lat=51.507217&&lng=-0.1275862&rl=London,%20UK')
    })
})