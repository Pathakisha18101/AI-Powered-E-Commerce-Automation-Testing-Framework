import { MCPRequest } from "./MCPRequest";
import { MCPResponse } from "./MCPResponse";

export class MCPClient {

    async execute(
        request: MCPRequest
    ): Promise<MCPResponse> {

        console.log("\n========== MCP ==========\n");

        console.log("Tool :", request.tool);

        console.log("Prompt:");

        console.log(request.prompt);

        console.log("\nWaiting for external MCP server...\n");

        return {

            success: true,

            message:
                "MCP request prepared successfully. Connect GitHub Copilot Agent Mode or another MCP-compatible server to execute this request."

        };

    }

}