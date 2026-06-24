import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser } from "@playwright/test";
import dotenv from "dotenv";
import { context } from "../support/world";

dotenv.config();

setDefaultTimeout(60000);

let browser: Browser;

Before(async () => {
    browser = await chromium.launch({
        headless: true
    });

    const page = await browser.newPage();

    context.initialize(page);
});

After(async () => {
    if (browser) {
        await browser.close();
    }
});