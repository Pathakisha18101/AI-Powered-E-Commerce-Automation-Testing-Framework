Feature:
Order Creation Flow


Scenario:
Customer successfully places an order


Given customer is logged into application

When customer searches for a product

And customer adds product to cart

And customer completes checkout

Then order should be created successfully

And order should be validated using API

And order should be visible in order history