Feature: User Purchase Flow


  Scenario: User should place order successfully


    Given user logs into application


    When user adds product "ZARA COAT 3" to cart


    And user completes checkout with country "India"


    Then order should be created successfully