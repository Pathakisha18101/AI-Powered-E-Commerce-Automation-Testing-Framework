export class TokenManager {


    private static token:string;


    static setToken(token:string){

        this.token = token;

    }


    static getToken(){

        return this.token;

    }


    static clearToken(){

        this.token = "";

    }


}