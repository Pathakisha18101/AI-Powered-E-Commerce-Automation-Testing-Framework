import { ApiClient } from "./ApiClient";
import { TokenManager } from "../utils/TokenManager";

export class OrderApi {

    constructor(
        private apiClient: ApiClient
    ) {}

    async getOrders() {

        const response =
            await this.apiClient
                .getContext()
                .get(
                    "/api/ecom/order/get-orders-for-customer",
                    {
                        headers: {
                            Authorization:
                                TokenManager.getToken()
                        }
                    }
                );

        return await response.json();

    }

}