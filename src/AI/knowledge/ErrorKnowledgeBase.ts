export interface ErrorKnowledge {
    issue: string;
    possibleCauses: string[];
    recommendations: string[];
}

export const ErrorKnowledgeBase: Record<string, ErrorKnowledge> = {

    timeout: {
        issue: "Playwright Timeout",

        possibleCauses: [
            "Element not visible",
            "Slow page loading",
            "Incorrect locator",
            "Network delay"
        ],

        recommendations: [
            "Use getByRole() or getByTestId()",
            "Wait for page load state",
            "Verify locator uniqueness",
            "Avoid unnecessary waitForTimeout()"
        ]
    },

    locator: {
        issue: "Locator Failure",

        possibleCauses: [
            "DOM changed",
            "Dynamic IDs",
            "Incorrect selector"
        ],

        recommendations: [
            "Prefer role-based locators",
            "Use data-testid attributes",
            "Avoid brittle XPath selectors"
        ]
    },

    network: {
        issue: "Network Failure",

        possibleCauses: [
            "API unavailable",
            "Slow backend",
            "Environment issue"
        ],

        recommendations: [
            "Mock API for UI tests",
            "Validate API response before UI actions",
            "Check environment availability"
        ]
    },

    assertion: {
        issue: "Assertion Failure",

        possibleCauses: [
            "Unexpected UI state",
            "Incorrect expected value",
            "Application defect"
        ],

        recommendations: [
            "Verify test data",
            "Improve assertions",
            "Capture screenshots and traces"
        ]
    }

};