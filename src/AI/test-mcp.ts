import { MCPClient } from "./mcp/MCPClient";

async function run() {

    const client = new MCPClient();

    const response = await client.execute({

        tool: "GitHub Copilot",

        prompt:
            "Generate Playwright login automation using Page Object Model."

    });

    console.log(response);

}

run();