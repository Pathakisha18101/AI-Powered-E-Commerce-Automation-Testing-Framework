import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';


export class OrderConfirmationPage extends BasePage {


  readonly successMessage: Locator;
  readonly orderId: Locator;


  constructor(page: Page) {

    super(page);


    this.successMessage =
      page.locator('.hero-primary');


    this.orderId =
      page.locator('label.ng-star-inserted');

  }



  async getSuccessMessage(): Promise<string> {


    await this.successMessage.waitFor({

      state: 'visible',

      timeout: 10000

    });


    return (
      await this.successMessage.textContent()
    )?.trim() || '';

  }



  async getOrderId(): Promise<string> {


    await this.orderId.first().waitFor({

      state: 'visible',

      timeout: 10000

    });


    const id =
      await this.orderId.first().textContent();


    return id?.trim() || '';

  }


}