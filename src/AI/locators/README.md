# AI Locator Analysis

Purpose:

Analyze locator stability and provide alternative locator recommendations.

Capabilities:

- Locator Review
- Locator Stability Analysis
- Self-Healing Strategy Design
- AI Locator Suggestions

Examples:

Bad:
.page.locator(".btn-primary")

Better:
.page.getByRole("button", { name: "Checkout" })

Best:
.page.getByTestId("checkout-btn")