Feature: Main Page testing

    Testing of main Page
    @Smoke
    Scenario: Verify links are not broken for main news
        Given I visit arstechnica main page
        When I visit each link
        Then I am taken to the content selected

    @Smoke
    Scenario: User is able to Sign In
        Given I visit arstechnica main page
        When I click on Sign In link
        And I perform Sign In
        Then I am able to click Profile Icon
        And I see my username

    @Sanity
    Scenario: User is taken to register page after clicking on Sign Up button
        Given I visit arstechnica main page
        When I click on Sign In link
        And I click on Sign Up button
        Then I am taken to register page

    @Regression
    Scenario: User is taken to sendpassword page after clicking on Having trouble? link
        Given I visit arstechnica main page
        When I click on Sign In link
        And I click on Having trouble link
        Then I am taken to sendpassword page