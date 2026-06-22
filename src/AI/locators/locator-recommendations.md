# AI Locator Recommendations

## Purpose

This document defines the locator selection strategy for the AI-Powered E-Commerce Testing Framework.

The goal is to reduce flaky tests by using stable, maintainable, and readable locator strategies.

---

# Rule 1 — Avoid Generic CSS Classes

### Avoid

```ts
page.locator('.btn-primary')
```

### Why?

* CSS classes change frequently.
* UI redesign can break tests.
* Often not unique.

### Prefer

```ts
page.getByRole('button')
```

or

```ts
page.getByRole('button', { name: 'Checkout' })
```

---

# Rule 2 — Avoid Positional Selectors

### Avoid

```ts
page.locator('div:nth-child(3)')
```

### Why?

* DOM structure changes frequently.
* Very fragile.
* Difficult to maintain.

### Prefer

```ts
page.getByText('Checkout')
```

or

```ts
page.getByRole('button', { name: 'Checkout' })
```

---

# Rule 3 — Avoid Framework Generated Classes

### Avoid

```ts
page.locator('label.ng-star-inserted')
```

### Why?

* Angular generated classes may change after builds.
* Not guaranteed to remain stable.

### Prefer

```ts
page.getByTestId('order-id')
```

or

```ts
page.getByText('Order')
```

---

# Rule 4 — Prefer Unique IDs

### Example

```ts
page.locator('#userEmail')
```

### Benefits

* Fast
* Unique
* Stable
* Easy to understand

### Current Framework Examples

```ts
#userEmail
#userPassword
```

---

# Rule 5 — Prefer Accessibility Locators

### Recommended

```ts
page.getByRole()
page.getByLabel()
page.getByPlaceholder()
```

### Benefits

* More stable
* Improves readability
* Supports accessibility standards
* Recommended by Playwright

---

# Rule 6 — Prefer data-testid Attributes

### Best Practice

```ts
page.getByTestId('checkout-btn')
```

### Benefits

* Independent of UI changes
* Designed specifically for automation
* Highly maintainable

---

# Locator Priority Matrix

| Priority | Locator Type         | Stability |
| -------- | -------------------- | --------- |
| 1        | data-testid          | Very High |
| 2        | ID Selector          | High      |
| 3        | Role Selector        | High      |
| 4        | Label Selector       | High      |
| 5        | Placeholder Selector | Medium    |
| 6        | Text Selector        | Medium    |
| 7        | CSS Selector         | Low       |
| 8        | XPath                | Low       |
| 9        | nth-child Selector   | Very Low  |

---

# Current Framework Review

## Strong Locators

```ts
#userEmail
#userPassword
[routerlink='/dashboard/cart']
```

Reason:

* Unique
* Stable
* Easy to maintain

---

## Medium Risk Locators

```ts
.card-body
.cartSection h3
button:has-text("Checkout")
.hero-primary
```

Reason:

* Depend on UI structure.
* May break after redesign.

---

## High Risk Locators

```ts
.ta-results button
.action__submit
label.ng-star-inserted
```

Reason:

* CSS dependent.
* Angular specific.
* Likely to change in future releases.

---

# Future AI Locator Strategy

Broken Locator
↓
Locator Analysis
↓
AI Recommendation Engine
↓
Suggested Replacement Locator
↓
Automation Update

---

# Senior SDET Recommendation

Preferred Locator Order:

data-testid
↓
Role
↓
Label
↓
ID
↓
Placeholder
↓
Text
↓
CSS
↓
XPath

This strategy minimizes flaky tests and improves long-term maintainability.
