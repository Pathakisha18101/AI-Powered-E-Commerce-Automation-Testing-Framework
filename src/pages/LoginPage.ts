import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
  super(page);

  this.emailInput = this.page.locator('#userEmail');
  this.passwordInput = this.page.locator('#userPassword');
  this.loginButton = this.page.locator('[value="Login"]');
}

  async navigate() {

    console.log(
        "UI URL =",
        process.env.UI_BASE_URL
    );

    await this.page.goto(
        process.env.UI_BASE_URL!
    );

}

  async login(email: string, password: string): Promise<void> {

    console.log("Waiting for Email Field...");

    await this.emailInput.waitFor({
        state: "visible",
        timeout: 30000
    });

    console.log("Entering Email...");

    await this.emailInput.fill(email);

    console.log("Entering Password...");

    await this.passwordInput.fill(password);

    console.log("Clicking Login Button...");

    await this.loginButton.click();

    console.log("Waiting 5 seconds...");

    await this.page.waitForTimeout(5000);

    console.log("Current URL:", this.page.url());

    console.log("Current Title:", await this.page.title());

    const error =
        this.page.locator(".toast-error");

    if (await error.isVisible().catch(() => false)) {

        console.log(
            "LOGIN ERROR:",
            await error.textContent()
        );

    }

    await this.page.waitForURL("**/dashboard/**", {
        timeout: 30000
    });

    console.log("Dashboard Loaded");
}
  async setToken(token:string){


    await this.page.evaluate(

        (token)=>{


            localStorage.setItem(

                "token",

                token

            );


        },


        token


    );


}



async reload(){


    await this.page.reload();


}
}