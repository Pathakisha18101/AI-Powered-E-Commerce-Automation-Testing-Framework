import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {

  readonly products: Locator;
  readonly productTitles: Locator;
  readonly dashboardProducts: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    super(page);

    this.products = page.locator('.card-body');
    this.productTitles = page.locator('.card-body b');
    this.dashboardProducts = page.locator('.card-body');
    this.cartButton = page.locator("[routerlink='/dashboard/cart']");
  }

  async isDashboardLoaded(): Promise<boolean> {

    await this.dashboardProducts.first().waitFor({
        state: "visible",
        timeout: 30000
    });

    return true;
}

  async getProductCount(): Promise<number> {

    await this.products.first().waitFor({
      state: 'visible',
      timeout: 10000
    });

    return await this.products.count();
  }

  async getAllProductNames(): Promise<string[]> {

    await this.products.first().waitFor({
      state: 'visible',
      timeout: 10000
    });

    return await this.productTitles.allTextContents();
  }

  async isProductAvailable(productName: string): Promise<boolean> {

    const products = await this.getAllProductNames();

    return products.includes(productName);
  }

  async addProductToCart(productName: string): Promise<void> {

    await this.products.first().waitFor({
      state: 'visible',
      timeout: 10000
    });

    const count = await this.products.count();

    console.log('Products Count:', count);

    for (let i = 0; i < count; i++) {

      const product = this.products.nth(i);

      const title = await product.locator('b').textContent();

      console.log(`Product ${i}:`, title);

      if (title?.trim() === productName) {

        console.log('Matched Product:', title);

        await product
          .locator('button')
          .filter({ hasText: 'Add To Cart' })
          .click();

        console.log('Add To Cart Clicked');

        await this.page.waitForTimeout(2000);

        break;
      }
    }
  }

  async goToCart(): Promise<void> {

    await this.cartButton.click();

  }
}