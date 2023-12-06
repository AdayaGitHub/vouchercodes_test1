import { Then, Given, When } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../e2e/test/modules/HomePage';

const homePage = new HomePage();

Given(/^I am on the homepage$/, () => {
    homePage.verifyHomePage();
  });