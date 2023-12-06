import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import RestuarantsPage from '../../e2e/test/modules/RestaurantsPage';

const restaurants = new RestuarantsPage();

Then(/^I should be directed to the Restaurants page$/, () => {
    restaurants.confirmRestaurantsPage();
  });

Given(/^I have entered the following voucher search details$/, (dataTable) => {
restaurants.enterVoucherSearchDetails(dataTable);
 });
 
Given(/^I have entered the following voucher search details for error$/, (dataTable) => {
    restaurants.enterVoucherSearchDetailsError(dataTable);
     }); 

Then(/^I confirm search for vouchers and vouchers are updated$/, () => {
    restaurants.confirmVoucherSearch();
 })