import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { OrderConfirmationPage } from "../pages/OrderConfirmationPage";

import { AuthApi } from "../api/AuthAPI";
import { ApiClient } from "../api/ApiClient";

import { TokenManager } from "../utils/TokenManager";
import { OrderStore } from "../utils/OrderStore";

export class PurchaseFlow {

private authApi: AuthApi;
private apiClient: ApiClient;

constructor(
    private loginPage: LoginPage,
    private dashboardPage: DashboardPage,
    private cartPage: CartPage,
    private checkoutPage: CheckoutPage,
    private orderConfirmationPage: OrderConfirmationPage
) {

    this.apiClient = new ApiClient();

    this.authApi = new AuthApi(
        this.apiClient
    );

}

async apiLogin(
    username: string,
    password: string
) {

    await this.apiClient.initialize();

    const token =
        await this.authApi.login(
            username,
            password
        );

    TokenManager.setToken(token);

    console.log(
        "API Token Generated Successfully"
    );

}

async login(
    username: string,
    password: string
) {

    console.log("========== UI LOGIN START ==========");

    console.log("Opening Login Page...");

    await this.loginPage.navigate();

    console.log("Current URL:", await this.loginPage.getCurrentUrl());

    console.log("Entering Credentials...");

    await this.loginPage.login(
        username,
        password
    );

    console.log("Checking Dashboard...");

    const dashboardLoaded =
        await this.dashboardPage.isDashboardLoaded();

    console.log("Dashboard Loaded =", dashboardLoaded);

    if (!dashboardLoaded) {

        throw new Error(
            "Dashboard validation failed after login"
        );

    }

    console.log("========== UI LOGIN SUCCESS ==========");
}

async searchAndAddProduct(
    productName: string
) {

    const productAvailable =
        await this.dashboardPage.isProductAvailable(
            productName
        );

    if (!productAvailable) {

        throw new Error(
            `Product not available: ${productName}`
        );

    }

    await this.dashboardPage.addProductToCart(
        productName
    );

    await this.dashboardPage.goToCart();

}

async completeCheckout(
    country: string
) {

    await this.cartPage.proceedToCheckout();

    await this.checkoutPage.selectCountry(
        country
    );

    await this.checkoutPage.placeOrder();

}

async validateOrderCreated() {

    const orderId =
        await this.orderConfirmationPage.getOrderId();

    if (!orderId) {

        throw new Error(
            "Order creation failed"
        );

    }

    OrderStore.setOrderId(orderId);

    return orderId;

}


}
