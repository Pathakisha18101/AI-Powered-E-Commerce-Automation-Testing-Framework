import { Before, After, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { chromium, Browser } from "@playwright/test";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { context } from "../support/world";

dotenv.config();

setDefaultTimeout(60000);

let browser: Browser;

Before(async () => {
    browser = await chromium.launch({
    headless: false
});

    const page = await browser.newPage();

    context.initialize(page);
});

After(async function ({ result }) {

    if (
        result?.status === Status.FAILED &&
        context.page
    ) {

        const screenshotDir = "screenshots";

        if (!fs.existsSync(screenshotDir)) {
            fs.mkdirSync(screenshotDir, {
                recursive: true
            });
        }

        const screenshotPath =
            path.join(
                screenshotDir,
                `${Date.now()}-failure.png`
            );

        await context.page.screenshot({
            path: screenshotPath,
            fullPage: true
        });

        console.log("===================================");

        console.log("Screenshot Saved:", screenshotPath);

        console.log("Current URL:", context.page.url());

        console.log("Current Title:", await context.page.title());

        console.log("===================================");

    }

    if (browser) {
        await browser.close();
    }

});