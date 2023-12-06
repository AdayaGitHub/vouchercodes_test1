const homepageBannerHeading = () => cy.get('[data-qa="el:homePageBannerHeading"]');
const homepageBannerSubtext = () => cy.get('[data-qa="el:homePageBannerSubText"]');


export default class HomePage {
    verifyHomePage() {
        cy.url().should('eq', 'https://www.vouchercodes.co.uk/');
        homepageBannerHeading().should('be.visible');
        homepageBannerSubtext().should('be.visible');
    }

}