Feature: Checkout a product

	Background: Open the app
		Given I launch de Sauce Labs Swag Lab
		And I go to the cart page

	Scenario: I should be able to do a complete checkout
		When I submit my personal info after going to checkout
		Then I would see the checkout complete page after confirming my order
