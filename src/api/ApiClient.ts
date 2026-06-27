import {
    APIRequestContext,
    request
} from "@playwright/test";


import { config } from "../config";

import { logger } from "../utils/logger2";




export class ApiClient {



    private apiContext!: APIRequestContext;





    async initialize(){



        logger.info(
            "Initializing API Context"
        );




        this.apiContext =
            await request.newContext({

                baseURL:
                    config.baseUrl,



                extraHTTPHeaders:{

                    "Content-Type":
                        "application/json"

                }


            });




        logger.info(
            `API Base URL: ${config.baseUrl}`
        );



        logger.info(
            "API Context Initialized Successfully"
        );


    }






    getContext()
    :APIRequestContext {



        return this.apiContext;


    }



}