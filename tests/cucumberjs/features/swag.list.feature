Feature: Swag List

	Background: Open the app
		Given I launch de Sauce Labs Swag Lab

	Scenario: I should be able to see that all products are present
		Given I go to the swag list page
		Then I should be able to see the swag item overview page containing 6 items

	Scenario: I should be able to add a product to the cart
		Given I go to the swag list page
		When I add the "Backpack" to the cart
		Then the cart should be updated to with 1 item
