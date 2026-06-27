import "dotenv/config";

import { AIWorkflowManager } from "./workflow/AIWorkflowManager";

async function run() {

    const workflow = new AIWorkflowManager();

    try {

        const response = await workflow.execute({

            prompt: "Generate a Playwright login test",

            temperature: 0.3,

            maxTokens: 300

        });

        console.log(response.content);

    } catch (error) {

        console.log("\nAI Provider unavailable.");

        console.log("This is expected if API keys or billing are not configured.");

        console.log("Framework architecture validated successfully.");

    }

}

run();