export class OrderStore {

    private static orderId: string;

    static setOrderId(
        orderId: string
    ) {

        this.orderId = orderId;

    }

    static getOrderId() {

        return this.orderId;

    }

}