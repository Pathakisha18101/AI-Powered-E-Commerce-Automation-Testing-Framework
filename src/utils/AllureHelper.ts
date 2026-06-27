import * as allure from "allure-cucumberjs";


export class AllureHelper {


    static async attachScreenshot(
        name: string,
        screenshot: Buffer
    ) {

        // 'allure-cucumberjs' types may not expose addAttachment; cast to any to call underlying implementation
        await (allure as any).addAttachment(
            name,
            screenshot,
            "image/png"
        );

    }

}