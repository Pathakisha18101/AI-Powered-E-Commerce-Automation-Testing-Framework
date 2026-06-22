Feature: User Login


  Scenario: Customer logs in successfully


    Given customer is on login page

    When customer enters valid username and password

    And customer clicks login button

    Then customer should navigate to product page



  Scenario: Customer login fails with invalid credentials


    Given customer is on login page

    When customer enters invalid username and password

    And customer clicks login button

    Then error message should be displayed