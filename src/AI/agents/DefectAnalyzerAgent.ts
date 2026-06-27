import { ErrorKnowledgeBase } from "../knowledge/ErrorKnowledgeBase";

export class DefectAnalyzerAgent {

    analyzeFailure(error: string) {

        const errorText = error.toLowerCase();

        let knowledge = ErrorKnowledgeBase.assertion;

        if (errorText.includes("timeout")) {

            knowledge = ErrorKnowledgeBase.timeout;

        } else if (
            errorText.includes("locator") ||
            errorText.includes("selector")
        ) {

            knowledge = ErrorKnowledgeBase.locator;

        } else if (
            errorText.includes("network") ||
            errorText.includes("fetch") ||
            errorText.includes("api")
        ) {

            knowledge = ErrorKnowledgeBase.network;

        }

        return {

            issue: knowledge.issue,

            error,

            possibleCauses: knowledge.possibleCauses,

            recommendations: knowledge.recommendations

        };

    }

}