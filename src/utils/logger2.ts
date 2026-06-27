import winston from "winston";
import fs from "fs";
import path from "path";


const logDirectory =
    path.join(process.cwd(), "logs");


if(!fs.existsSync(logDirectory)){

    fs.mkdirSync(logDirectory);

}



export const logger =
    winston.createLogger({


        level: "info",


        format:
            winston.format.combine(

                winston.format.timestamp(),


                winston.format.printf(
                    ({
                        timestamp,
                        level,
                        message
                    }) => {

                        return `${timestamp} ${level.toUpperCase()} ${message}`;

                    }

                )

            ),



        transports:[


            new winston.transports.File({

                filename:
                    path.join(
                        logDirectory,
                        "execution.log"
                    )

            }),



            new winston.transports.File({

                filename:
                    path.join(
                        logDirectory,
                        "error.log"
                    ),

                level:"error"

            })

        ]



    });



if(process.env.NODE_ENV !== "production"){


    logger.add(

        new winston.transports.Console()

    );


}