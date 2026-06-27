import fs from "fs";
import path from "path";


export class AIReportGenerator {



    generate(report:any){



        const folder =

        "reports/ai-analysis";



        if(!fs.existsSync(folder)){


            fs.mkdirSync(

                folder,

                {
                    recursive:true
                }

            );


        }





        const filePath =

        path.join(

            folder,

            "failure-analysis.json"

        );





        fs.writeFileSync(

            filePath,

            JSON.stringify(

                {

                    timestamp:
                    new Date().toISOString(),


                    analysis:
                    report


                },

                null,

                4

            )

        );




        console.log(

            "AI Report Generated:",

            filePath

        );



    }



}