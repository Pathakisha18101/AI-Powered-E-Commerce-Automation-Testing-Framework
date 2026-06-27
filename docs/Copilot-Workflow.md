# GitHub Copilot AI Workflow

This project uses GitHub Copilot as the primary AI assistant during development.

## Generate Playwright Test

Prompt:

Generate a Playwright test in TypeScript.

Requirements:

- Use Page Object Model
- Use Playwright best practices
- Avoid waitForTimeout()
- Use role-based locators
- Add assertions
- Follow existing project structure

---

## Generate Page Object

Prompt:

Create a Playwright Page Object using existing project architecture.

Requirements:

- Reusable methods
- Strong locators
- Logging
- TypeScript

---

## Generate API Test

Prompt:

Generate Playwright API automation.

Include:

- Positive test
- Negative test
- Schema validation
- Assertions

---

## Generate BDD Scenario

Prompt:

Generate Cucumber Feature.

Use:

Feature
Scenario
Given
When
Then
And

---

## Analyze Failure

Prompt:

Analyze this Playwright failure.

Provide:

- Root Cause
- Possible Causes
- Recommended Fix
- Stability Improvement

---

## Review Locator

Prompt:

Review this Playwright locator.

Suggest:

- Better locator
- getByRole()
- getByTestId()
- Stability improvements

---

## Review Pull Request

Prompt:

Review this automation code like a Senior SDET.

Check:

- Code quality
- Maintainability
- Reusability
- Playwright best practices
- TypeScript best practices