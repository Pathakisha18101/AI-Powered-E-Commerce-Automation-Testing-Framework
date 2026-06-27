import { ErrorKnowledgeBase } from "../knowledge/ErrorKnowledgeBase";

export interface DefectAnalysis {

    issue: string;

    severity: "Low" | "Medium" | "High";

    possibleCauses: string[];

    recommendations: string[];

}

export class AIDefectAssistant {

    analyze(error: string): DefectAnalysis {

        const text = error.toLowerCase();

        let knowledge = ErrorKnowledgeBase.assertion;

        let severity: "Low" | "Medium" | "High" = "Medium";

        if (text.includes("timeout")) {

            knowledge = ErrorKnowledgeBase.timeout;

            severity = "High";

        }

        else if (
            text.includes("locator") ||
            text.includes("selector")
        ) {

            knowledge = ErrorKnowledgeBase.locator;

            severity = "Medium";

        }

        else if (
            text.includes("network") ||
            text.includes("fetch") ||
            text.includes("api")
        ) {

            knowledge = ErrorKnowledgeBase.network;

            severity = "High";

        }

        return {

            issue: knowledge.issue,

            severity,

            possibleCauses: knowledge.possibleCauses,

            recommendations: knowledge.recommendations

        };

    }

}