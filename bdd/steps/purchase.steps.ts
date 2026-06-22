import {
    Given,
    When,
    Then
} from "@cucumber/cucumber";


import { context } from "../support/world";



Given(
    "user logs into application",
    async () => {

        await context.purchaseFlow.apiLogin(
            process.env.USER_EMAIL ?? "",
            process.env.USER_PASSWORD ?? ""
        );

        await context.purchaseFlow.login(
            process.env.USER_EMAIL ?? "",
            process.env.USER_PASSWORD ?? ""
        );

    }
);





When(
    "user adds product {string} to cart",
    async (productName: string) => {


        context.productName = productName;



        await context.purchaseFlow.searchAndAddProduct(


            productName


        );


    }

);





When(
    "user completes checkout with country {string}",
    async (country: string) => {


        await context.purchaseFlow.completeCheckout(


            country


        );


    }

);





Then(
    "order should be created successfully",
    async () => {


        const orderId =


            await context.purchaseFlow.validateOrderCreated();



        context.orderId = orderId;



        console.log(

            "Order ID:",

            orderId

        );


    }

);