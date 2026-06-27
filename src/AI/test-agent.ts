import { TestGeneratorAgent } from "./agents/TestGeneratorAgent";
import { DefectAnalyzerAgent } from "./agents/DefectAnalyzerAgent";
import { LocatorHealingAgent } from "./agents/LocatorHealingAgent";


const generator =
new TestGeneratorAgent();


console.log(

generator.generateTestScenario(
"User adds product to cart"
)

);



const defect =
new DefectAnalyzerAgent();


console.log(

defect.analyzeFailure(
"Timeout waiting for button"
)

);



const locator =
new LocatorHealingAgent();


console.log(

locator.suggestLocator(
"#login"
)

);