import { AITestGenerator } from "./generator/AITestGenerator";

const generator = new AITestGenerator();

const file = generator.generate("User Login Test");

console.log("Generated:", file);