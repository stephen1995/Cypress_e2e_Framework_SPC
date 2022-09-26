Feature: Learning

    @Me
    Scenario: Test staff
        Given I have random page
        And I add "Cucumber" to my cart


    @focus     @me
    Scenario: Select a flight greater than 300
        Given  I visit flights page
        And search for a economy flight
        And select a 300 dollars flight
#And enter valid credentials