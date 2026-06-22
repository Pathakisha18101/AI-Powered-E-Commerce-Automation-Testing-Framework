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
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
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