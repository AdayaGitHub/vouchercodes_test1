const categoriesHeaderInactive = () => cy.get('[role="button"][data-qa="el:categoriesHeader active:false"]');

export default class HomePageMenuDropdown {

    expandMenuOption(menuOption) {
        if (menuOption !== null) {
            switch (menuOption) {
            case 'Categories':
                categoriesHeaderInactive().trigger('mouseover').click();
                break;    
        }
    }
}

selectOptionFromGoingOutHeader(goingOutOption) {
    cy.contains(goingOutOption).click();
}

}