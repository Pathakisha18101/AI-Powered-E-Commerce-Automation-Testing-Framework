import { AILocatorAssistant } from "./assistant/AILocatorAssistant";

const assistant = new AILocatorAssistant();

console.log(

    assistant.review("#login")

);

console.log(

    assistant.review("//button[@type='submit']")

);

console.log(

    assistant.review("getByRole('button')")

);