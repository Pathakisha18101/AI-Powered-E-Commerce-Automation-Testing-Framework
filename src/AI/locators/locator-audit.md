# Locator Audit

## LoginPage

| Locator         | Purpose        | Stability |
| --------------- | -------------- | --------- |
| #userEmail      | Email Input    | High      |
| #userPassword   | Password Input | High      |
| [value="Login"] | Login Button   | Medium    |

### Notes

Good locators.

Recommended Future Improvement:

```ts
page.getByLabel('Email')
page.getByLabel('Password')
page.getByRole('button', { name: 'Login' })
```

---

## DashboardPage

| Locator                         | Purpose            | Stability |
| ------------------------------- | ------------------ | --------- |
| .card-body                      | Product Cards      | Medium    |
| .card-body b                    | Product Title      | Medium    |
| [routerlink='/dashboard/cart']  | Cart Button        | High      |
| button + hasText('Add To Cart') | Add To Cart Button | Medium    |

### Notes

`.card-body` depends on CSS structure.

Preferred:

```ts
getByRole()
getByTestId()
```

if available.

---

## CartPage

| Locator                     | Purpose           | Stability |
| --------------------------- | ----------------- | --------- |
| .cartSection h3             | Cart Product Name | Medium    |
| button:has-text("Checkout") | Checkout Button   | Medium    |

### Notes

Text-based locators are acceptable.

Future Improvement:

```ts
getByRole('button', { name: 'Checkout' })
```

---

## CheckoutPage

| Locator                  | Purpose             | Stability |
| ------------------------ | ------------------- | --------- |
| [placeholder*='Country'] | Country Input       | Medium    |
| .ta-results button       | Country Suggestions | Low       |
| .action__submit          | Place Order Button  | Low       |

### Notes

Most fragile page in the framework.

Risks:

* CSS class change
* Autocomplete redesign

Recommended:

```ts
getByRole()
getByLabel()
getByTestId()
```

---

## OrderConfirmationPage

| Locator                | Purpose         | Stability |
| ---------------------- | --------------- | --------- |
| .hero-primary          | Success Message | Medium    |
| label.ng-star-inserted | Order ID        | Low       |

### Notes

Most risky locator:

```ts
label.ng-star-inserted
```

Angular internal classes often change.

Strongly recommend replacing in future.

---

# Stability Summary

## High Stability

* #userEmail
* #userPassword
* [routerlink='/dashboard/cart']

## Medium Stability

* [value="Login"]
* .card-body
* .card-body b
* .cartSection h3
* button:has-text("Checkout")
* [placeholder*='Country']
* .hero-primary

## Low Stability

* .ta-results button
* .action__submit
* label.ng-star-inserted

---

# AI Recommendation Summary

Priority 1 (Fix First)

1. label.ng-star-inserted
2. .action__submit
3. .ta-results button

Priority 2

1. .card-body
2. .card-body b

Priority 3

Keep as-is:

1. #userEmail
2. #userPassword
3. [routerlink='/dashboard/cart']

---

# Senior SDET Verdict

Current Locator Health Score:

8/10

Strengths:

* Good use of IDs
* Good use of routerlink
* Readable page objects

Weaknesses:

* Some CSS-dependent selectors
* Angular-generated classes
* Lack of testIds

Future Recommendation:

Adopt:

* data-testid
* getByRole()
* getByLabel()

as primary locator strategy.
