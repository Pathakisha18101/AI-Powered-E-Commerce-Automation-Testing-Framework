# Test Datasets - Rahul Shetty Academy Client Application

**Application:** Rahul Shetty Academy Client Application  
**Document Type:** Test Data Repository  
**Created:** 2026-06-21  
**Version:** 1.0

---

## Overview

This document contains comprehensive test datasets for the purchase flow of the Rahul Shetty Academy Client Application. Datasets are organized into:
1. Valid Login Data
2. Invalid Login Data
3. Product Search Data
4. Country Selection Data
5. Order Validation Data

Each category includes:
- Valid Test Data (10 datasets)
- Invalid Test Data (10 datasets)
- Boundary Test Data (10 datasets)
- Randomized Test Data (10 datasets)

---

# SECTION 1: VALID LOGIN DATA

Valid login credentials that should successfully authenticate users.

### VLD_001: Standard Valid Login
**Dataset ID:** VLD_001  
**Category:** Login - Valid  
**Test Data:**
```
Email: rahul.shetty@example.com
Password: RahulShetty@2024
```
**Purpose:** Test basic successful login with standard email format and secure password  
**Expected Behavior:** User successfully logs in, redirected to dashboard, session created  

---

### VLD_002: Valid Login with Different Email Domain
**Dataset ID:** VLD_002  
**Category:** Login - Valid  
**Test Data:**
```
Email: user.name@academy.com
Password: SecurePass123!
```
**Purpose:** Test login with different email domain (not @example.com)  
**Expected Behavior:** User successfully logs in regardless of email domain  

---

### VLD_003: Valid Login with Underscore in Email
**Dataset ID:** VLD_003  
**Category:** Login - Valid  
**Test Data:**
```
Email: rahul_shetty@gmail.com
Password: Rahul@Shetty123
```
**Purpose:** Test login with underscore in email address (valid RFC format)  
**Expected Behavior:** User successfully logs in, underscore in email is valid  

---

### VLD_004: Valid Login with Plus Sign in Email
**Dataset ID:** VLD_004  
**Category:** Login - Valid  
**Test Data:**
```
Email: rahul+qe@academy.com
Password: TestData@2024
```
**Purpose:** Test login with plus sign in email (Gmail-style aliases)  
**Expected Behavior:** User successfully logs in, plus sign is valid in email  

---

### VLD_005: Valid Login with Numbers in Email
**Dataset ID:** VLD_005  
**Category:** Login - Valid  
**Test Data:**
```
Email: rahul123@domain.com
Password: Pass123@Word456
```
**Purpose:** Test login with numeric characters in email  
**Expected Behavior:** User successfully logs in with numeric email  

---

### VLD_006: Valid Login with Short Password (8 characters - minimum)
**Dataset ID:** VLD_006  
**Category:** Login - Valid - Boundary  
**Test Data:**
```
Email: test@test.com
Password: Test@123
```
**Purpose:** Test login with minimum valid password length (8 characters)  
**Expected Behavior:** User successfully logs in with minimum password  

---

### VLD_007: Valid Login with Long Password (32 characters)
**Dataset ID:** VLD_007  
**Category:** Login - Valid - Boundary  
**Test Data:**
```
Email: longpass@test.com
Password: VeryLongSecurePassword123@Word!456
```
**Purpose:** Test login with longer password (32 characters)  
**Expected Behavior:** User successfully logs in with long password  

---

### VLD_008: Valid Login with Capital Letters and Numbers
**Dataset ID:** VLD_008  
**Category:** Login - Valid  
**Test Data:**
```
Email: RAHUL.SHETTY@ACADEMY.COM
Password: RahulQE123!Test
```
**Purpose:** Test login with mixed case email and alphanumeric password  
**Expected Behavior:** User successfully logs in, email case-insensitive  

---

### VLD_009: Valid Login with Special Characters in Password
**Dataset ID:** VLD_009  
**Category:** Login - Valid  
**Test Data:**
```
Email: security@test.com
Password: Secure@#$%Pass123
```
**Purpose:** Test login with special characters (@#$%) in password  
**Expected Behavior:** User successfully logs in with special character password  

---

### VLD_010: Valid Login with Hyphenated Email
**Dataset ID:** VLD_010  
**Category:** Login - Valid  
**Test Data:**
```
Email: rahul-shetty@academy.com
Password: HyphenEmail@2024
```
**Purpose:** Test login with hyphenated email address  
**Expected Behavior:** User successfully logs in, hyphen in email is valid  

---

---

# SECTION 2: INVALID LOGIN DATA

Invalid credentials that should fail authentication.

### ILD_001: Invalid Email - Missing @ Symbol
**Dataset ID:** ILD_001  
**Category:** Login - Invalid  
**Test Data:**
```
Email: rahul.shettyexample.com
Password: RahulShetty@2024
```
**Purpose:** Test login with malformed email (missing @)  
**Expected Behavior:** Login fails with error "Invalid email format"  

---

### ILD_002: Invalid Email - Multiple @ Symbols
**Dataset ID:** ILD_002  
**Category:** Login - Invalid  
**Test Data:**
```
Email: rahul@@shetty@example.com
Password: SecurePass123!
```
**Purpose:** Test login with multiple @ symbols in email  
**Expected Behavior:** Login fails with error "Invalid email format"  

---

### ILD_003: Invalid Email - Only @ Symbol
**Dataset ID:** ILD_003  
**Category:** Login - Invalid  
**Test Data:**
```
Email: @
Password: Password123
```
**Purpose:** Test login with just @ symbol  
**Expected Behavior:** Login fails with error "Invalid email format"  

---

### ILD_004: Invalid Email - Non-existent Domain
**Dataset ID:** ILD_004  
**Category:** Login - Invalid  
**Test Data:**
```
Email: user@nonexistentdomain123456789.xyz
Password: CorrectPassword123!
```
**Purpose:** Test login with non-existent domain (email may be valid format but user doesn't exist)  
**Expected Behavior:** Login fails with error "Invalid email or password"  

---

### ILD_005: Invalid Password - Empty
**Dataset ID:** ILD_005  
**Category:** Login - Invalid  
**Test Data:**
```
Email: rahul.shetty@example.com
Password: 
```
**Purpose:** Test login with empty password field  
**Expected Behavior:** Login fails with error "Password field is required"  

---

### ILD_006: Invalid Password - Only Spaces
**Dataset ID:** ILD_006  
**Category:** Login - Invalid  
**Test Data:**
```
Email: rahul.shetty@example.com
Password:          
```
**Purpose:** Test login with only whitespace in password  
**Expected Behavior:** Login fails with error "Invalid password"  

---

### ILD_007: Invalid Email and Password - Both Wrong
**Dataset ID:** ILD_007  
**Category:** Login - Invalid  
**Test Data:**
```
Email: wrongemail@wrong.com
Password: CompletelyWrongPassword123!
```
**Purpose:** Test login with both email and password incorrect  
**Expected Behavior:** Login fails with error "Invalid email or password"  

---

### ILD_008: Invalid Password - Too Short (7 characters)
**Dataset ID:** ILD_008  
**Category:** Login - Invalid - Boundary  
**Test Data:**
```
Email: rahul.shetty@example.com
Password: Short7!
```
**Purpose:** Test login with password below minimum length (7 vs 8 required)  
**Expected Behavior:** Login fails with error "Password must be at least 8 characters"  

---

### ILD_009: Invalid Email - Spaces in Email
**Dataset ID:** ILD_009  
**Category:** Login - Invalid  
**Test Data:**
```
Email: rahul shetty@example.com
Password: Password123!
```
**Purpose:** Test login with spaces in email address  
**Expected Behavior:** Login fails with error "Invalid email format"  

---

### ILD_010: Invalid Email - Special Characters (#, !, %)
**Dataset ID:** ILD_010  
**Category:** Login - Invalid  
**Test Data:**
```
Email: rahul!shetty#example.com
Password: Password123!
```
**Purpose:** Test login with invalid special characters in email  
**Expected Behavior:** Login fails with error "Invalid email format"  

---

---

# SECTION 3: PRODUCT SEARCH DATA

Test data for product search functionality.

### PSD_001: Valid Search - Exact Product Name
**Dataset ID:** PSD_001  
**Category:** Product Search - Valid  
**Test Data:**
```
Search Query: ZARA COAT 3
Expected Results: 1-2 products matching exact name
```
**Purpose:** Test search with exact product name  
**Expected Behavior:** Returns matching products with exact name, results display within 2 seconds  

---

### PSD_002: Valid Search - Partial Product Name
**Dataset ID:** PSD_002  
**Category:** Product Search - Valid  
**Test Data:**
```
Search Query: COAT
Expected Results: 3-5 products containing "COAT"
```
**Purpose:** Test search with partial product name  
**Expected Behavior:** Returns all products containing "COAT", case-insensitive matching  

---

### PSD_003: Valid Search - Brand Name
**Dataset ID:** PSD_003  
**Category:** Product Search - Valid  
**Test Data:**
```
Search Query: ZARA
Expected Results: 5-10 products from ZARA brand
```
**Purpose:** Test search by brand name  
**Expected Behavior:** Returns products filtered by brand  

---

### PSD_004: Valid Search - Single Character
**Dataset ID:** PSD_004  
**Category:** Product Search - Valid - Boundary  
**Test Data:**
```
Search Query: Z
Expected Results: 10+ products starting with Z
```
**Purpose:** Test search with single character  
**Expected Behavior:** Returns all products containing "Z", results display  

---

### PSD_005: Valid Search - Lowercase Query
**Dataset ID:** PSD_005  
**Category:** Product Search - Valid  
**Test Data:**
```
Search Query: zara coat
Expected Results: 2-3 products matching query
```
**Purpose:** Test search with lowercase query  
**Expected Behavior:** Case-insensitive search, returns matching products  

---

### PSD_006: Valid Search - Mixed Case Query
**Dataset ID:** PSD_006  
**Category:** Product Search - Valid  
**Test Data:**
```
Search Query: ZaRa CoAt
Expected Results: 2-3 products matching query
```
**Purpose:** Test search with mixed case query  
**Expected Behavior:** Case-insensitive search works correctly  

---

### PSD_007: Invalid Search - No Results
**Dataset ID:** PSD_007  
**Category:** Product Search - Invalid  
**Test Data:**
```
Search Query: NONEXISTENTPRODUCT123
Expected Results: 0 products
```
**Purpose:** Test search with query that has no matching products  
**Expected Behavior:** Returns "No products found" message, displays no items  

---

### PSD_008: Invalid Search - Empty Query
**Dataset ID:** PSD_008  
**Category:** Product Search - Invalid  
**Test Data:**
```
Search Query: (empty)
Expected Results: Error or all products
```
**Purpose:** Test search with empty/blank query  
**Expected Behavior:** Either error "Please enter search term" or displays all products  

---

### PSD_009: Boundary Search - Maximum Length (256 characters)
**Dataset ID:** PSD_009  
**Category:** Product Search - Boundary  
**Test Data:**
```
Search Query: ZARA COAT 3 ZARA COAT 3 ZARA COAT 3... (repeated until 256 chars)
Expected Results: No products or error
```
**Purpose:** Test search with maximum allowed query length  
**Expected Behavior:** Truncates or rejects query, returns no results or error  

---

### PSD_010: Boundary Search - Special Characters
**Dataset ID:** PSD_010  
**Category:** Product Search - Boundary  
**Test Data:**
```
Search Query: COAT@#$%ZARA
Expected Results: No products or sanitized results
```
**Purpose:** Test search with special characters  
**Expected Behavior:** Special characters are either sanitized or returns no results  

---

---

# SECTION 4: COUNTRY SELECTION DATA

Test data for country dropdown selection during checkout.

### CSD_001: Valid Country - India
**Dataset ID:** CSD_001  
**Category:** Country Selection - Valid  
**Test Data:**
```
Country: India
Country Code: IN
Currency: INR
Shipping Charge: $0 (Free)
```
**Purpose:** Test selection of most common country (India for Rahul Shetty Academy)  
**Expected Behavior:** Country selected, shipping updated, checkout proceeds  

---

### CSD_002: Valid Country - United States
**Dataset ID:** CSD_002  
**Category:** Country Selection - Valid  
**Test Data:**
```
Country: United States
Country Code: US
Currency: USD
Shipping Charge: $5
```
**Purpose:** Test selection of United States  
**Expected Behavior:** Country selected, USD currency, shipping charges applied  

---

### CSD_003: Valid Country - United Kingdom
**Dataset ID:** CSD_003  
**Category:** Country Selection - Valid  
**Test Data:**
```
Country: United Kingdom
Country Code: GB
Currency: GBP
Shipping Charge: $3
```
**Purpose:** Test selection of United Kingdom  
**Expected Behavior:** Country selected, GBP currency, shipping charges applied  

---

### CSD_004: Valid Country - Canada
**Dataset ID:** CSD_004  
**Category:** Country Selection - Valid  
**Test Data:**
```
Country: Canada
Country Code: CA
Currency: CAD
Shipping Charge: $4
```
**Purpose:** Test selection of Canada  
**Expected Behavior:** Country selected, shipping charges calculated  

---

### CSD_005: Valid Country - Australia
**Dataset ID:** CSD_005  
**Category:** Country Selection - Valid  
**Test Data:**
```
Country: Australia
Country Code: AU
Currency: AUD
Shipping Charge: $8
```
**Purpose:** Test selection of Australia  
**Expected Behavior:** Country selected, higher shipping charge for distant country  

---

### CSD_006: Valid Country - Germany
**Dataset ID:** CSD_006  
**Category:** Country Selection - Valid  
**Test Data:**
```
Country: Germany
Country Code: DE
Currency: EUR
Shipping Charge: $2
```
**Purpose:** Test selection of Germany (Europe)  
**Expected Behavior:** Country selected, EUR currency, shipping charges applied  

---

### CSD_007: Valid Country - Japan
**Dataset ID:** CSD_007  
**Category:** Country Selection - Valid  
**Test Data:**
```
Country: Japan
Country Code: JP
Currency: JPY
Shipping Charge: $10
```
**Purpose:** Test selection of Japan (Asia)  
**Expected Behavior:** Country selected, JPY currency, international shipping charges  

---

### CSD_008: Invalid Country - Empty/Null
**Dataset ID:** CSD_008  
**Category:** Country Selection - Invalid  
**Test Data:**
```
Country: (empty/not selected)
Country Code: 
Shipping Charge: $0
```
**Purpose:** Test checkout with no country selected  
**Expected Behavior:** Order placement prevented with error "Please select a country"  

---

### CSD_009: Invalid Country - Invalid Code
**Dataset ID:** CSD_009  
**Category:** Country Selection - Invalid  
**Test Data:**
```
Country: (API sent with invalid code)
Country Code: ZZ
Currency: Unknown
Shipping Charge: N/A
```
**Purpose:** Test checkout with invalid country code  
**Expected Behavior:** Server validation fails with error "Invalid country"  

---

### CSD_010: Boundary Country - Two-Letter Code
**Dataset ID:** CSD_010  
**Category:** Country Selection - Boundary  
**Test Data:**
```
Country: IN
Country Code: IN
Result: Valid (most countries use ISO 3166-1 alpha-2)
```
**Purpose:** Test country selection with standard ISO country codes  
**Expected Behavior:** Two-letter country codes are recognized and processed  

---

---

# SECTION 5: ORDER VALIDATION DATA

Test data for order creation and validation.

### OVD_001: Valid Order - Single Product
**Dataset ID:** OVD_001  
**Category:** Order Validation - Valid  
**Test Data:**
```
Product: ZARA COAT 3
Quantity: 1
Price per Unit: $99
Total: $99
Tax (18%): $17.82
Final Total: $116.82
Country: India
```
**Purpose:** Test order creation with single product  
**Expected Behavior:** Order created successfully, correct calculations  

---

### OVD_002: Valid Order - Multiple Products
**Dataset ID:** OVD_002  
**Category:** Order Validation - Valid  
**Test Data:**
```
Products:
  - ZARA COAT 3 (qty: 1, price: $99)
  - ADIDAS SHOES (qty: 1, price: $120)
Subtotal: $219
Tax (18%): $39.42
Final Total: $258.42
```
**Purpose:** Test order creation with multiple different products  
**Expected Behavior:** Order created successfully, totals calculated correctly  

---

### OVD_003: Valid Order - Multiple Quantities Same Product
**Dataset ID:** OVD_003  
**Category:** Order Validation - Valid  
**Test Data:**
```
Product: IPHONE 13
Quantity: 3
Price per Unit: $999
Subtotal: $2,997
Tax (18%): $539.46
Final Total: $3,536.46
```
**Purpose:** Test order with multiple quantities of same product  
**Expected Behavior:** Order created successfully, quantity multiplied correctly  

---

### OVD_004: Valid Order - International Delivery
**Dataset ID:** OVD_004  
**Category:** Order Validation - Valid  
**Test Data:**
```
Product: ZARA COAT 3 (qty: 1, price: $99)
Subtotal: $99
Tax (8% US): $7.92
Shipping (to USA): $5.00
Final Total: $111.92
Country: United States
```
**Purpose:** Test order with international shipping  
**Expected Behavior:** Order created, shipping charges applied based on country  

---

### OVD_005: Valid Order - Order ID Generation
**Dataset ID:** OVD_005  
**Category:** Order Validation - Valid  
**Test Data:**
```
Generated Order ID: ORD123456789
Format: ORD + 9-12 numeric digits
Uniqueness: Globally unique
```
**Purpose:** Test order ID is generated correctly  
**Expected Behavior:** Order ID is unique, follows format, is retrievable  

---

### OVD_006: Valid Order - Timestamp Recording
**Dataset ID:** OVD_006  
**Category:** Order Validation - Valid  
**Test Data:**
```
Order Date: 2026-06-21
Order Time: 14:30:45 IST
Timestamp Format: ISO 8601
```
**Purpose:** Test order timestamp is correctly recorded  
**Expected Behavior:** Order timestamp is saved in UTC, displays in user's timezone  

---

### OVD_007: Invalid Order - Empty Product List
**Dataset ID:** OVD_007  
**Category:** Order Validation - Invalid  
**Test Data:**
```
Products: (empty list)
Quantity: 0
Total: $0
```
**Purpose:** Test order creation with no products in cart  
**Expected Behavior:** Order creation fails with error "Cart is empty"  

---

### OVD_008: Invalid Order - Negative Quantity
**Dataset ID:** OVD_008  
**Category:** Order Validation - Invalid  
**Test Data:**
```
Product: ZARA COAT 3
Quantity: -5
Price per Unit: $99
Total: -$495
```
**Purpose:** Test order with negative quantity (manipulation attempt)  
**Expected Behavior:** Order creation fails with error "Invalid quantity"  

---

### OVD_009: Boundary Order - Large Order Value
**Dataset ID:** OVD_009  
**Category:** Order Validation - Boundary  
**Test Data:**
```
Products: 100 units of IPHONE 13 @ $999 each
Subtotal: $99,900
Tax (18%): $17,982
Final Total: $117,882
```
**Purpose:** Test order creation with very large order value  
**Expected Behavior:** Order processes successfully, calculations are accurate  

---

### OVD_010: Boundary Order - Minimum Order (1 unit, lowest price)
**Dataset ID:** OVD_010  
**Category:** Order Validation - Boundary  
**Test Data:**
```
Product: LOWEST PRICE ITEM ($1)
Quantity: 1
Price per Unit: $1
Tax (18%): $0.18
Final Total: $1.18
```
**Purpose:** Test order with minimum possible order value  
**Expected Behavior:** Order processes successfully, handles small amounts  

---

---

# SECTION 6: RANDOMIZED TEST DATA

Randomized datasets for fuzzing and unpredictable scenarios.

### RND_001: Random Valid Login
**Dataset ID:** RND_001  
**Category:** Login - Randomized  
**Test Data:**
```
Email: user.{random_number}@test.com
Email Example: user.7429@test.com
Password: RandomPass{random_chars}@{random_number}
Password Example: RandomPassXk9Lm$@5847
```
**Purpose:** Test login with randomly generated but valid credentials  
**Expected Behavior:** Login succeeds if account exists, fails otherwise  

---

### RND_002: Random Product Search Query
**Dataset ID:** RND_002  
**Category:** Product Search - Randomized  
**Test Data:**
```
Search Query: Randomly select from available products
Example 1: ZARA COAT 3
Example 2: ADIDAS SHOES
Example 3: IPHONE 13
Each execution uses different product
```
**Purpose:** Test search with random product queries  
**Expected Behavior:** Returns matching products for each random query  

---

### RND_003: Random Cart Composition
**Dataset ID:** RND_003  
**Category:** Cart - Randomized  
**Test Data:**
```
Num Products: Random between 1-5
Products: Randomly selected from catalog
Quantities: Random between 1-10 per product
Example: 2x ZARA COAT 3, 5x ADIDAS SHOES, 1x IPHONE 13
```
**Purpose:** Test cart with random product combination  
**Expected Behavior:** Cart displays all products with correct totals  

---

### RND_004: Random Country Selection
**Dataset ID:** RND_004  
**Category:** Country Selection - Randomized  
**Test Data:**
```
Country: Randomly selected from 50+ countries in dropdown
Example 1: India
Example 2: Brazil
Example 3: Mexico
Each execution uses different country
```
**Purpose:** Test country selection with random choices  
**Expected Behavior:** Any valid country selection is processed correctly  

---

### RND_005: Random Order Quantity
**Dataset ID:** RND_005  
**Category:** Order - Randomized  
**Test Data:**
```
Product: ZARA COAT 3
Quantity: Random between 1-100
Example 1: Qty 1
Example 2: Qty 47
Example 3: Qty 89
Total calculates based on random quantity
```
**Purpose:** Test order with random quantities  
**Expected Behavior:** Order total correctly multiplies price by random quantity  

---

### RND_006: Random Delay Between User Actions
**Dataset ID:** RND_006  
**Category:** Timing - Randomized  
**Test Data:**
```
Action Delay: Random between 100ms - 5000ms
Example Sequence:
  1. Click Add to Cart (wait 1200ms)
  2. View Cart (wait 800ms)
  3. Proceed to Checkout (wait 3500ms)
  4. Place Order (wait 500ms)
```
**Purpose:** Test application with unpredictable user timing  
**Expected Behavior:** Application handles variable user speeds  

---

### RND_007: Random Email Domain
**Dataset ID:** RND_007  
**Category:** Login - Randomized  
**Test Data:**
```
Email Format: {random_name}@{random_domain}
Example 1: qatest@randomdomain123.com
Example 2: user.test@anotherdomain456.io
Example 3: random.email@thirdomain789.org
```
**Purpose:** Test login with random email domains  
**Expected Behavior:** Each random email is validated against system  

---

### RND_008: Random Password Combinations
**Dataset ID:** RND_008  
**Category:** Login - Randomized  
**Test Data:**
```
Password Pattern: {random_uppercase}{random_lowercase}{random_numbers}{random_symbols}
Example 1: HxKp$9wM@2LqY
Example 2: TnVb!4jZ#8PrS
Example 3: FgWe%6hJ&0ClO
Length: 12-16 characters each
```
**Purpose:** Test login with randomly generated passwords  
**Expected Behavior:** Login succeeds if password matches stored credential  

---

### RND_009: Random Mixed Workflow
**Dataset ID:** RND_009  
**Category:** Purchase Flow - Randomized  
**Test Data:**
```
Step Sequence (Randomized):
  1. Login with {random_email}
  2. Search for {random_product}
  3. Add {random_quantity} to cart
  4. Continue or Checkout (random)
  5. Select {random_country}
  6. Complete or Cancel Order (random)
Different execution each test run
```
**Purpose:** Test application with unpredictable user flow variations  
**Expected Behavior:** Application handles random workflow sequences  

---

### RND_010: Random Data Injection (Fuzzing)
**Dataset ID:** RND_010  
**Category:** Input - Randomized Fuzzing  
**Test Data:**
```
Fuzz Input: Random bytes/characters injected into form fields
Example Patterns:
  - Unicode characters: 你好，世界
  - Special symbols: !@#$%^&*()_+-=[]{}|;:'",.<>?/~`
  - Control characters and null bytes
  - Very long repeated characters
Application: Search field, address fields, all inputs
```
**Purpose:** Fuzzing to discover unexpected input handling issues  
**Expected Behavior:** Application validates or sanitizes random fuzzy input  

---

---

# SECTION 7: BOUNDARY TEST DATA

Datasets specifically designed for boundary testing.

### BTD_001: Boundary - Minimum Email Length
**Dataset ID:** BTD_001  
**Category:** Email - Boundary  
**Test Data:**
```
Email: a@b.c
Length: 5 characters (minimum valid)
Format: RFC 5321 compliant
```
**Purpose:** Test with minimum valid email length  
**Expected Behavior:** Email validation passes  

---

### BTD_002: Boundary - Maximum Email Length
**Dataset ID:** BTD_002  
**Category:** Email - Boundary  
**Test Data:**
```
Email: {64-char-local}@{63-char-domain}.{63-char-tld}
Length: 254 characters (RFC 5321 maximum)
Example: verylongemailaddresslocal@verylongdomainname.verylongextension
```
**Purpose:** Test with maximum valid email length  
**Expected Behavior:** Email is accepted up to 254 characters  

---

### BTD_003: Boundary - Email Exceeding Maximum
**Dataset ID:** BTD_003  
**Category:** Email - Boundary  
**Test Data:**
```
Email: {exceeds 254 characters}
Length: 255+ characters
Action: Attempt to enter or truncate
```
**Purpose:** Test with email exceeding 254 character limit  
**Expected Behavior:** Email is truncated or rejected  

---

### BTD_004: Boundary - Password Minimum Length
**Dataset ID:** BTD_004  
**Category:** Password - Boundary  
**Test Data:**
```
Password: Passwd1 (exactly 8 characters minimum)
Complexity: Uppercase, lowercase, digit, special char
```
**Purpose:** Test with minimum password length  
**Expected Behavior:** Password passes validation  

---

### BTD_005: Boundary - Password Maximum Length
**Dataset ID:** BTD_005  
**Category:** Password - Boundary  
**Test Data:**
```
Password: {128 characters of valid characters}
Complexity: Mixed characters throughout
```
**Purpose:** Test with maximum password length  
**Expected Behavior:** Password accepted at 128 characters  

---

### BTD_006: Boundary - Password Just Below Minimum
**Dataset ID:** BTD_006  
**Category:** Password - Boundary  
**Test Data:**
```
Password: Passwrd (7 characters - 1 below minimum)
```
**Purpose:** Test with password below minimum length  
**Expected Behavior:** Validation fails with "Password too short"  

---

### BTD_007: Boundary - Search Query Single Character
**Dataset ID:** BTD_007  
**Category:** Product Search - Boundary  
**Test Data:**
```
Search Query: Z
Expected Results: All products containing Z
```
**Purpose:** Test search with minimum query length (1 character)  
**Expected Behavior:** Returns matching products  

---

### BTD_008: Boundary - Search Query Maximum Length
**Dataset ID:** BTD_008  
**Category:** Product Search - Boundary  
**Test Data:**
```
Search Query: 256 character string (maximum)
```
**Purpose:** Test search at maximum length limit  
**Expected Behavior:** Query processed or truncated  

---

### BTD_009: Boundary - Order Quantity Zero
**Dataset ID:** BTD_009  
**Category:** Order Quantity - Boundary  
**Test Data:**
```
Product: Any product
Quantity: 0
Action: Attempt to add to cart
```
**Purpose:** Test order with zero quantity  
**Expected Behavior:** Rejected with "Quantity must be at least 1"  

---

### BTD_010: Boundary - Order Quantity Maximum
**Dataset ID:** BTD_010  
**Category:** Order Quantity - Boundary  
**Test Data:**
```
Product: Any product
Quantity: 999,999 (very large number)
Stock Available: 100
Action: Attempt to add to cart
```
**Purpose:** Test order exceeding available stock significantly  
**Expected Behavior:** Rejected with "Only X units available"  

---

---

# SECTION 8: DATA VALIDATION RULES

Rules for validating test data and expected behaviors.

## Email Validation Rules
- ✅ Valid: Contains @ symbol separating local and domain
- ✅ Valid: Local part ≤ 64 characters
- ✅ Valid: Domain part ≤ 253 characters
- ✅ Valid: Total length ≤ 254 characters (RFC 5321)
- ✅ Valid: Supports +, ., _ in local part
- ✅ Valid: Case-insensitive matching
- ❌ Invalid: Missing @ symbol
- ❌ Invalid: Multiple @ symbols
- ❌ Invalid: Spaces in email
- ❌ Invalid: Total length > 254 characters

## Password Validation Rules
- ✅ Valid: Minimum 8 characters
- ✅ Valid: Maximum 128 characters
- ✅ Valid: Can contain uppercase, lowercase, numbers, special chars
- ✅ Valid: Special chars: @, #, $, %, !, &, ?, etc.
- ✅ Valid: No minimum complexity requirements (optional)
- ❌ Invalid: Less than 8 characters
- ❌ Invalid: More than 128 characters
- ❌ Invalid: Only spaces
- ❌ Invalid: Empty field

## Product Search Validation Rules
- ✅ Valid: 1-256 character queries
- ✅ Valid: Case-insensitive
- ✅ Valid: Partial name matching
- ✅ Valid: Brand name search
- ❌ Invalid: Empty query (optional based on design)
- ❌ Invalid: > 256 characters
- ❌ Invalid: Only special characters without context

## Country Selection Rules
- ✅ Valid: Selection from predefined list
- ✅ Valid: ISO 3166-1 alpha-2 codes (2-letter country codes)
- ✅ Valid: Currency conversion based on country
- ✅ Valid: Shipping charges calculated per country
- ❌ Invalid: Empty/null selection
- ❌ Invalid: Invalid country code
- ❌ Invalid: Custom/unsupported country

## Order Validation Rules
- ✅ Valid: 1+ products in cart
- ✅ Valid: Valid quantities (≥ 1)
- ✅ Valid: Quantities ≤ available stock
- ✅ Valid: Correct tax calculation: (Subtotal × Tax Rate)
- ✅ Valid: Correct total: Subtotal + Tax + Shipping
- ✅ Valid: Unique Order ID
- ✅ Valid: Order timestamp in UTC
- ❌ Invalid: 0 or negative quantities
- ❌ Invalid: Quantity > stock
- ❌ Invalid: Invalid product IDs
- ❌ Invalid: Missing required fields

---

# SECTION 9: DATA GENERATION PATTERNS

Patterns for generating test data dynamically.

## Email Generation Pattern
```
{firstname}.{lastname}@{domain}.{tld}
Pattern Examples:
- rahul.shetty@academy.com
- john.smith@example.org
- test.user@domain.io
```

## Password Generation Pattern
```
{Uppercase}{lowercase}{lowercase}{Special}{Number}{lowercase}{Uppercase}{Number}{Special}
Pattern Example:
- RaFdP9sX#
- TmKj$2nL@
- WxQv&7pR!
```

## Product Search Pattern
```
{Brand} {Category} {Variant}
Pattern Examples:
- ZARA COAT 3
- ADIDAS SHOES
- IPHONE 13
```

## Order ID Generation Pattern
```
ORD + {timestamp} + {random}
Pattern Example:
- ORD20260621143045ABC123
- ORD20260621150230XYZ789
```

---

# SECTION 10: TEST EXECUTION GUIDELINES

Guidelines for using these datasets in test execution.

## How to Use Valid Datasets
1. Select one valid dataset per test cycle
2. Enter data into corresponding form fields
3. Verify successful completion
4. Validate expected behavior occurs
5. Document results

## How to Use Invalid Datasets
1. Select one invalid dataset per negative test
2. Attempt to enter invalid data
3. Verify validation error appears
4. Check error message is clear and helpful
5. Document failure reason

## How to Use Boundary Datasets
1. Select datasets at minimum/maximum limits
2. Test just below and just above limits
3. Verify correct behavior at boundaries
4. Test truncation if applicable
5. Document boundary behavior

## How to Use Randomized Datasets
1. Run multiple times with different random values
2. Each execution should produce different test data
3. Document any inconsistencies
4. Useful for regression and fuzzing testing
5. Helps discover unexpected edge cases

---

# SECTION 11: TEST DATA MAINTENANCE

Guidelines for maintaining and updating test data.

## When to Update Test Data
- ❌ Application requirements change (add new countries, etc.)
- ❌ New products are added to catalog
- ❌ Validation rules are modified
- ❌ User finds new edge case

## Maintenance Schedule
- Review monthly for relevance
- Update with new product releases
- Refresh with seasonal variations
- Archive old unused datasets

## Version Control
- Document all changes with date and reason
- Maintain version history
- Tag releases with test cycle dates
- Link to corresponding test executions

---

## Summary

This comprehensive test data repository provides:
- ✅ 10 Valid Login Datasets
- ✅ 10 Invalid Login Datasets
- ✅ 10 Product Search Datasets
- ✅ 10 Country Selection Datasets
- ✅ 10 Order Validation Datasets
- ✅ 10 Randomized Datasets
- ✅ 10 Boundary Datasets
- ✅ Data validation rules and generation patterns
- ✅ Total: 80+ comprehensive test datasets

All datasets are ready for immediate use in manual testing, automation scripts, and exploratory testing sessions.