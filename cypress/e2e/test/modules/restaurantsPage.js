const locationDropdownInput = () => cy.get('[data-qa="el:locationDropdown enabled:true"]');
const dateDropDown = () => cy.get('[name="day-select"][data-qa="el:selectInput"]');
const peopleDropdown = () => cy.get('[name="people-select"][data-qa="el:selectInput"]')
const findRestaurantsVoucherButton = () => cy.get('[data-qa="el:findRestaurantsVoucherButton"]');
const restaurantsPageHeading = () => cy.get('[data-qa="el:restaurantHeading"]');

export default class RestuarantsPage {
    enterVoucherSearchDetails(dataTable) {
        dataTable.hashes().forEach(element => {
            locationDropdownInput().should('be.enabled')
            locationDropdownInput().click().type(element.location).type('{downarrow}').type('{enter}').trigger('mouseout');
            dateDropDown().select(1).screenshot();
            dateDropDown().should('have.value', element.date).screenshot();
            peopleDropdown().select(element.people);
            peopleDropdown().should('have.value', element.people)

    });
}

enterVoucherSearchDetailsError(dataTable) {
    dataTable.hashes().forEach(element => {
        locationDropdownInput().should('be.enabled')
        locationDropdownInput().click().type(element.location).type('{downarrow}').type('{enter}').trigger('mouseout');
        dateDropDown().debug().select(element.date).screenshot();
        dateDropDown().should('have.value', element.date).screenshot();
        peopleDropdown().select(element.people);
        peopleDropdown().should('have.value', element.people)

});
}

    confirmVoucherSearch() {
        findRestaurantsVoucherButton().click();
        cy.url().should('include', 'search?');
    }

    confirmRestaurantsPage() {
        cy.url().should('include', 'https://www.vouchercodes.co.uk/restaurant-vouchers.html');
        restaurantsPageHeading().should('have.text', 'Find restaurant vouchers & offers near you');
        cy.wait(3000);
    }
}