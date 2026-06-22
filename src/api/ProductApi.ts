import { ApiClient } from "./ApiClient";
import { TokenManager } from "../utils/TokenManager";



export class ProductApi {



    constructor(

        private apiClient: ApiClient

    ){}




    async getProducts(){


    const response =

        await this.apiClient
        .getContext()
        .get("/api/ecom/product/get-all-products",
        {

            headers:{


                Authorization:

                `Bearer ${TokenManager.getToken()}`


            }

        });



    console.log(
        "STATUS:",
        response.status()
    );


    console.log(
        "CONTENT TYPE:",
        response.headers()["content-type"]
    );


    const text = await response.text();


    console.log(
        "RESPONSE:",
        text.substring(0,200)
    );



    return JSON.parse(text);


}

    async isProductAvailable(

        productName:string

    ){



        const products =

            await this.getProducts();




        return products.data.some(

            (product:any)=>


                product.productName === productName


        );


    }



}