import { AIDefectAssistant } from "./assistant/AIDefectAssistant";

const assistant = new AIDefectAssistant();

console.log(

    assistant.analyze(

        "Timeout 30000ms exceeded while waiting for locator"

    )

);