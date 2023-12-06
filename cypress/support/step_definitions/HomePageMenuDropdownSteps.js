import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import HomePageMenuDropdown from '../../e2e/test/modules/homePageMenuDropdown';

const homePageDropDown = new HomePageMenuDropdown();

And(/^I expand the "([^"]*)" menu$/, (menuOption) => {
    homePageDropDown.expandMenuOption(menuOption);
  });

And(/^I select "([^"]*)"$/, (goingOutOption) => {
    homePageDropDown.selectOptionFromGoingOutHeader(goingOutOption);
  });  