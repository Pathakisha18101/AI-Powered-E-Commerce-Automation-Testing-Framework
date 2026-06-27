import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { config } from '../config';
import { logger } from '../utils/logger2';



export class LoginPage extends BasePage {


    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;



    constructor(page: Page) {

        super(page);


        this.emailInput =
            this.page.locator('#userEmail');


        this.passwordInput =
            this.page.locator('#userPassword');


        this.loginButton =
            this.page.locator('[value="Login"]');

    }





    async navigate() {


        logger.info(
            "Opening Login Page"
        );


        logger.info(
            `UI URL: ${config.uiBaseUrl}`
        );



        await this.page.goto(
            config.uiBaseUrl
        );



        logger.info(
            `Current URL: ${this.page.url()}`
        );


    }






    async login(
        email:string,
        password:string
    ):Promise<void>{



        logger.info(
            "Waiting for Email Field"
        );



        await this.emailInput.waitFor({

            state:"visible",

            timeout:30000

        });




        logger.info(
            `Email received: ${email}`
        );


        logger.info(
            `Email length: ${email.length}`
        );


        logger.info(
            `Password length: ${password.length}`
        );





        await this.emailInput.fill(
            email
        );



        const enteredEmail =
            await this.emailInput.inputValue();



        logger.info(
            `Email inside input: ${enteredEmail}`
        );




        await this.passwordInput.fill(
            password
        );



        logger.info(
            "Clicking Login Button"
        );



        await this.loginButton.click();




        await this.page.waitForTimeout(
            5000
        );




        logger.info(
            `Current URL after login: ${this.page.url()}`
        );



        logger.info(
            `Page Title: ${await this.page.title()}`
        );





        const error =
            this.page.locator(
                ".toast-error"
            );




        if(
            await error.isVisible()
            .catch(()=>false)
        ){


            const errorMessage =
                await error.textContent();



            logger.error(
                `LOGIN ERROR: ${errorMessage}`
            );


        }





        await this.page.waitForURL(

            "**/dashboard/**",

            {

                timeout:30000

            }

        );



        logger.info(
            "Dashboard Loaded Successfully"
        );

    }






    async setToken(
        token:string
    ){


        await this.page.evaluate(

            (token)=>{


                localStorage.setItem(
                    "token",
                    token
                );


            },

            token

        );


        logger.info(
            "Token stored in local storage"
        );

    }





    async reload(){


        logger.info(
            "Reloading Page"
        );


        await this.page.reload();


    }


}