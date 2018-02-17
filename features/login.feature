Feature: Login Gmail

Scenario: Successful login with valid credentials

  Given User is on Gmail login page
   When User enters a valid email
    And clicks on Next button
    And User enters a valid password
    And clicks on Next button
   Then User should be redirected to Gmail inbox