import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';


export class CartPage extends BasePage {


  readonly cartProducts: Locator;
  readonly checkoutButton: Locator;


  constructor(page: Page) {

    super(page);


    this.cartProducts =
      page.locator('.cartSection h3');


    this.checkoutButton =
      page.locator('button:has-text("Checkout")');

  }



  async isProductPresent(
    productName: string
  ): Promise<boolean> {


    await this.page.waitForLoadState(
      'networkidle'
    );


    await this.page.waitForTimeout(2000);


    const products =
      await this.cartProducts.allTextContents();


    console.log(
      'Products In Cart:',
      products
    );


    return products.some(
      product =>
        product.trim() === productName
    );

  }



  async proceedToCheckout(): Promise<void> {


    await this.checkoutButton.waitFor({

      state: 'visible',

      timeout: 10000

    });


    await this.checkoutButton.click();


  }


}