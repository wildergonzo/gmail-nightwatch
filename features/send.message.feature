Feature: Send Message

Scenario: Compose message to a single recipient

  Given User is logged into Gmail
   When User clicks on Compose button
    And User enters a recipient
    And User enters a message subject
    And User enters a message body
    And User clicks on Send button
   Then message should be sent to recipient