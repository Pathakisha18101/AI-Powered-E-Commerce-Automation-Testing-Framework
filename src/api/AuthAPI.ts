import { ApiClient } from "./ApiClient";

export class AuthApi {

    constructor(
        private apiClient: ApiClient
    ) {}

    async login(
        username: string,
        password: string
    ): Promise<string> {

        const response = await this.apiClient
            .getContext()
            .post("/api/ecom/auth/login", {

                data: {

                    userEmail: username,

                    userPassword: password

                }

            });

        const responseBody = await response.json();

        return responseBody.token;

    }

}