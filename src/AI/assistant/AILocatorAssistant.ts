export interface LocatorSuggestion {

    original: string;

    recommendation: string;

    reason: string;

}

export class AILocatorAssistant {

    review(locator: string): LocatorSuggestion {

        if (
            locator.includes("#") ||
            locator.includes(".")
        ) {

            return {

                original: locator,

                recommendation:
                    "Prefer page.getByRole() or page.getByTestId().",

                reason:
                    "Role-based and test-id locators are more stable than CSS selectors."

            };

        }

        if (
            locator.includes("//")
        ) {

            return {

                original: locator,

                recommendation:
                    "Avoid XPath when possible. Use role-based locators.",

                reason:
                    "XPath is more fragile and harder to maintain."

            };

        }

        return {

            original: locator,

            recommendation:
                "Locator follows recommended practices.",

            reason:
                "No improvement required."

        };

    }

}