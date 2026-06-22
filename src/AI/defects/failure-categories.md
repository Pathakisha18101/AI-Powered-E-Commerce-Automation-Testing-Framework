# Failure Categories

## Purpose

Define standard failure categories for automation analysis.

---

# Category 1 — Locator Failure

Examples:

* Element not found
* Locator timeout
* Stale locator

Common Errors:

```text
locator.waitFor: Timeout
element not found
strict mode violation
```

Possible Root Causes:

* UI changed
* Locator outdated
* Wrong page state

---

# Category 2 — Assertion Failure

Examples:

* Expected text mismatch
* Wrong value displayed
* Validation failure

Common Errors:

```text
Expected: Success
Received: Failed
```

Possible Root Causes:

* Business logic issue
* Incorrect test data
* Product defect

---

# Category 3 — Network Failure

Examples:

* API timeout
* Server unavailable
* Connection reset

Common Errors:

```text
ECONNRESET
Request Timeout
502 Bad Gateway
503 Service Unavailable
```

Possible Root Causes:

* Backend outage
* Infrastructure issue
* Network instability

---

# Category 4 — Authentication Failure

Examples:

* Invalid token
* Expired token
* Unauthorized request

Common Errors:

```text
401 Unauthorized
403 Forbidden
Token Expired
```

Possible Root Causes:

* Authentication issue
* Session expired
* Token generation failure

---

# Category 5 — Test Data Failure

Examples:

* Missing data
* Invalid test data
* Duplicate records

Common Errors:

```text
Validation Error
Record Not Found
Duplicate Entry
```

Possible Root Causes:

* Incorrect dataset
* Environment issue
* Data setup problem

---

# Category 6 — Environment Failure

Examples:

* Browser crash
* Environment unavailable
* Deployment issue

Common Errors:

```text
Page crashed
Browser disconnected
Environment unavailable
```

Possible Root Causes:

* Infrastructure problem
* Deployment issue
* Resource exhaustion

---

# AI Analysis Goal

Failure
↓
Category
↓
Root Cause
↓
Recommendation
↓
Defect Summary

```
```
