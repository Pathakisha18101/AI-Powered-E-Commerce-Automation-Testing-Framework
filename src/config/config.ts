import dotenv from "dotenv";
import { environment } from "./environment";


dotenv.config();


function requiredEnv(key:string):string {

    const value = process.env[key];


    if(!value){

        throw new Error(
            `Missing environment variable: ${key}`
        );

    }


    return value;

}



export const config = {


    environment: environment.name,


    baseUrl:
        requiredEnv("BASE_URL"),



    uiBaseUrl:
        requiredEnv("UI_BASE_URL"),



    userEmail:
        requiredEnv("USER_EMAIL"),



    userPassword:
        requiredEnv("USER_PASSWORD"),


};