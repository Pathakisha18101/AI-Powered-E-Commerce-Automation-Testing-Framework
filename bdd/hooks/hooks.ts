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
            fs.mkdirSync(screenshotDir, { recursive: true });
        }

        const fileName =
            `${Date.now()}-failure.png`;

        const screenshotPath =
            path.join(screenshotDir, fileName);

        await context.page.screenshot({
            path: screenshotPath,
            fullPage: true
        });

        console.log(
            `Screenshot Saved: ${screenshotPath}`
        );
    }

    if (browser) {
        await browser.close();
    }
});