import dotenv from "dotenv";
import path from "path";


const env =
    process.env.ENV || "qa";


const envFile =
    `.env.${env}`;



dotenv.config({

    path:
        path.resolve(
            process.cwd(),
            envFile
        )

});



export const environment = {


    name: env,


    file: envFile


};