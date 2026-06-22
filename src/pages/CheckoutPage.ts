import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {

  readonly countryInput: Locator;
  readonly countryResults: Locator;
  readonly placeOrderButton: Locator;

  constructor(page: Page) {
    super(page);

    this.countryInput = page.locator("[placeholder*='Country']");
    this.countryResults = page.locator(".ta-results button");
    this.placeOrderButton = page.locator(".action__submit");
  }

  async selectCountry(country: string): Promise<void> {

  await this.countryInput.pressSequentially('ind');

  await this.countryResults.first().waitFor({
    state: 'visible',
    timeout: 10000
  });

  const count = await this.countryResults.count();

  for (let i = 0; i < count; i++) {

    const countryText = await this.countryResults
      .nth(i)
      .textContent();

    console.log(`Country ${i}:`, countryText);

    if (
      countryText?.trim().toLowerCase() ===
      country.toLowerCase()
    ) {

      await this.countryResults.nth(i).click();

      console.log('Selected Country:', countryText);

      break;
    }
  }
}
async placeOrder(): Promise<void> {

  await this.placeOrderButton.waitFor({
    state: 'visible',
    timeout: 10000
  });

  await this.placeOrderButton.click();

  await this.page.waitForLoadState('networkidle');

}
}