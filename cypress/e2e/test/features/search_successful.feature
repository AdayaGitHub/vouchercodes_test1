Feature: User successfully searches for restaurant offers

Background:
Given I am on the homepage
And I expand the "Categories" menu
And I select "Restaurants"
Then I should be directed to the Restaurants page

Scenario: 
Given I have entered the following voucher search details
|  location |  date      |  people  |
|  London   |  Any  |  3       |
And I confirm search for vouchers and vouchers are updated