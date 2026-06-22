import { Page } from "@playwright/test";


import { LoginPage } from "../../src/pages/LoginPage";
import { DashboardPage } from "../../src/pages/DashboardPage";
import { CartPage } from "../../src/pages/CartPage";
import { CheckoutPage } from "../../src/pages/CheckoutPage";
import { OrderConfirmationPage } from "../../src/pages/OrderConfirmationPage";


import { PurchaseFlow } from "../../src/business/PurchaseFlow";



export class TestContext {


    page!: Page;


    purchaseFlow!: PurchaseFlow;


    productName!: string;


    orderId!: string;




    async initialize(page: Page){



        this.page = page;



        const loginPage =

            new LoginPage(page);



        const dashboardPage =

            new DashboardPage(page);



        const cartPage =

            new CartPage(page);



        const checkoutPage =

            new CheckoutPage(page);



        const orderConfirmationPage =

            new OrderConfirmationPage(page);





        this.purchaseFlow =


            new PurchaseFlow(


                loginPage,

                dashboardPage,

                cartPage,

                checkoutPage,

                orderConfirmationPage


            );


    }


}