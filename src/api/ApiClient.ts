import { APIRequestContext, request } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export class ApiClient {

    private apiContext!: APIRequestContext;

    async initialize() {

        this.apiContext =
            await request.newContext({

                baseURL:
                    process.env.BASE_URL,

                extraHTTPHeaders: {
                    "Content-Type":
                        "application/json"
                }

            });

    }

    getContext(): APIRequestContext {

        return this.apiContext;

    }

}