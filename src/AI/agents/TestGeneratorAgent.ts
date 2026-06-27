export class TestGeneratorAgent {


    generateTestScenario(requirement:string){


        return `

Feature: Generated Test

Scenario: ${requirement}

Given user launches application
When user performs required action
Then expected result should be verified

`;

    }


}