# Functional Test Cases - Rahul Shetty Academy Client Application

**Application:** Rahul Shetty Academy Client Application  
**Document Type:** Functional Test Cases  
**Created:** 2026-06-21  
**Version:** 1.0

---

## Business Flow
1. Login
2. Search Product
3. Validate Product
4. Add Product To Cart
5. Validate Cart
6. Checkout
7. Select Country
8. Place Order
9. Capture Order ID
10. Validate Order In UI
11. Validate Order Through API

---

## Test Cases

### TC_001: Successful Login with Valid Credentials
**Priority:** P0 - Critical  
**Category:** Login - Happy Path

**Preconditions:**
- Application is loaded and accessible
- Valid user credentials are available
- User database is functioning correctly

**Test Steps:**
1. Navigate to the application login page
2. Enter valid username/email in the "Email" field
3. Enter valid password in the "Password" field
4. Click the "Sign In" button
5. Verify user is redirected to the Dashboard page
6. Verify welcome message displays the logged-in user's name

**Expected Result:**
- User successfully logs in
- Dashboard page loads with all products visible
- User name appears in the top navigation bar
- Session is established and cookies/tokens are stored

---

### TC_002: Login Failure with Invalid Email Format
**Priority:** P1 - High  
**Category:** Login - Negative

**Preconditions:**
- Application is loaded and accessible
- Login page is displayed

**Test Steps:**
1. Navigate to the application login page
2. Enter invalid email format (e.g., "invaliduser") in the Email field
3. Enter any password in the Password field
4. Click the "Sign In" button
5. Observe the validation error message

**Expected Result:**
- Login attempt is prevented with an error message
- Error message clearly states "Invalid email format" or similar
- User remains on the login page
- No session is created

---

### TC_003: Login Failure with Incorrect Password
**Priority:** P1 - High  
**Category:** Login - Negative

**Preconditions:**
- Application is loaded and accessible
- Valid user account exists in the system
- Login page is displayed

**Test Steps:**
1. Navigate to the application login page
2. Enter valid email address in the Email field
3. Enter incorrect password in the Password field
4. Click the "Sign In" button
5. Observe the error message displayed

**Expected Result:**
- Login fails with error message "Invalid email or password"
- User is not redirected to the dashboard
- User remains on the login page
- No session is created

---

### TC_004: Search Product by Product Name
**Priority:** P0 - Critical  
**Category:** Product Search - Happy Path

**Preconditions:**
- User is successfully logged in
- Dashboard page is loaded
- At least 5 products are available in the system
- Search functionality is enabled

**Test Steps:**
1. On the Dashboard, locate the search box
2. Enter a valid product name (e.g., "ZARA COAT 3") in the search field
3. Press Enter or click the Search button
4. Wait for search results to load
5. Verify the search results are displayed

**Expected Result:**
- Search results are filtered and displayed within 3 seconds
- Only products matching the search criteria are shown
- Product details (name, price, image) are visible
- Search results include at least the exact product searched

---

### TC_005: Search Product by Partial Product Name
**Priority:** P1 - High  
**Category:** Product Search - Boundary

**Preconditions:**
- User is successfully logged in
- Dashboard page is loaded
- Multiple products with similar names exist

**Test Steps:**
1. On the Dashboard, locate the search box
2. Enter partial product name (e.g., "COAT") in the search field
3. Press Enter or click the Search button
4. Wait for search results to load
5. Verify results contain products matching the partial name

**Expected Result:**
- Search functionality performs partial matching
- All products containing "COAT" in the name are displayed
- At least 2-3 products are returned
- Results load within 3 seconds

---

### TC_006: Search Product with Empty Search Query
**Priority:** P2 - Medium  
**Category:** Product Search - Edge Case

**Preconditions:**
- User is successfully logged in
- Dashboard page is loaded

**Test Steps:**
1. On the Dashboard, locate the search box
2. Leave the search field empty
3. Click the Search button or press Enter
4. Observe the system behavior

**Expected Result:**
- Either an error message is displayed: "Please enter a search term"
- OR all products are displayed (depends on application design)
- No system errors or crashes occur

---

### TC_007: Validate Product Details Display
**Priority:** P0 - Critical  
**Category:** Product Validation - Happy Path

**Preconditions:**
- User is successfully logged in
- Dashboard page is loaded with products
- At least one product is visible

**Test Steps:**
1. On the Dashboard, locate a product (e.g., "ZARA COAT 3")
2. Click on the product to view details
3. Verify the product detail page loads
4. Validate all product information:
   - Product name is displayed
   - Product price is displayed (in correct currency)
   - Product description is visible
   - Product image is displayed
   - "Add to Cart" button is visible and enabled
5. Verify stock status if applicable

**Expected Result:**
- Product detail page loads successfully within 2 seconds
- All product information is accurately displayed
- Product price is formatted correctly
- Image loads without distortion
- "Add to Cart" button is interactive and functional

---

### TC_008: Add Single Product to Cart
**Priority:** P0 - Critical  
**Category:** Add to Cart - Happy Path

**Preconditions:**
- User is successfully logged in
- Product detail page is displayed
- Product is in stock
- Cart is empty

**Test Steps:**
1. On the product detail page, click the "Add to Cart" button
2. Wait for the action to complete (visual confirmation)
3. Verify cart notification/toast appears
4. Navigate to the Shopping Cart page
5. Verify the product is added with correct quantity (1)
6. Verify the product price matches the product detail page

**Expected Result:**
- "Add to Cart" button shows loading state during the action
- Success message displays: "Product added to cart" or similar
- Cart counter increases by 1
- Product appears in the Shopping Cart with correct details
- No duplicate entries are created

---

### TC_009: Add Multiple Different Products to Cart
**Priority:** P0 - Critical  
**Category:** Add to Cart - Happy Path

**Preconditions:**
- User is successfully logged in
- Dashboard page is loaded
- At least 3 different products are available

**Test Steps:**
1. Search and navigate to Product 1 detail page
2. Click "Add to Cart" button
3. Confirm product added successfully
4. Search and navigate to Product 2 detail page
5. Click "Add to Cart" button
6. Confirm product added successfully
7. Search and navigate to Product 3 detail page
8. Click "Add to Cart" button
9. Navigate to Shopping Cart page
10. Verify all 3 products are listed in the cart

**Expected Result:**
- All 3 products appear in the shopping cart
- Each product displays with correct name, price, and quantity
- Cart total is calculated correctly (sum of all products)
- No products are missing or duplicated
- Cart counter shows "3"

---

### TC_010: Validate Shopping Cart Contents
**Priority:** P1 - High  
**Category:** Cart Validation - Happy Path

**Preconditions:**
- User is successfully logged in
- At least 2 products are added to the cart
- Shopping cart page is displayed

**Test Steps:**
1. Navigate to the Shopping Cart page
2. Verify all added products are displayed with:
   - Product name
   - Product price (individual)
   - Quantity
   - Subtotal for each product
3. Verify cart summary section displays:
   - Subtotal amount
   - Tax/GST (if applicable)
   - Shipping charges (if applicable)
   - Total amount
4. Verify calculations are accurate
5. Verify "Proceed to Checkout" button is visible and enabled

**Expected Result:**
- All products in cart are accurately displayed
- Each product shows correct details and calculations
- Cart totals are calculated correctly:
  - Subtotal = sum of all (price × quantity)
  - Total = Subtotal + Tax + Shipping (if applicable)
- Checkout button is functional

---

### TC_011: Proceed to Checkout
**Priority:** P0 - Critical  
**Category:** Checkout - Happy Path

**Preconditions:**
- User is successfully logged in
- At least 1 product is in the cart
- Shopping Cart page is displayed

**Test Steps:**
1. On the Shopping Cart page, verify the "Proceed to Checkout" button
2. Click the "Proceed to Checkout" button
3. Wait for the checkout page to load
4. Verify checkout page displays:
   - Order summary with all products
   - Billing/Shipping address form
   - Country selection dropdown
   - Payment method options (if applicable)
   - Order total

**Expected Result:**
- Checkout page loads successfully within 3 seconds
- All products from cart are displayed in order summary
- Order total matches the cart total
- All required form fields are visible
- Checkout page is accessible only to logged-in users

---

### TC_012: Select Delivery Country During Checkout
**Priority:** P1 - High  
**Category:** Checkout - Country Selection

**Preconditions:**
- User is on the Checkout page
- Checkout form is displayed
- Country dropdown is visible

**Test Steps:**
1. On the Checkout page, locate the "Country" dropdown field
2. Click on the Country dropdown to open the list
3. Verify country list is displayed and searchable
4. Search for or select "India" from the country list
5. Verify "India" is selected in the dropdown
6. Observe if shipping charges update (if applicable)
7. Verify the checkout form is populated with country-specific information

**Expected Result:**
- Country dropdown opens and displays all countries
- "India" can be selected successfully
- Selected country is displayed in the dropdown
- Form validation passes for the country field
- All form fields remain functional after country selection

---

### TC_013: Complete Purchase with Valid Delivery Information
**Priority:** P0 - Critical  
**Category:** Place Order - Happy Path

**Preconditions:**
- User is on the Checkout page
- All required fields are visible (address, country, payment info)
- At least 1 product is in the cart
- Valid user address information is available

**Test Steps:**
1. On the Checkout page, fill in all required fields:
   - Street Address: Enter valid address
   - City: Enter valid city name
   - State/Province: Enter or select state
   - Postal Code: Enter valid postal code
   - Country: Select "India"
2. Verify all fields are filled correctly
3. If applicable, select payment method
4. Click the "Place Order" button
5. Wait for order processing (typically 2-5 seconds)
6. Observe the order confirmation page

**Expected Result:**
- Order is processed successfully
- Order confirmation page is displayed
- Success message appears: "Thank you for your order" or similar
- Order ID is generated and displayed
- Order summary shows all products and total amount
- User receives confirmation (on-screen or via email notification)

---

### TC_014: Capture and Validate Order ID
**Priority:** P0 - Critical  
**Category:** Order Capture & Validation - Happy Path

**Preconditions:**
- Order has been successfully placed
- Order confirmation page is displayed
- Order ID is visible on the page

**Test Steps:**
1. On the Order Confirmation page, locate the Order ID
2. Capture/Note the Order ID (format: typically alphanumeric, e.g., "ORD123456")
3. Verify Order ID format:
   - Contains both letters and numbers
   - Is unique
   - Is not empty or null
4. Take a screenshot or copy the Order ID
5. Verify Order ID remains consistent on the page (no changes on page refresh)
6. Navigate to "My Orders" or "Order History" page
7. Search for the Order ID in the order history

**Expected Result:**
- Order ID is clearly displayed on confirmation page
- Order ID follows a consistent format
- Order ID is captured successfully
- Order can be found in order history using the ID
- Order details match the just-placed order

---

### TC_015: Validate Order in UI - Order History
**Priority:** P1 - High  
**Category:** Order Validation - UI

**Preconditions:**
- User is successfully logged in
- Order has been placed and confirmed
- Order History/My Orders page is accessible

**Test Steps:**
1. Navigate to "My Orders" or "Order History" page
2. Verify the recently placed order appears in the list
3. Click on the order to view details
4. Verify the order details page displays:
   - Order ID (matching the captured ID)
   - Order date and time
   - All products ordered with quantities and prices
   - Delivery address
   - Order total amount
   - Order status (Processing/Confirmed/Shipped, etc.)
   - Estimated delivery date (if applicable)
5. Verify no data is missing or corrupted

**Expected Result:**
- Recently placed order appears in order history
- Order ID in history matches the captured Order ID
- All order details are accurately displayed
- No data discrepancies between order confirmation page and order history
- Order status is appropriate (not cancelled or failed)

---

### TC_016: Validate Order Through API
**Priority:** P1 - High  
**Category:** Order Validation - API

**Preconditions:**
- User is successfully logged in
- Order has been placed and confirmed
- API endpoint for order retrieval is accessible
- Valid authentication token/API key is available

**Test Steps:**
1. Prepare API request:
   - Method: GET
   - Endpoint: `/orders/{orderId}` or similar
   - Headers: Include valid authentication token
2. Call the API endpoint with the captured Order ID
3. Verify API response status code: 200 (OK)
4. Parse the API response and validate:
   - Order ID matches the placed order
   - Order total matches UI and order confirmation
   - Products list matches with quantities
   - Delivery address matches
   - Order status is valid (Processing/Confirmed, etc.)
   - User ID/Email matches logged-in user
   - No sensitive data (full credit card) is exposed in response
5. Verify response time is under 1 second
6. Verify response format (JSON) is valid

**Expected Result:**
- API returns 200 status code
- Response contains complete order information
- Order details via API match UI and order confirmation
- Order total via API = UI total
- Product details match exactly
- API response follows REST conventions
- Sensitive payment data is not exposed
- Response time is within acceptable limits

---

### TC_017: Successful End-to-End Purchase Flow
**Priority:** P0 - Critical  
**Category:** End-to-End - Happy Path

**Preconditions:**
- Application is loaded and accessible
- Valid user credentials are available
- At least 3 products are available in the system
- API endpoints are functional

**Test Steps:**
1. **Login:** Execute login with valid credentials (Refer TC_001)
2. **Search:** Search for a product by name (Refer TC_004)
3. **Validate Product:** View product details and validate information (Refer TC_007)
4. **Add to Cart:** Add the product to cart (Refer TC_008)
5. **Search & Add Second Product:** Search for another product and add to cart (Refer TC_009)
6. **Validate Cart:** Navigate to shopping cart and validate contents (Refer TC_010)
7. **Checkout:** Click Proceed to Checkout (Refer TC_011)
8. **Select Country:** Select "India" as delivery country (Refer TC_012)
9. **Place Order:** Fill address details and place order (Refer TC_013)
10. **Capture Order ID:** Note the Order ID from confirmation page (Refer TC_014)
11. **Validate in UI:** Search order in My Orders section (Refer TC_015)
12. **Validate via API:** Retrieve order details using API (Refer TC_016)

**Expected Result:**
- Complete purchase flow executes without errors
- All steps complete successfully
- Order is created with valid Order ID
- Order details are consistent across UI and API
- User can complete purchase in under 5 minutes
- No data loss or corruption during the flow

---

### TC_018: Validate Tax Calculation in Cart
**Priority:** P2 - Medium  
**Category:** Cart - Calculation Validation

**Preconditions:**
- User is successfully logged in
- At least 2 products with different prices are in the cart
- Shopping Cart page is displayed
- Tax rate is known (e.g., 18% GST)

**Test Steps:**
1. On Shopping Cart page, note the subtotal amount
2. Locate and note the Tax/GST amount displayed
3. Calculate expected tax: Subtotal × (Tax Rate)
4. Compare calculated tax with displayed tax
5. Verify the total amount: Subtotal + Tax + Shipping (if any)
6. Manually calculate total and compare with displayed total

**Expected Result:**
- Tax calculation is accurate
- Tax displayed = Subtotal × Tax Rate
- Total = Subtotal + Tax + Shipping charges (if applicable)
- No rounding errors in calculations
- All amounts are in correct currency format

---

### TC_019: Product Becomes Unavailable During Checkout
**Priority:** P2 - Medium  
**Category:** Edge Cases - Inventory Management

**Preconditions:**
- User is on Checkout page with product(s) in cart
- Product stock is limited (e.g., only 1 unit available)
- Another user/transaction can purchase the product

**Test Steps:**
1. On Checkout page, fill in address details
2. Simulate stock depletion (coordinate with QA/Admin):
   - Another user purchases the same product
   - Product becomes out of stock
3. Click "Place Order" button
4. Observe system behavior

**Expected Result:**
- System detects product unavailability
- Order placement is prevented with error message
- Error message indicates which product is unavailable: "Product XYZ is out of stock"
- User is offered options:
  - Remove product and proceed with remaining items
  - Continue shopping to add other products
  - Return to cart to modify order
- Cart is updated to reflect current inventory

---

### TC_020: Validate Secure HTTPS Connection During Checkout
**Priority:** P1 - High  
**Category:** Security - HTTPS Validation

**Preconditions:**
- User is on Checkout page
- Browser developer tools are accessible
- Checkout page contains payment/sensitive information

**Test Steps:**
1. On Checkout page, inspect the page URL
2. Verify URL starts with "https://" (not "http://")
3. Open Browser Developer Tools (F12)
4. Navigate to "Security" or "Console" tab
5. Verify no security warnings are displayed
6. Check for SSL certificate validity:
   - Certificate is issued by trusted CA
   - Certificate is not expired
7. Verify sensitive data fields (address, payment) use secure input types

**Expected Result:**
- Checkout page uses HTTPS protocol
- No security warnings or errors in console
- SSL certificate is valid and trusted
- Green lock icon appears in browser address bar
- All form fields are secured (sensitive data masked)
- No mixed content warnings

---

---

# Negative Test Cases - Rahul Shetty Academy Client Application

**Document Type:** Negative Test Cases  
**Version:** 1.0  
**Focus Areas:** Invalid inputs, error handling, security, data validation

---

## Negative Test Cases

### NTC_001: Login with Empty Email Field
**Priority:** P1 - High  
**Category:** Login - Input Validation

**Preconditions:**
- Application is loaded and accessible
- Login page is displayed
- Email field is visible and functional

**Test Steps:**
1. Navigate to the application login page
2. Leave the Email field empty
3. Enter a valid password in the Password field
4. Click the "Sign In" button
5. Observe the validation behavior

**Expected Result:**
- Login attempt is prevented
- Error message displays: "Email field is required" or similar
- User remains on the login page
- No API call is made to the server
- Focus may be set to the empty Email field

---

### NTC_002: Login with Empty Password Field
**Priority:** P1 - High  
**Category:** Login - Input Validation

**Preconditions:**
- Application is loaded and accessible
- Login page is displayed
- Password field is visible and functional

**Test Steps:**
1. Navigate to the application login page
2. Enter a valid email in the Email field
3. Leave the Password field empty
4. Click the "Sign In" button
5. Observe the validation behavior

**Expected Result:**
- Login attempt is prevented
- Error message displays: "Password field is required" or similar
- User remains on the login page
- No API call is made to the server
- Focus may be set to the empty Password field

---

### NTC_003: Login with Both Email and Password Empty
**Priority:** P1 - High  
**Category:** Login - Input Validation

**Preconditions:**
- Application is loaded and accessible
- Login page is displayed

**Test Steps:**
1. Navigate to the application login page
2. Leave both Email and Password fields empty
3. Click the "Sign In" button
4. Observe the validation behavior

**Expected Result:**
- Login attempt is prevented
- Error message appears for empty fields
- Both fields are highlighted/indicated as required
- User remains on the login page
- No session is created

---

### NTC_004: Login with Incorrect Email Format
**Priority:** P1 - High  
**Category:** Login - Input Validation

**Preconditions:**
- Application is loaded and accessible
- Login page is displayed
- Client-side validation is enabled

**Test Steps:**
1. Navigate to the application login page
2. Enter invalid email format (e.g., "usergmail.com" without @) in Email field
3. Enter any password in the Password field
4. Click the "Sign In" button
5. Observe validation response

**Expected Result:**
- Form validation prevents login
- Error message: "Please enter a valid email address" or similar
- Email field is highlighted with error indicator
- User remains on the login page
- No API call is made

---

### NTC_005: Login with SQL Injection Attempt
**Priority:** P1 - High  
**Category:** Login - Security

**Preconditions:**
- Application is loaded and accessible
- Login page is displayed
- Application has SQL injection protection

**Test Steps:**
1. Navigate to the application login page
2. Enter SQL injection payload in Email field: `' OR '1'='1`
3. Enter any password in the Password field
4. Click the "Sign In" button
5. Monitor API response and application behavior

**Expected Result:**
- Login fails with appropriate error message
- SQL injection payload is not executed
- User is not logged in
- No database error is exposed to the user
- Application remains stable and functional
- Payload is properly escaped/sanitized

---

### NTC_006: Login with Special Characters in Email
**Priority:** P2 - Medium  
**Category:** Login - Input Validation

**Preconditions:**
- Application is loaded and accessible
- Login page is displayed

**Test Steps:**
1. Navigate to the application login page
2. Enter email with special characters: `user@#$%^&.com` in Email field
3. Enter a valid password in the Password field
4. Click the "Sign In" button
5. Observe system behavior

**Expected Result:**
- Email validation fails or special characters are rejected
- Error message: "Invalid characters in email address"
- User remains on the login page
- No login attempt is made

---

### NTC_007: Login Account Doesn't Exist
**Priority:** P1 - High  
**Category:** Login - User Management

**Preconditions:**
- Application is loaded and accessible
- Login page is displayed
- User account does not exist in the system

**Test Steps:**
1. Navigate to the application login page
2. Enter a non-existent email address (e.g., `nonexistentuser@example.com`)
3. Enter any password in the Password field
4. Click the "Sign In" button
5. Observe the error message

**Expected Result:**
- Login fails with error message: "Invalid email or password"
- User is not logged in
- User remains on the login page
- No sensitive information (account existence) is revealed
- No session is created

---

### NTC_008: Search Product with Empty Search Field
**Priority:** P2 - Medium  
**Category:** Product Search - Input Validation

**Preconditions:**
- User is successfully logged in
- Dashboard page is loaded
- Search field is visible and functional

**Test Steps:**
1. On the Dashboard, locate the search box
2. Leave the search field empty
3. Click the Search button or press Enter
4. Observe the system behavior

**Expected Result:**
- Search is either prevented with error: "Please enter a search term"
- OR all products are displayed (application default behavior)
- No system errors or blank page
- Search results area displays clearly

---

### NTC_009: Search Product with Special Characters
**Priority:** P2 - Medium  
**Category:** Product Search - Input Validation

**Preconditions:**
- User is successfully logged in
- Dashboard page is loaded
- Search functionality is enabled

**Test Steps:**
1. On the Dashboard, locate the search box
2. Enter special characters in search field: `@#$%^&*()`
3. Click the Search button or press Enter
4. Observe search behavior and results

**Expected Result:**
- Search handles special characters gracefully
- Either returns "No products found" message
- OR searches are properly escaped/filtered
- No system errors or crashes
- Application remains stable

---

### NTC_010: Search Product with SQL Injection
**Priority:** P1 - High  
**Category:** Product Search - Security

**Preconditions:**
- User is successfully logged in
- Dashboard page is loaded
- Search field is visible

**Test Steps:**
1. On the Dashboard, enter SQL injection payload in search: `' OR '1'='1`
2. Click the Search button
3. Monitor API response and results
4. Verify application doesn't expose sensitive data

**Expected Result:**
- SQL injection is prevented
- Search returns "No products found" or error message
- Database error is not exposed
- No unauthorized data access occurs
- Application remains functional

---

### NTC_011: Checkout with Empty Shopping Cart
**Priority:** P1 - High  
**Category:** Checkout - Business Logic

**Preconditions:**
- User is successfully logged in
- Shopping cart is empty
- User attempts to access checkout directly

**Test Steps:**
1. Ensure shopping cart is empty (remove all items)
2. Attempt to navigate to checkout page:
   - Via URL directly: `/checkout`
   - Via browser back button if previously on checkout
3. Observe system behavior

**Expected Result:**
- User is redirected to the shopping cart page
- Error message displays: "Your cart is empty. Please add products before checkout"
- Checkout page is not accessible with empty cart
- User is prompted to continue shopping
- "Back to Shopping" or "Continue Shopping" button is available

---

### NTC_012: Checkout Without Filling Required Address Fields
**Priority:** P1 - High  
**Category:** Checkout - Input Validation

**Preconditions:**
- User is on the Checkout page
- At least 1 product is in the cart
- Checkout form is displayed

**Test Steps:**
1. On Checkout page, leave all address fields empty
2. Do not fill: Street Address, City, State, Postal Code, Country
3. Click the "Place Order" button
4. Observe validation behavior

**Expected Result:**
- Order placement is prevented
- Validation error message appears: "Please fill all required fields"
- All required fields are highlighted
- User remains on Checkout page
- No API call is made
- Cart items are not removed

---

### NTC_013: Invalid Country Selection (Empty Country Field)
**Priority:** P1 - High  
**Category:** Checkout - Country Selection

**Preconditions:**
- User is on the Checkout page
- Address form is displayed
- Country dropdown is visible

**Test Steps:**
1. On Checkout page, fill all address fields except Country
2. Leave Country dropdown as default (unselected/empty)
3. Click the "Place Order" button
4. Observe validation response

**Expected Result:**
- Order placement is prevented
- Error message displays: "Please select a country"
- Country dropdown is highlighted as required
- User remains on Checkout page
- All previously entered data is retained

---

### NTC_014: Checkout with Invalid Postal Code Format
**Priority:** P2 - Medium  
**Category:** Checkout - Input Validation

**Preconditions:**
- User is on the Checkout page
- Address form is displayed
- Postal code field accepts format validation

**Test Steps:**
1. On Checkout page, fill all address fields
2. Enter invalid postal code format:
   - Only letters: "ABCDEF"
   - Too short: "123"
   - Invalid characters: "12@#$"
3. Click the "Place Order" button
4. Observe validation behavior

**Expected Result:**
- Order placement is prevented
- Error message: "Please enter a valid postal code format"
- Postal code field is highlighted
- User remains on Checkout page
- Valid postal code examples are shown (if applicable)

---

### NTC_015: Session Expiration During Checkout
**Priority:** P1 - High  
**Category:** Session Management - Security

**Preconditions:**
- User is on the Checkout page filling order details
- User session timeout is known (e.g., 30 minutes)
- Test environment allows session manipulation

**Test Steps:**
1. User navigates to Checkout page
2. Begin filling in address details slowly
3. Simulate session expiration by:
   - Waiting for session timeout
   - OR manually clearing session cookies in developer tools
4. Continue filling form and attempt to place order
5. Observe system behavior

**Expected Result:**
- User is redirected to login page
- Session expired message displays: "Your session has expired. Please login again"
- Order is not placed
- Cart data may be retained or cleared (based on design)
- User can log in again and retry checkout

---

### NTC_016: Place Order with Unauthorized API Access
**Priority:** P1 - High  
**Category:** Order Creation - Security

**Preconditions:**
- Valid authenticated user has an order in cart
- API endpoint for order creation is known
- User's authentication token is available

**Test Steps:**
1. User fills checkout form with valid details
2. Intercept the API request (using browser dev tools or proxy)
3. Modify the request:
   - Remove or alter authentication header/token
   - Change user ID in request body
   - Modify order amount
4. Send modified API request
5. Observe API response and application behavior

**Expected Result:**
- API returns 401 (Unauthorized) or 403 (Forbidden) error
- Order is not created
- Attacker is not logged in with another user's account
- Original order is not placed
- Error message in UI: "Unauthorized access" or "Session expired"

---

### NTC_017: Place Order with Invalid/Expired Authentication Token
**Priority:** P1 - High  
**Category:** Order Creation - Security

**Preconditions:**
- User is logged in with valid token
- Checkout form is filled with valid details
- Authentication token can be intercepted

**Test Steps:**
1. User fills checkout form with valid details
2. Intercept API request before sending
3. Modify the Authorization header:
   - Use expired token
   - Use invalid/malformed token
   - Use token from another user
4. Send the modified request
5. Monitor API response

**Expected Result:**
- API returns 401 (Unauthorized) error
- Order is not created
- No data is accessed
- User receives error: "Authentication failed" or "Invalid token"
- User is prompted to login again

---

### NTC_018: API Validation - Missing Order Data in Response
**Priority:** P1 - High  
**Category:** Order Validation - API Data Integrity

**Preconditions:**
- Order has been placed successfully
- Order ID is captured
- API endpoint for order retrieval is accessible
- API response should contain complete order data

**Test Steps:**
1. Prepare API GET request for order details: `/orders/{orderId}`
2. Include valid authentication token
3. Call the API endpoint
4. Parse the response and verify presence of required fields:
   - Order ID
   - Order Date
   - Customer Email
   - Products list
   - Total amount
   - Delivery address
   - Order status
5. Identify any missing fields

**Expected Result:**
- API returns 200 (OK) status code
- All required fields are present in response
- No null/empty values for critical fields:
   - Order ID is not null
   - Total amount is not null
   - Products list is not empty
- Response structure is valid JSON
- Data types are correct (string, number, array, etc.)

---

### NTC_019: API Validation - Invalid Order ID in API Request
**Priority:** P1 - High  
**Category:** Order Validation - API Error Handling

**Preconditions:**
- API endpoint for order retrieval is accessible: `/orders/{orderId}`
- Valid authentication token is available
- Application validates order ID format

**Test Steps:**
1. Prepare API GET request with invalid Order ID:
   - Non-existent Order ID: `/orders/999999`
   - Invalid format: `/orders/invalid_id`
   - Negative number: `/orders/-123`
   - Special characters: `/orders/@#$%`
2. Include valid authentication token
3. Call the API endpoint
4. Observe API response and status code

**Expected Result:**
- API returns 404 (Not Found) for non-existent order
- API returns 400 (Bad Request) for invalid format
- Appropriate error message: "Order not found" or "Invalid order ID format"
- No system errors are exposed
- User cannot access unauthorized order data

---

### NTC_020: API Validation - Unauthorized User Accessing Other User's Order
**Priority:** P1 - High  
**Category:** Order Validation - Authorization

**Preconditions:**
- Two different user accounts exist in the system
- Both users have placed orders
- API endpoint requires authentication
- Order IDs of both users are known

**Test Steps:**
1. User A logs in and obtains authentication token
2. Prepare API request for User B's order using User A's token:
   - GET `/orders/{UserB_OrderID}`
   - Header: Authorization with User A's token
3. Call the API endpoint
4. Observe if User A can access User B's order data

**Expected Result:**
- API returns 403 (Forbidden) error
- User A cannot retrieve User B's order details
- Error message: "Unauthorized access" or "Access denied"
- No sensitive order data is returned
- Access control is properly enforced

---

### NTC_021: API Validation - Invalid API Endpoint
**Priority:** P2 - Medium  
**Category:** API Error Handling

**Preconditions:**
- API base URL is known
- Authentication token is available

**Test Steps:**
1. Prepare API request to non-existent endpoint:
   - GET `/api/invalid-endpoint`
   - GET `/orders/xyz/invalid-method`
2. Include valid authentication token
3. Call the API endpoint
4. Observe response and status code

**Expected Result:**
- API returns 404 (Not Found) status code
- Error message: "Endpoint not found" or "Invalid API path"
- No sensitive information is exposed
- Response is in valid JSON format
- Request doesn't cause server errors

---

### NTC_022: Cart - Add Product with Quantity Zero
**Priority:** P2 - Medium  
**Category:** Add to Cart - Input Validation

**Preconditions:**
- User is on product detail page
- "Add to Cart" functionality allows quantity input
- Quantity field is visible

**Test Steps:**
1. On product detail page, locate quantity field
2. Enter quantity value: 0
3. Click "Add to Cart" button
4. Observe system behavior

**Expected Result:**
- Add to Cart action is prevented
- Error message: "Please select at least 1 quantity"
- Product is not added to cart
- Quantity field highlights error
- Quantity defaults to 1 or minimum valid value

---

### NTC_023: Cart - Add Product with Negative Quantity
**Priority:** P2 - Medium  
**Category:** Add to Cart - Input Validation

**Preconditions:**
- User is on product detail page
- Quantity field accepts numeric input

**Test Steps:**
1. On product detail page, attempt to enter negative quantity:
   - Type: -5
   - Or use browser developer tools to modify HTML
2. Click "Add to Cart" button
3. Monitor application behavior

**Expected Result:**
- Negative quantity is rejected
- Error message: "Quantity must be greater than 0"
- Product is not added to cart
- Quantity field is reset to default (1) or shows error
- Application handles input validation properly

---

### NTC_024: Cart - Add Quantity Exceeding Stock
**Priority:** P1 - High  
**Category:** Add to Cart - Inventory Management

**Preconditions:**
- User is on product detail page
- Product has limited stock (e.g., 5 units available)
- Stock information is displayed

**Test Steps:**
1. On product detail page, note the available stock: 5 units
2. Enter quantity exceeding stock: 10 units
3. Click "Add to Cart" button
4. Observe system response

**Expected Result:**
- Add to Cart action is prevented
- Error message: "Only 5 units available in stock"
- Product is not added to cart
- Stock information is clearly displayed
- User can adjust quantity to available amount

---

### NTC_025: Concurrent Order Placement - Race Condition
**Priority:** P2 - Medium  
**Category:** Order Creation - Concurrency

**Preconditions:**
- Two browser windows/tabs with same user logged in
- Both tabs have the same product(s) in cart
- Stock is limited (e.g., only 1 unit)

**Test Steps:**
1. Open two browser tabs with same logged-in user
2. On both tabs, fill checkout form with valid details
3. On Tab 1, click "Place Order" button
4. Immediately on Tab 2, click "Place Order" button (before Tab 1 completes)
5. Monitor both responses

**Expected Result:**
- First request completes and creates order (inventory decremented)
- Second request is either:
  - Blocked with "Product out of stock" error
  - OR creates order but shows warning about limited stock
- Inventory is not over-sold
- Data consistency is maintained
- No duplicate orders for same product are created

---

### NTC_026: Order Validation - API Response with Invalid JSON
**Priority:** P2 - Medium  
**Category:** Order Validation - API Data Format

**Preconditions:**
- Order has been placed
- API endpoint is callable
- Network proxy can intercept responses (for testing)

**Test Steps:**
1. Prepare to retrieve order via API
2. If possible, simulate server returning malformed JSON:
   - Missing closing bracket: `{"orderId": 123`
   - Invalid JSON syntax: `{orderId: 123}`
3. Call API endpoint
4. Observe application parsing behavior
5. Monitor browser console for errors

**Expected Result:**
- Application gracefully handles invalid JSON
- Error message: "Failed to parse response data" or similar
- UI does not crash
- User is shown appropriate error message
- Fallback/retry mechanism works if available

---

### NTC_027: Add to Cart - Network Failure
**Priority:** P2 - Medium  
**Category:** Add to Cart - Error Handling

**Preconditions:**
- User is on product detail page
- Network can be simulated as offline (using dev tools)

**Test Steps:**
1. On product detail page, set network to "Offline" mode (Dev Tools)
2. Click "Add to Cart" button
3. Observe application behavior
4. Restore network connectivity

**Expected Result:**
- Add to Cart button shows loading state then fails
- Error message: "Network error. Please check your connection" or similar
- Product is not added to cart
- Retry button or option is available
- User can retry after network is restored

---

### NTC_028: Login - Account Locked After Multiple Failed Attempts
**Priority:** P1 - High  
**Category:** Login - Security/Account Lockout

**Preconditions:**
- Application implements account lockout after failed attempts
- Valid user account exists
- Lockout threshold is known (e.g., 5 failed attempts)

**Test Steps:**
1. Navigate to login page
2. Enter valid email but incorrect password 5 times consecutively
3. Observe account lockout mechanism:
   - Does account lock?
   - Is user notified?
   - Can user retry immediately?
4. Attempt to login with correct credentials after lockout

**Expected Result:**
- After 5 failed attempts, account is locked
- Error message: "Account locked due to multiple failed login attempts. Try again later"
- User cannot log in even with correct password
- Lockout duration is reasonable (e.g., 30 minutes or until email verification)
- User is informed how to unlock account (password reset, support contact)

---

### NTC_029: Add to Cart - Duplicate Requests Handling
**Priority:** P2 - Medium  
**Category:** Add to Cart - Concurrency

**Preconditions:**
- User is on product detail page
- "Add to Cart" button is clickable

**Test Steps:**
1. On product detail page, click "Add to Cart" button
2. Immediately click it again before the first request completes (rapid double-click)
3. Wait for both requests to complete
4. Navigate to shopping cart

**Expected Result:**
- Only one product is added to cart (not two)
- Quantity is 1 (or first request updates quantity, not duplicated)
- Cart reflects correct product count
- Second request is either:
  - Ignored if button is disabled during first request
  - OR handled gracefully to prevent duplicate additions
- No data corruption occurs

---

### NTC_030: Checkout - XSS Attack via Address Fields
**Priority:** P1 - High  
**Category:** Checkout - Security

**Preconditions:**
- User is on Checkout page
- Address form fields are editable
- Application has XSS protection

**Test Steps:**
1. On Checkout page, enter XSS payload in address field:
   - Street Address: `<script>alert('XSS')</script>`
   - City: `<img src=x onerror=alert('XSS')>`
2. Fill remaining fields with valid data
3. Click "Place Order" button
4. Monitor if JavaScript executes or is sanitized

**Expected Result:**
- XSS payload is not executed
- Input is properly sanitized/escaped
- Order is created successfully (payload treated as plain text)
- No JavaScript alert appears
- Order confirmation page displays correctly
- Payload is stored as plain text in database (not executable)

---

---

# Boundary Test Cases - Rahul Shetty Academy Client Application

**Document Type:** Boundary Test Cases  
**Version:** 1.0  
**Focus Areas:** Field length limits, edge values, special characters, data format validation

---

## Boundary Test Cases

### BTC_001: Email Field - Minimum Length (1 Character)
**Priority:** P2 - Medium  
**Category:** Email Validation - Minimum Boundary

**Preconditions:**
- Application is loaded and accessible
- Login page is displayed
- Email field is visible and functional

**Test Steps:**
1. Navigate to the application login page
2. Enter minimum email value: `a` (single character)
3. Enter a valid password in the Password field
4. Click the "Sign In" button
5. Observe validation behavior

**Expected Result:**
- Email validation fails
- Error message displays: "Email must be between X and Y characters" or "Invalid email format"
- Email with single character is rejected
- User remains on login page
- Login attempt is not made

---

### BTC_002: Email Field - Minimum Valid Email (5 Characters)
**Priority:** P2 - Medium  
**Category:** Email Validation - Minimum Valid Boundary

**Preconditions:**
- Application is loaded and accessible
- Login page is displayed

**Test Steps:**
1. Navigate to the application login page
2. Enter minimum valid email format: `a@b.c` (5 characters)
3. Enter a valid password
4. Click the "Sign In" button
5. Observe if validation passes

**Expected Result:**
- Email passes format validation (contains @, domain, extension)
- Login attempt is made (success/failure depends on account existence)
- OR email is rejected with specific reason if minimum length requirement is higher
- Application behavior is consistent with email format standards

---

### BTC_003: Email Field - Maximum Length (254 Characters)
**Priority:** P2 - Medium  
**Category:** Email Validation - Maximum Boundary

**Preconditions:**
- Application is loaded and accessible
- Login page is displayed
- Maximum email length is known (RFC 5321 defines 254 characters)

**Test Steps:**
1. Navigate to the application login page
2. Generate email with exactly 254 characters (valid format): `verylongemailaddress${'a'.repeat(200)}@example.com`
3. Enter a valid password
4. Click the "Sign In" button
5. Observe if email is accepted

**Expected Result:**
- Email field accepts up to 254 characters (RFC 5321 standard)
- No truncation occurs
- Login attempt is processed normally
- Email with 254 characters is handled correctly

---

### BTC_004: Email Field - Exceeding Maximum Length (255+ Characters)
**Priority:** P2 - Medium  
**Category:** Email Validation - Over Maximum Boundary

**Preconditions:**
- Application is loaded and accessible
- Login page is displayed

**Test Steps:**
1. Navigate to the application login page
2. Generate email exceeding 254 characters (e.g., 256 characters)
3. Attempt to enter this long email in the Email field
4. Click the "Sign In" button
5. Observe validation behavior

**Expected Result:**
- Email field truncates or rejects input exceeding maximum length
- Error message: "Email is too long (maximum 254 characters)"
- OR input is silently truncated to 254 characters
- Login attempt either fails or succeeds based on truncated email
- No application crashes occur

---

### BTC_005: Password Field - Minimum Length (1 Character)
**Priority:** P2 - Medium  
**Category:** Password Validation - Minimum Boundary

**Preconditions:**
- Application is loaded and accessible
- Login page is displayed
- Password requirements are known

**Test Steps:**
1. Navigate to the application login page
2. Enter valid email address
3. Enter minimum password value: `a` (single character)
4. Click the "Sign In" button
5. Observe validation behavior

**Expected Result:**
- Password validation fails
- Error message displays: "Password must be at least X characters" or "Invalid password format"
- Single character password is rejected
- User remains on login page
- No login API call is made

---

### BTC_006: Password Field - Minimum Valid Length (8 Characters)
**Priority:** P2 - Medium  
**Category:** Password Validation - Minimum Valid Boundary

**Preconditions:**
- Application is loaded and accessible
- Login page is displayed
- Typical password minimum is 8 characters

**Test Steps:**
1. Navigate to the application login page
2. Enter valid email address
3. Enter password with exactly 8 characters: `Passwor1` (8 chars with uppercase, lowercase, number)
4. Click the "Sign In" button
5. Observe if password passes validation

**Expected Result:**
- If account exists with this password, login succeeds
- If not, authentication fails with standard error message
- Password length passes validation requirements
- No specific "password too short" error appears

---

### BTC_007: Password Field - Maximum Length (128 Characters)
**Priority:** P2 - Medium  
**Category:** Password Validation - Maximum Boundary

**Preconditions:**
- Application is loaded and accessible
- Login page is displayed
- Maximum password length is defined

**Test Steps:**
1. Navigate to the application login page
2. Enter valid email address
3. Enter password with exactly 128 characters: `${'a'.repeat(64)}${'A'.repeat(32)}${'1'.repeat(32)}` (128 chars)
4. Click the "Sign In" button
5. Observe if password is accepted

**Expected Result:**
- Password field accepts up to 128 characters
- No truncation occurs
- Login attempt is processed normally
- Long password is handled securely

---

### BTC_008: Password Field - Exceeding Maximum Length (129+ Characters)
**Priority:** P2 - Medium  
**Category:** Password Validation - Over Maximum Boundary

**Preconditions:**
- Application is loaded and accessible
- Login page is displayed

**Test Steps:**
1. Navigate to the application login page
2. Enter valid email address
3. Enter password exceeding 128 characters (e.g., 150 characters)
4. Attempt to click "Sign In" button
5. Observe application behavior

**Expected Result:**
- Password field either:
  - Truncates input to maximum allowed length (128 chars)
  - OR rejects input with error: "Password is too long"
- No application crashes occur
- Login attempt is handled gracefully
- User is informed of the issue

---

### BTC_009: Product Search Field - Minimum Length (1 Character)
**Priority:** P2 - Medium  
**Category:** Product Search - Minimum Boundary

**Preconditions:**
- User is successfully logged in
- Dashboard page is loaded
- Search field is visible

**Test Steps:**
1. On the Dashboard, locate the search box
2. Enter single character: `Z`
3. Click the Search button or press Enter
4. Wait for search results to load
5. Observe if results are returned

**Expected Result:**
- Search with single character is accepted
- Results show products matching the character:
  - Either products containing "Z" are displayed
  - OR "No products found" if no matches exist
- No validation error occurs
- Search functionality works with minimum input

---

### BTC_010: Product Search Field - Maximum Length (256 Characters)
**Priority:** P2 - Medium  
**Category:** Product Search - Maximum Boundary

**Preconditions:**
- User is successfully logged in
- Dashboard page is loaded
- Search field has a maximum length limit

**Test Steps:**
1. On the Dashboard, locate the search box
2. Enter search query with exactly 256 characters (e.g., `${'a'.repeat(256)}`)
3. Click the Search button or press Enter
4. Wait for search results
5. Observe if search is processed

**Expected Result:**
- Search field accepts up to 256 characters
- Search query is processed (even if very long)
- No results are found (as query is likely nonsensical)
- Search completes without timeout or errors
- Application remains responsive

---

### BTC_011: Product Search Field - Exceeding Maximum Length (500+ Characters)
**Priority:** P2 - Medium  
**Category:** Product Search - Over Maximum Boundary

**Preconditions:**
- User is successfully logged in
- Dashboard page is loaded
- Search field may have character limit

**Test Steps:**
1. On the Dashboard, locate the search box
2. Attempt to enter 500+ characters in search field
3. Observe if all characters can be entered
4. Click Search button if possible
5. Monitor application behavior

**Expected Result:**
- Search field either:
  - Truncates input to maximum allowed length
  - OR prevents additional characters from being entered
  - OR shows error: "Search query is too long"
- If search is attempted, it either:
  - Returns "No products found"
  - OR processes truncated query
- Application does not crash or hang

---

### BTC_012: Country Field - Empty/Null Selection
**Priority:** P1 - High  
**Category:** Country Validation - Empty Boundary

**Preconditions:**
- User is on the Checkout page
- Country dropdown is visible
- All other form fields are filled with valid data

**Test Steps:**
1. On Checkout page, fill all required fields except Country
2. Leave Country dropdown as default (unselected/empty)
3. Attempt to click "Place Order" button
4. Observe validation behavior

**Expected Result:**
- Order placement is prevented
- Error message displays: "Please select a country"
- Country field is highlighted as required
- User remains on Checkout page
- Order is not created

---

### BTC_013: Country Field - Invalid Country Code
**Priority:** P2 - Medium  
**Category:** Country Validation - Invalid Value

**Preconditions:**
- User is on the Checkout page
- Form submission can be intercepted (Dev Tools)

**Test Steps:**
1. On Checkout page, fill all required address fields
2. Intercept the API request or use Dev Tools to modify the country value to invalid code: `XX` or `ZZZ`
3. Attempt to submit the form
4. Observe API response

**Expected Result:**
- Server validates country code
- API returns error: "Invalid country code" or 400 (Bad Request)
- Order is not created
- User receives error message in UI
- Valid country list is displayed for selection

---

### BTC_014: Order ID Field - Empty/Null Order ID
**Priority:** P1 - High  
**Category:** Order ID Validation - Empty Boundary

**Preconditions:**
- API endpoint for order retrieval is accessible: `/orders/{orderId}`
- Valid authentication token is available

**Test Steps:**
1. Prepare API GET request with empty Order ID: `/orders/` (no ID value)
2. OR prepare request with null value: `/orders/null`
3. Include valid authentication token
4. Call the API endpoint
5. Observe API response and status code

**Expected Result:**
- API returns 404 (Not Found) or 400 (Bad Request)
- Error message: "Order ID is required" or "Invalid order ID"
- No order data is returned
- Application handles gracefully with appropriate error message

---

### BTC_015: Order ID Field - Minimum Valid Order ID
**Priority:** P2 - Medium  
**Category:** Order ID Validation - Minimum Valid Boundary

**Preconditions:**
- API endpoint for order retrieval is accessible
- Valid authentication token is available
- Order ID format is known (e.g., numeric or alphanumeric)

**Test Steps:**
1. Prepare API GET request with smallest valid Order ID: `/orders/1` (if numeric)
2. OR `/orders/A` (if alphanumeric with single character)
3. Include valid authentication token
4. Call the API endpoint
5. Observe if order is retrieved

**Expected Result:**
- API returns 200 (OK) if order exists with this ID
- API returns 404 (Not Found) if order doesn't exist
- Response is valid and consistent
- No server errors occur

---

### BTC_016: Order ID Field - Maximum Length Order ID
**Priority:** P2 - Medium  
**Category:** Order ID Validation - Maximum Boundary

**Preconditions:**
- API endpoint for order retrieval is accessible
- Valid authentication token is available
- Maximum Order ID length is defined

**Test Steps:**
1. Prepare API GET request with very long Order ID: `/orders/${'A'.repeat(100)}`
2. Include valid authentication token
3. Call the API endpoint
4. Monitor response and server behavior

**Expected Result:**
- API validates Order ID length
- Returns 400 (Bad Request) or 404 (Not Found)
- Error message: "Invalid order ID format" or "Order not found"
- No server errors or timeouts occur
- Application handles gracefully

---

### BTC_017: Order ID Field - Special Characters in Order ID
**Priority:** P2 - Medium  
**Category:** Order ID Validation - Special Characters Boundary

**Preconditions:**
- API endpoint for order retrieval is accessible
- Valid authentication token is available

**Test Steps:**
1. Prepare API GET request with special characters: `/orders/ORD@#$%123`
2. Include valid authentication token
3. Call the API endpoint
4. Observe validation and response

**Expected Result:**
- API validates Order ID format
- Special characters are either:
  - Rejected with error: "Invalid characters in order ID"
  - OR URL-encoded and processed
- API returns 404 (Not Found) or 400 (Bad Request)
- No server errors occur
- Application remains secure

---

### BTC_018: API Token - Empty/Null Token
**Priority:** P1 - High  
**Category:** API Token Validation - Empty Boundary

**Preconditions:**
- API endpoint is accessible (any protected endpoint)
- Authentication is required

**Test Steps:**
1. Prepare API request to protected endpoint
2. Omit Authorization header or set it to empty: `Authorization: ""`
3. Call the API endpoint
4. Observe API response and status code

**Expected Result:**
- API returns 401 (Unauthorized)
- Error message: "Authorization header is required" or "Invalid or missing token"
- No data is returned
- User is prompted to authenticate/login

---

### BTC_019: API Token - Minimum Length Token (1 Character)
**Priority:** P2 - Medium  
**Category:** API Token Validation - Minimum Boundary

**Preconditions:**
- API endpoint is accessible (any protected endpoint)
- Authentication is required

**Test Steps:**
1. Prepare API request to protected endpoint
2. Set Authorization header with single character: `Authorization: "a"`
3. Call the API endpoint
4. Observe validation response

**Expected Result:**
- API validates token format/length
- Returns 401 (Unauthorized)
- Error message: "Invalid token" or "Malformed token"
- No data is accessed
- Token validation fails gracefully

---

### BTC_020: API Token - Exceeding Maximum Token Length
**Priority:** P2 - Medium  
**Category:** API Token Validation - Over Maximum Boundary

**Preconditions:**
- API endpoint is accessible
- Authentication is required
- Maximum token length is defined

**Test Steps:**
1. Prepare API request to protected endpoint
2. Generate extremely long token (e.g., 10,000 characters): `Authorization: "Bearer ${'a'.repeat(10000)}"`
3. Call the API endpoint
4. Monitor response and server behavior

**Expected Result:**
- API returns 401 (Unauthorized) or 413 (Payload Too Large)
- Error message: "Invalid token" or "Request entity too large"
- No data is accessed
- Server rejects oversized token gracefully
- No application hang or crash

---

### BTC_021: API Token - Malformed/Invalid Format Token
**Priority:** P2 - Medium  
**Category:** API Token Validation - Format Boundary

**Preconditions:**
- API endpoint is accessible
- Authentication uses Bearer token or similar format
- Valid token format is known

**Test Steps:**
1. Prepare API request to protected endpoint
2. Set Authorization header with invalid format:
   - `Authorization: "NotABearerToken"`
   - `Authorization: "Bearer"`
   - `Authorization: "BearerABCD1234"`
3. Call the API endpoint
4. Observe validation response

**Expected Result:**
- API validates token format
- Returns 401 (Unauthorized)
- Error message: "Invalid token format" or "Malformed authorization header"
- No data is accessed
- Appropriate error is returned

---

### BTC_022: Email Field - Special Characters Boundary
**Priority:** P2 - Medium  
**Category:** Email Validation - Special Characters Boundary

**Preconditions:**
- Application is loaded and accessible
- Login page is displayed

**Test Steps:**
1. Navigate to the application login page
2. Enter email with special characters:
   - Valid special chars: `user+test@example.com` (+ is valid in email)
   - Invalid special chars: `user@#$@example.com`
   - Special chars in domain: `user@exam@ple.com`
3. Enter valid password
4. Click the "Sign In" button
5. Observe validation behavior

**Expected Result:**
- Email with valid special characters (+) is accepted
- Email with invalid special characters (@#$) is rejected
- Email with multiple @ symbols is rejected
- Error message for invalid format: "Please enter a valid email address"
- Validation follows RFC 5321 email standards

---

### BTC_023: Password Field - Special Characters Boundary
**Priority:** P2 - Medium  
**Category:** Password Validation - Special Characters Boundary

**Preconditions:**
- Application is loaded and accessible
- Login page is displayed
- User account with special character password exists

**Test Steps:**
1. Navigate to the application login page
2. Enter valid email address
3. Enter password with special characters: `Pass@#$!1` (includes special chars)
4. Click the "Sign In" button
5. Observe if login succeeds/fails

**Expected Result:**
- Password field accepts special characters
- Login attempt is processed normally
- Success/failure depends on stored password in database
- No validation errors for special characters in password
- Special characters are handled securely (not visible in plain text)

---

### BTC_024: Product Search - Near Maximum Boundary (255 Characters)
**Priority:** P2 - Medium  
**Category:** Product Search - Near Maximum Boundary

**Preconditions:**
- User is successfully logged in
- Dashboard page is loaded
- Search field is visible

**Test Steps:**
1. On the Dashboard, locate the search box
2. Enter search query with exactly 255 characters: `${'a'.repeat(255)}`
3. Click the Search button or press Enter
4. Wait for search results to load
5. Observe if search completes successfully

**Expected Result:**
- Search field accepts 255 characters (near maximum)
- Search query is processed
- "No products found" is displayed (as query is nonsensical)
- Search completes within expected time (< 3 seconds)
- No truncation or errors occur

---

### BTC_025: Checkout Address - Maximum Length Field (256+ Characters)
**Priority:** P2 - Medium  
**Category:** Address Field Validation - Maximum Boundary

**Preconditions:**
- User is on the Checkout page
- All form fields are visible
- Address field has a maximum length

**Test Steps:**
1. On Checkout page, fill all required fields with valid data
2. In Street Address field, enter very long address (e.g., 500 characters):
   - `123 Very Long Street Name That Goes On And On And On ${'a'.repeat(400)}`
3. Click "Place Order" button
4. Observe address field validation

**Expected Result:**
- Address field either:
  - Truncates to maximum allowed length (e.g., 256 characters)
  - OR rejects input with error: "Address is too long"
- If truncated, order is placed with truncated address
- OR order placement is prevented with validation error
- Address is stored/displayed correctly with no corruption

---

### BTC_026: Order Quantity - Boundary at Zero
**Priority:** P1 - High  
**Category:** Quantity Validation - Zero Boundary

**Preconditions:**
- User is on product detail page
- Quantity field is visible and editable
- Product is in stock

**Test Steps:**
1. On product detail page, locate quantity field
2. Clear default value and enter: `0`
3. Click "Add to Cart" button
4. Observe validation behavior

**Expected Result:**
- Quantity zero is rejected
- Error message: "Quantity must be at least 1"
- Product is not added to cart
- Quantity field resets to minimum value (1) or shows error state
- "Add to Cart" button remains visible for retry

---

### BTC_027: Order Quantity - Maximum Boundary (1000+ units)
**Priority:** P2 - Medium  
**Category:** Quantity Validation - Maximum Boundary

**Preconditions:**
- User is on product detail page
- Quantity field allows numeric input
- Stock availability is limited

**Test Steps:**
1. On product detail page, enter extremely large quantity: `9999`
2. Verify available stock: e.g., 100 units
3. Click "Add to Cart" button
4. Observe stock validation

**Expected Result:**
- System validates requested quantity against available stock
- If quantity exceeds stock:
  - Error message: "Only 100 units available in stock"
  - Product is not added to cart
- If no stock limit validation:
  - Quantity is added but may fail at checkout
  - Warning about stock availability is displayed
- Application handles gracefully

---

### BTC_028: Cart Discount Code - Maximum Length Code
**Priority:** P2 - Medium  
**Category:** Discount Code Validation - Maximum Boundary

**Preconditions:**
- User is on Shopping Cart page
- Discount/Coupon code field is visible (if applicable)
- Maximum code length is defined

**Test Steps:**
1. On Shopping Cart page, locate discount code field
2. Enter very long discount code (e.g., 256 characters): `${'DISC'.repeat(64)}`
3. Click "Apply" or "Validate" button
4. Observe validation response

**Expected Result:**
- Discount code field validates length
- Returns "Invalid discount code" if code is too long
- OR truncates code to maximum length
- No discount is applied for invalid code
- Error message is displayed appropriately

---

### BTC_029: API Response Pagination - Boundary at Max Results
**Priority:** P2 - Medium  
**Category:** API Pagination - Boundary

**Preconditions:**
- API endpoint supports pagination (e.g., `/orders?limit=100`)
- Maximum results per page is defined (e.g., 100)

**Test Steps:**
1. Prepare API request with maximum limit: `/orders?limit=100`
2. Include valid authentication token
3. Call the API endpoint
4. Count returned results

**Expected Result:**
- API returns exactly 100 results (or defined maximum)
- Response includes pagination metadata (total count, page, etc.)
- All 100 results are valid order objects
- Response completes within acceptable time
- Next page link is available if more results exist

---

### BTC_030: API Response Pagination - Exceeding Max Results
**Priority:** P2 - Medium  
**Category:** API Pagination - Over Maximum Boundary

**Preconditions:**
- API endpoint supports pagination with limit parameter
- Maximum results per page is 100

**Test Steps:**
1. Prepare API request exceeding maximum limit: `/orders?limit=1000`
2. Include valid authentication token
3. Call the API endpoint
4. Observe server response

**Expected Result:**
- API either:
  - Returns maximum allowed results (100) with warning
  - OR rejects request with error: "Limit exceeds maximum (100)"
  - Returns 400 (Bad Request)
- Response is handled gracefully
- No server performance degradation
- Application suggests valid limit values

---

---

# Edge Case Scenarios - Rahul Shetty Academy Client Application

**Document Type:** Edge Case Test Scenarios  
**Version:** 1.0  
**Focus Areas:** Unusual but realistic situations, system resilience, data integrity, user experience

---

## Edge Case Scenarios

### ECS_001: Session Expires During Checkout - Mid-Form Entry
**Scenario ID:** ECS_001  
**Risk Level:** HIGH  
**Category:** Session Management - Timeout

**Description:**
User is filling out the checkout form with address details. After entering first few fields, the session expires (typically 30 minutes of inactivity) before placing the order. User completes form entry and attempts to place order after session expiration.

**Test Setup:**
1. User logs in and adds products to cart
2. Navigate to checkout page
3. Begin filling address form fields slowly
4. Wait for session timeout (or simulate by clearing session cookies)
5. Continue filling remaining fields
6. Click "Place Order" button

**Expected System Behavior:**
- ✅ User is redirected to login page with message: "Your session has expired. Please login again"
- ✅ Cart data is preserved and accessible after re-login
- ✅ User does NOT lose entered data (form data can be retained in browser local storage)
- ✅ Order is NOT created with incomplete session
- ✅ No duplicate orders are created
- ✅ User can re-login and complete checkout with previous cart items intact
- ✅ Session token is properly invalidated after expiration

**Risk Impact:**
- User frustration due to re-authentication requirement
- Loss of form data if not properly cached
- Potential cart abandonment
- Security risk if session is not properly terminated

---

### ECS_002: Product Removed from Inventory During Checkout
**Scenario ID:** ECS_002  
**Risk Level:** HIGH  
**Category:** Inventory Management - Stock Depletion

**Description:**
User adds a product to cart and proceeds to checkout. While user is filling checkout form, another customer purchases the last unit(s) of the same product, making it out of stock. User attempts to place the order.

**Test Setup:**
1. Product "ZARA COAT 3" has 2 units in stock
2. User A adds 1 unit to cart and goes to checkout
3. User B (in another browser/session) adds 2 units to cart and completes order
4. Product is now out of stock
5. User A attempts to place order

**Expected System Behavior:**
- ✅ System detects stock depletion during order processing
- ✅ User receives clear error: "Product ZARA COAT 3 is no longer available"
- ✅ Order is NOT placed
- ✅ User is presented with options:
  - Remove item and continue with other products
  - Return to cart and modify quantity
  - Continue shopping for alternative products
- ✅ Cart is updated to reflect current inventory status
- ✅ No partial order is created
- ✅ Inventory count is accurate and consistent

**Risk Impact:**
- Customer disappointment and lost sale
- Potential negative feedback/reviews
- Cart abandonment
- Support tickets for "why can't I buy?"

---

### ECS_003: Browser Refresh During Checkout - Before Order Placement
**Scenario ID:** ECS_003  
**Risk Level:** MEDIUM  
**Category:** Browser State Management - Page Refresh

**Description:**
User is on the checkout page with all form fields filled correctly. User accidentally refreshes the browser (F5 or Ctrl+R) or network interruption causes page reload before clicking "Place Order".

**Test Setup:**
1. User fills checkout form with valid address, country, etc.
2. User presses F5 or manually refreshes the page
3. Observe page behavior after reload
4. Verify form state and data persistence

**Expected System Behavior:**
- ✅ Checkout page reloads successfully
- ✅ One of the following occurs:
  - Form data is retained using browser local storage/session storage
  - OR form is cleared with message to re-enter data
  - OR cached form state is retrieved from server
- ✅ Cart items remain intact in cart (not cleared)
- ✅ User can immediately retry checkout with minimal data re-entry
- ✅ No duplicate orders are created
- ✅ Session remains valid after refresh

**Risk Impact:**
- Lost form data frustration
- Increased checkout abandonment
- Poor user experience
- Potential support escalation

---

### ECS_004: Multiple Browser Tabs - Concurrent Operations
**Scenario ID:** ECS_004  
**Risk Level:** MEDIUM  
**Category:** Concurrency - Multiple Tabs

**Description:**
User has same application open in multiple browser tabs. In Tab 1, user adds product to cart. In Tab 2, user simultaneously adds different product to cart. Both tabs then proceed to checkout and attempt to place orders concurrently.

**Test Setup:**
1. Open application in Tab 1 and Tab 2 (same user logged in)
2. Tab 1: Add Product A to cart, navigate to checkout, fill form
3. Tab 2: Add Product B to cart, navigate to checkout, fill form
4. Tab 1: Click "Place Order" at time T
5. Tab 2: Click "Place Order" at time T+0.5 seconds
6. Monitor responses and orders created

**Expected System Behavior:**
- ✅ Both orders are processed independently without conflict
- ✅ First request creates order with Product A
- ✅ Second request creates order with Product B (or Cart contains A+B depending on design)
- ✅ NO race condition causes inconsistent order data
- ✅ Both order IDs are unique
- ✅ Inventory is decremented correctly for both products
- ✅ Cart is properly cleared/updated in both tabs
- ✅ Each tab receives appropriate success confirmation
- ⚠️ If shared cart architecture, both tabs should reflect same cart state

**Risk Impact:**
- Duplicate orders for same products
- Inventory inconsistency
- User confusion about what order was placed
- Financial impact if both orders are charged

---

### ECS_005: Network Interruption During Order Submission
**Scenario ID:** ECS_005  
**Risk Level:** CRITICAL  
**Category:** Network Resilience - Connection Loss

**Description:**
User clicks "Place Order" button to submit the order. Network connection is lost or becomes unstable during API request transmission (internet drops, WiFi disconnects, 4G signal loss). Order may be partially processed or request may timeout.

**Test Setup:**
1. User completes checkout form and clicks "Place Order"
2. Intercept network traffic or simulate network failure:
   - Disconnect WiFi
   - Simulate network timeout (5000ms+)
   - Simulate slow network (< 100 Kbps)
3. Observe application behavior and API state
4. Restore network connection
5. Check if order was created

**Expected System Behavior:**
- ✅ User receives clear error: "Network error. Failed to place order. Please try again"
- ✅ Order is NOT placed (idempotent API design)
- ✅ User can see "Retry" or "Try Again" button
- ✅ User can attempt order placement again
- ✅ Cart items remain intact
- ✅ No duplicate order is created after retry
- ✅ System implements timeout handling (max 30 seconds wait)
- ✅ Loading state is cleared with visible error messaging
- ✅ UI remains responsive (no frozen state)

**Risk Impact:**
- Critical: Lost revenue from failed transactions
- Duplicate orders if retry mechanism not idempotent
- User cannot complete purchase
- Support burden from "my order didn't go through" inquiries

---

### ECS_006: API Response Timeout - Slow Server Response
**Scenario ID:** ECS_006  
**Risk Level:** HIGH  
**Category:** Performance - Slow API Response

**Description:**
User clicks "Place Order" button. The server is experiencing high load or database latency. API request takes much longer than expected (e.g., 45 seconds) to respond. User is uncertain if order was placed and may click "Place Order" multiple times.

**Test Setup:**
1. Simulate slow server response using:
   - Network throttling (simulate slow 3G)
   - Server-side delay (e.g., 45-second API response)
   - Database query slowness
2. User completes checkout and clicks "Place Order"
3. Do NOT click again initially
4. After 10 seconds of waiting, simulate user clicking button again
5. Monitor if duplicate orders are created

**Expected System Behavior:**
- ✅ Loading spinner is displayed immediately after "Place Order" click
- ✅ "Place Order" button is DISABLED and shows "Processing..." state
- ✅ User is PREVENTED from clicking button multiple times
- ✅ API request times out gracefully after 30-60 seconds
- ✅ User receives message: "Order processing is taking longer than expected. Please wait..."
- ✅ After timeout, user gets error: "Order placement timed out. Click Retry"
- ✅ Only ONE order is created (even if slow network takes 45+ seconds)
- ✅ No duplicate orders from multiple clicks
- ✅ User can view order history immediately (if order succeeded)

**Risk Impact:**
- Duplicate orders charged to customer
- User frustration and support calls
- Potential financial loss from duplicate transactions
- Negative user reviews

---

### ECS_007: Duplicate Order Submission - User Clicks Submit Button Twice
**Scenario ID:** ECS_007  
**Risk Level:** CRITICAL  
**Category:** Idempotency - Duplicate Prevention

**Description:**
User clicks "Place Order" button. Despite seeing loading state, user perceives no response and clicks "Place Order" button again. Second request is sent before first one completes. Both requests attempt to create orders.

**Test Setup:**
1. Intercept and delay the API response (simulating slow network)
2. User fills checkout form completely
3. Click "Place Order" button
4. Before response returns (while loading state shows), click button again
5. Monitor if one or two orders are created

**Expected System Behavior:**
- ✅ "Place Order" button is DISABLED immediately after first click
- ✅ Button displays "Processing..." or similar status
- ✅ Second click does NOT send another API request
- ✅ Even if network sends duplicate requests, backend prevents duplicate orders through:
   - Idempotency key in API request
   - Database unique constraints
   - Transaction handling
- ✅ Exactly ONE order is created for TWO clicks
- ✅ User receives single order confirmation
- ✅ Order ID is unique and properly stored

**Risk Impact:**
- **CRITICAL**: Duplicate charges to customer credit card
- Customer refund requests
- Payment processor disputes
- Legal/regulatory compliance issues (PCI-DSS)
- Loss of customer trust

---

### ECS_008: API Returns Unexpected Response Format
**Scenario ID:** ECS_008  
**Risk Level:** HIGH  
**Category:** API Error Handling - Unexpected Response

**Description:**
Order is placed successfully on the server side. However, API returns an unexpected or malformed response (invalid JSON, missing required fields, different format than expected). Frontend code cannot parse the response correctly.

**Test Setup:**
1. Place order successfully
2. Intercept API response using browser dev tools or proxy
3. Modify response to return:
   - Invalid/malformed JSON: `{orderId: 123` (missing bracket)
   - Missing order ID field: `{status: "success"}`
   - Unexpected data type: `{orderId: ["array instead of string"]}`
   - HTML error page instead of JSON
4. Observe frontend handling
5. Verify order was actually created on backend

**Expected System Behavior:**
- ✅ Frontend gracefully handles malformed response
- ✅ Error handling code catches JSON parsing errors
- ✅ User is NOT shown raw error/exception message
- ✅ User receives user-friendly message: "Order confirmed. We're processing it"
- ✅ Order IS created successfully on server (verify via API/database)
- ✅ User can view order in "My Orders" section
- ✅ System falls back to checking order status via separate API call
- ✅ Order confirmation email is sent to customer
- ✅ No duplicate order is created on retry

**Risk Impact:**
- User confusion: "Did my order go through?"
- Support inquiries for order status
- Technical debt if not handled
- Potential lost orders if no fallback mechanism

---

### ECS_009: Product Price Changes Between Cart and Checkout
**Scenario ID:** ECS_009  
**Risk Level:** MEDIUM-HIGH  
**Category:** Price Consistency - Data Integrity

**Description:**
User adds product "ZARA COAT 3" priced at $99 to cart. User proceeds to checkout. Before user clicks "Place Order", product price is updated to $129 (price increase) or $79 (price decrease) in the system. User places order and price charged is different from what user saw in cart.

**Test Setup:**
1. Add product to cart (price: $99)
2. View shopping cart (verify $99 total)
3. Navigate to checkout
4. Simulate price update in backend (change to $129)
5. Fill checkout form and click "Place Order"
6. Verify final charged amount
7. Check if user was notified of price change

**Expected System Behavior:**
- ✅ System retrieves current product price at checkout time
- ✅ If price changed, user is notified BEFORE order confirmation:
   - Display price change warning: "Product price has increased from $99 to $129"
   - Offer options: Accept new price / Remove product / Continue with old price (depends on business rules)
- ✅ Order total is recalculated with current prices
- ✅ User explicitly confirms order with new price
- ✅ No silent price increase without user awareness
- ✅ Order confirmation shows actual price charged
- ✅ No customer disputes from unexpected charges
- ✅ Audit trail of price changes is maintained

**Risk Impact:**
- Customer disputes and refund requests
- Negative reviews: "I was charged more than expected"
- Regulatory compliance issues (consumer protection)
- Lost customer trust
- Support overhead

---

### ECS_010: Concurrent Stock Updates - Race Condition
**Scenario ID:** ECS_010  
**Risk Level:** MEDIUM-HIGH  
**Category:** Inventory Management - Race Condition

**Description:**
Product has 5 units in stock. Three users simultaneously attempt to purchase with different quantities:
- User A: 3 units
- User B: 2 units  
- User C: 1 unit
All three place orders within milliseconds of each other. System must handle concurrent stock updates correctly.

**Test Setup:**
1. Product inventory: 5 units
2. Simulate 3 concurrent order requests:
   - Request 1: User A adds 3 units, clicks Place Order
   - Request 2: User B adds 2 units, clicks Place Order (T+0.1ms)
   - Request 3: User C adds 1 unit, clicks Place Order (T+0.2ms)
3. Monitor inventory and order outcomes
4. Verify total quantity sold ≤ 5

**Expected System Behavior:**
- ✅ All three orders are processed correctly using database transaction locking
- ✅ Possible outcomes (depending on database concurrency control):
  - All 3 orders succeed: Inventory: 5-3-2-1 = -1 ❌ FAIL (oversold)
  - All 3 orders succeed: Inventory: 0, if inventory reserved at different times
  - Last order (C) fails: "Only 0 units available" ✅ PASS
- ✅ No negative inventory values
- ✅ No duplicate reservations
- ✅ Failed order notifies user: "Product out of stock"
- ✅ Database maintains referential integrity
- ✅ Audit log shows order sequence and stock updates

**Risk Impact:**
- Inventory overselling
- Unfulfillable orders
- Customer complaints: "Item out of stock after ordering"
- Fulfillment issues and refunds
- Loss of revenue from unsellable orders

---

### ECS_011: Order Validation Mismatch - UI vs API vs Database
**Scenario ID:** ECS_011  
**Risk Level:** HIGH  
**Category:** Data Consistency - Multi-Layer Validation

**Description:**
Order is placed through the application. UI shows order confirmation with Order ID "ORD123456" and total $299. However, when order is retrieved via API, it shows different total ($399). When checked in database, order doesn't exist at all or has different data.

**Test Setup:**
1. User places order with 2 products: $99 + $200 = $299
2. UI displays: Order ID: ORD123456, Total: $299
3. Call API to retrieve order: `GET /orders/ORD123456`
4. Compare API response with UI displayed values
5. Query database directly to verify order data
6. Check for inconsistencies between layers

**Expected System Behavior:**
- ✅ Order is consistently displayed across ALL layers:
  - UI shows: ORD123456, $299, 2 items
  - API returns: ORD123456, $299, 2 items
  - Database contains: ORD123456, $299, 2 items
- ✅ All fields match exactly (Order ID, total, items, customer, date)
- ✅ If mismatch detected, system has automatic reconciliation:
  - API value is authoritative (from database)
  - UI is updated to match API
  - Alert is generated for manual review
- ✅ Order confirmation email matches all layers
- ✅ No silent discrepancies that user discovers during fulfillment

**Risk Impact:**
- Customer disputes: "Invoice shows $299 but you're shipping $399 worth"
- Fulfillment errors: Wrong items shipped
- Refund requests and chargebacks
- Regulatory/audit issues
- System reliability concerns

---

### ECS_012: Session Fixation - Attacker Uses Valid but Different Session
**Scenario ID:** ECS_012  
**Risk Level:** CRITICAL (Security)  
**Category:** Security - Session Management

**Description:**
Attacker obtains a valid session token (or session ID) of another logged-in user. Attacker uses this token to place an order with attacker's own address but victim's payment method, charging the order to victim's account.

**Test Setup:**
1. User A logs in and gets session token: `Token_A = "abc123xyz789"`
2. Attacker intercepts/obtains this token
3. Attacker creates new session or manipulates existing session
4. Attacker uses Token_A to fill checkout form with attacker's delivery address
5. Attacker clicks "Place Order"
6. Monitor if order is created using victim's account

**Expected System Behavior:**
- ✅ Session tokens are cryptographically secure (impossible to forge)
- ✅ Session binding: Token is bound to User ID and IP address
- ✅ If IP changes, session is invalidated
- ✅ Token is validated for EVERY API request
- ✅ Order is created under User A's account (victim), NOT attacker
- ✅ However, attacker cannot modify delivery address to their own
- ✅ System detects suspicious activity:
  - Order placed from different IP than login IP
  - Quick sequence of orders with different addresses
  - Fraud detection triggers
- ✅ Order is flagged for review before fulfillment
- ✅ Session expires after idle timeout (15-30 minutes)

**Risk Impact:**
- **CRITICAL**: Fraudulent orders placed with compromised accounts
- Financial loss to customers
- Reputational damage
- Regulatory violations (PCI-DSS, GDPR)
- Legal liability
- Loss of customer trust

---

### ECS_013: Slow Network - Checkout Performance Under 3G
**Scenario ID:** ECS_013  
**Risk Level:** MEDIUM  
**Category:** Performance - Slow Network Simulation

**Description:**
User is on slow 3G network (network speed ~100 Kbps, latency ~500ms). User proceeds through entire checkout flow: loading products, adding to cart, viewing cart, checkout page load, form submission. System must remain responsive despite slow network.

**Test Setup:**
1. Use browser DevTools to throttle network:
   - Download: 100 Kbps
   - Upload: 50 Kbps
   - Latency: 500ms
2. Perform full checkout flow:
   - Navigate to checkout page
   - Fill form (note responsiveness)
   - Click Place Order
   - Wait for confirmation
3. Measure loading times
4. Verify no timeouts occur

**Expected System Behavior:**
- ✅ All pages load and render (even if slowly)
- ✅ No timeouts occur (API timeout > 30 seconds)
- ✅ UI remains responsive:
   - Form inputs accept data immediately
   - Buttons respond to clicks (even if request is slow)
   - No frozen/locked UI state
- ✅ Loading indicators are visible:
   - Spinners during form submission
   - "Processing..." messages
- ✅ Form submission completes successfully
- ✅ Order is created despite slow network
- ✅ Checkout time < 2 minutes for entire flow
- ✅ No data loss due to network lag

**Risk Impact:**
- Poor user experience for mobile users on slow networks
- High abandonment rate in regions with poor connectivity
- Lost revenue from users in developing countries
- Negative app store reviews (performance)
- Potential app uninstalls

---

### ECS_014: API Rate Limiting Exceeded - Too Many Requests
**Scenario ID:** ECS_014  
**Risk Level:** MEDIUM  
**Category:** API Resilience - Rate Limiting

**Description:**
Application implements API rate limiting (e.g., 100 requests per minute per IP). Aggressive user (or bot) sends multiple checkout requests rapidly, exceeding rate limit. Subsequent requests return 429 (Too Many Requests) error.

**Test Setup:**
1. Identify rate limit: 100 requests/minute per IP
2. User rapidly submits 150 checkout requests (legitimate user testing or bot attempt)
3. Monitor API responses:
   - Requests 1-100: Should succeed or fail on business logic
   - Requests 101+: Should return 429 (Too Many Requests)
4. Observe frontend handling and recovery

**Expected System Behavior:**
- ✅ Rate limiting is enforced:
   - Requests after limit: Return 429 status code
   - Error message: "Too many requests. Please try again later"
   - Retry-After header indicates wait time
- ✅ User is prevented from placing duplicate orders via rate limiting
- ✅ Frontend gracefully handles 429 responses:
   - Display user-friendly error message
   - Show countdown timer: "Please wait 45 seconds before retrying"
   - Disable "Place Order" button during throttle period
- ✅ Valid users can retry after waiting
- ✅ System recovers after rate limit window expires
- ✅ No order is created during rate limit period

**Risk Impact:**
- DDoS protection (prevents server overload)
- Prevents brute force attacks
- But legitimate users may experience false positives
- User frustration if rate limit is too aggressive
- Support burden from "why can't I place order?" inquiries

---

### ECS_015: Order ID Collision - Duplicate Order ID Generated
**Scenario ID:** ECS_015  
**Risk Level:** HIGH  
**Category:** Data Integrity - Unique ID Generation

**Description:**
System generates Order ID using insecure method (e.g., sequential numbers, timestamp-based, weak random). Two orders are placed simultaneously and receive the same Order ID. When retrieving order by ID, system returns wrong order.

**Test Setup:**
1. Identify Order ID generation method (if accessible)
2. Place two orders concurrently:
   - Order 1: User A places order at T milliseconds
   - Order 2: User B places order at T+1 milliseconds
3. Capture both Order IDs
4. Verify if Order IDs are identical

**Expected System Behavior:**
- ✅ Order IDs are UNIVERSALLY UNIQUE:
   - Each order has unique ID
   - Collision probability is near-zero (< 1 in billion)
- ✅ Order ID generation uses:
   - UUIDs (UUID4)
   - OR secure random generation with collision detection
   - NOT sequential numbers
   - NOT timestamp-based
- ✅ If collision detected (should never happen):
   - Database unique constraint prevents duplicate ID insertion
   - Order creation fails with error
   - System retries ID generation
- ✅ No two orders share the same Order ID
- ✅ Orders can be uniquely retrieved by ID

**Risk Impact:**
- Orders confused/mixed between users
- User A might see User B's order details
- Fulfillment confusion: Wrong items shipped
- Privacy breach: Expose customer data
- Financial disputes: Charges applied to wrong users

---

### ECS_016: Cart Modification During Checkout - Item Removed/Quantity Changed
**Scenario ID:** ECS_016  
**Risk Level:** MEDIUM  
**Category:** Cart State Management - Concurrent Modifications

**Description:**
User adds products to cart and starts checkout. While on checkout page (in another tab), user removes a product from cart or modifies quantity. User returns to first tab and attempts to place order. System must decide whether to use updated cart or original cart.

**Test Setup:**
1. Open application in Tab 1
   - Add Product A (qty: 1) and Product B (qty: 2) to cart
   - Proceed to checkout page
   - Fill checkout form but don't place order yet
2. Open Tab 2 (same session):
   - Remove Product B from cart
   - Reduce Product A quantity to 0 (removes item)
3. Return to Tab 1
   - Click "Place Order" button
4. Verify what is actually ordered

**Expected System Behavior:**
- ✅ System uses CURRENT cart state at order time (not cached state)
- ✅ One of the following approaches:
   - **Approach 1 (Recommended)**: Order contains only Product A qty 0 → Fails with "Cart is empty"
   - **Approach 2**: Warn user "Cart was modified. Click Review to see current items"
   - **Approach 3**: Use cached cart state from checkout initiation (not recommended)
- ✅ User is NOT silently charged for removed items
- ✅ Order reflects current inventory state
- ✅ If cart is empty, order placement is prevented with clear message
- ✅ Cart consistency is maintained across tabs

**Risk Impact:**
- Unexpected charges for items user didn't intend to buy
- Missing items from order (user thinks they ordered something)
- Cart state confusion across tabs
- Customer disputes: "I didn't want to buy that"

---

### ECS_017: Timezone Mismatch - Order Date/Time Inconsistency
**Scenario ID:** ECS_017  
**Risk Level:** LOW-MEDIUM  
**Category:** Data Accuracy - Timezone Handling

**Description:**
User in India (IST, UTC+5:30) places order at 2:00 PM local time. Order confirmation shows different time. When order is viewed in admin dashboard (UTC) or via API, shows yet another time. Customer invoice shows inconsistent order timestamps.

**Test Setup:**
1. Set system to simulate multiple timezones
2. User places order at 2:00 PM IST (8:30 AM UTC)
3. Capture order timestamp in:
   - UI confirmation page
   - API response
   - Database directly
   - Customer email receipt
   - Admin dashboard (if available)
4. Compare all timestamps

**Expected System Behavior:**
- ✅ Order timestamp is stored consistently:
   - Always stored in UTC in database
   - Converted to user's timezone for UI display
- ✅ All displays show SAME moment in time (different representations):
   - UI: 2:00 PM IST (user's timezone)
   - API: 8:30 AM UTC (standard)
   - Email: 2:00 PM IST (user's timezone)
   - Database: 2026-06-21 08:30:00 UTC
- ✅ No timestamp discrepancies between layers
- ✅ Order can be tracked consistently across systems
- ✅ DST (Daylight Saving Time) is handled correctly
- ✅ Historical orders show correct dates after DST changes

**Risk Impact:**
- Customer confusion: "Timeline doesn't match my memory"
- Support inquiries about order timing
- Auditing issues if timestamps don't align
- Potential tax/regulatory issues (time-based compliance)

---

### ECS_018: Offline Mode - User Attempts Checkout Without Internet
**Scenario ID:** ECS_018  
**Risk Level:** MEDIUM  
**Category:** Connectivity - Offline Behavior

**Description:**
User adds products to cart on their mobile device. User navigates away from app or browser loses internet connection (airplane mode, tunnel, network dropout). User still has app/website cached in browser and attempts to view cart and proceed to checkout while offline.

**Test Setup:**
1. Add products to cart
2. Disconnect internet (airplane mode or kill WiFi)
3. Attempt to:
   - View shopping cart
   - Navigate to checkout page
   - Submit order
4. Monitor application behavior
5. Restore internet connection

**Expected System Behavior:**
- ✅ Application detects offline status
- ✅ Cart display: Shows cached/offline items (if supported)
- ✅ Checkout page: Either:
   - Shows cached form (informational only)
   - OR displays "You are offline" message with retry button
- ✅ Order submission: Prevents order creation with message:
   - "Cannot place order. No internet connection. Please check your connection"
- ✅ User is NOT confused (clear offline indicator)
- ✅ After internet restored, user can attempt order again
- ✅ No partial/failed orders are created
- ✅ Optional: Offline mode shows previously loaded products (read-only)

**Risk Impact:**
- User frustration from unclear offline status
- Confusion if order fails silently
- Support burden from "why won't my order go through?" issues
- Potential app uninstalls

---

### ECS_019: Payment Gateway Timeout - Third-Party Service Unavailable
**Scenario ID:** ECS_019  
**Risk Level:** CRITICAL (if payments processed by gateway)  
**Category:** Third-Party Integration - External Service Failure

**Description:**
User proceeds through entire checkout and clicks "Place Order". Order is sent to backend. Backend attempts to process payment through external payment gateway (Stripe, PayPal, etc.). Payment gateway is temporarily down or unresponsive. Request times out after 30 seconds.

**Test Setup:**
1. Mock/simulate payment gateway timeout:
   - Disconnect from payment gateway
   - Simulate 60-second response delay
   - Gateway returns 503 (Service Unavailable)
2. User completes checkout and clicks "Place Order"
3. Monitor order creation and payment processing
4. Check for duplicate charge attempts on retry

**Expected System Behavior:**
- ✅ Order creation is separated from payment processing (transactional):
   - Order is created in PENDING state
   - Payment attempt is made asynchronously or in separate transaction
- ✅ User receives message: "Order created. Payment processing..."
- ✅ After payment gateway timeout:
   - User gets error: "Payment processing failed. Please try again or contact support"
   - Order remains in PENDING state
   - User receives order confirmation with payment status: PENDING
- ✅ Retry mechanism:
   - User can retry payment for same order (not duplicate order)
   - Idempotent payment requests prevent double-charging
- ✅ Order ID is provided even if payment fails initially
- ✅ User can contact support with Order ID
- ✅ Backend has reconciliation job to check payment status with gateway

**Risk Impact:**
- **CRITICAL**: Double-charging if retry is not idempotent
- Lost orders if payment fails and user doesn't retry
- User confusion: "Was I charged? Is my order placed?"
- Chargeback disputes: "Charged twice for same order"
- Revenue loss and support overhead

---

### ECS_020: Database Connection Loss During Order Creation
**Scenario ID:** ECS_020  
**Risk Level:** CRITICAL  
**Category:** Database Resilience - Connection Failure

**Description:**
User clicks "Place Order". Backend initiates database transaction to create order. Midway through transaction (after debiting inventory but before creating order record), database connection drops or server loses connection to database. Transaction is incomplete.

**Test Setup:**
1. Simulate database connection loss at critical moment:
   - User fills checkout and clicks "Place Order"
   - Backend starts transaction
   - After inventory update query, disconnect database
2. Monitor what happens to:
   - Order (created or not?)
   - Inventory (decremented or rolled back?)
   - User notification
   - Cart state
3. Verify transaction atomicity

**Expected System Behavior:**
- ✅ Database implements ACID transactions:
   - Atomicity: Order creation is atomic (all or nothing)
   - If connection lost mid-transaction: ROLLBACK occurs
   - Inventory is restored to original count
   - No order is created
- ✅ User receives error: "Order creation failed. Please try again"
- ✅ Cart items remain intact (not deducted)
- ✅ User can retry order placement
- ✅ When retry succeeds, exactly ONE order is created (not two)
- ✅ Inventory is correctly decremented only for successful order
- ✅ No orphaned/incomplete records in database

**Risk Impact:**
- **CRITICAL**: Inconsistent inventory (items sold but not ordered)
- Partial orders that cannot be fulfilled
- Database corruption if transaction not rolled back
- User confusion: "Did my order go through?"
- Lost orders and revenue

---

## Summary - Edge Case Coverage

| Scenario | Risk Level | Primary System Concern | Recovery Mechanism |
|----------|-----------|----------------------|-------------------|
| ECS_001 | HIGH | Session Expiration | Re-login with cart retention |
| ECS_002 | HIGH | Inventory Consistency | Real-time stock checks |
| ECS_003 | MEDIUM | Page State Persistence | Local storage/caching |
| ECS_004 | MEDIUM | Concurrent Operations | Proper locking/transactions |
| ECS_005 | CRITICAL | Network Resilience | Timeout handling, retry logic |
| ECS_006 | HIGH | Performance Degradation | Button disable, timeout mgmt |
| ECS_007 | CRITICAL | Duplicate Prevention | Idempotent operations, button states |
| ECS_008 | HIGH | API Error Handling | Graceful fallback, error parsing |
| ECS_009 | MEDIUM-HIGH | Price Accuracy | Real-time price validation |
| ECS_010 | MEDIUM-HIGH | Race Conditions | Database locking, transactions |
| ECS_011 | HIGH | Data Consistency | Multi-layer validation, audit logs |
| ECS_012 | CRITICAL | Security | Session binding, token validation |
| ECS_013 | MEDIUM | Performance | Responsive UI, reasonable timeouts |
| ECS_014 | MEDIUM | DoS Protection | Rate limiting, user feedback |
| ECS_015 | HIGH | ID Uniqueness | UUID generation, collision detection |
| ECS_016 | MEDIUM | Cart State Management | Real-time cart sync across tabs |
| ECS_017 | LOW-MEDIUM | Timezone Accuracy | UTC storage, local display conversion |
| ECS_018 | MEDIUM | Offline Handling | Clear offline indicators, graceful degradation |
| ECS_019 | CRITICAL | Payment Integration | Transactional separation, reconciliation |
| ECS_020 | CRITICAL | Database Integrity | ACID transactions, rollback handling |

---

## Key Testing Recommendations

1. **Automation Priority**: ECS_005, ECS_007, ECS_010, ECS_012, ECS_019, ECS_020 (CRITICAL)
2. **Manual Testing**: ECS_003, ECS_004, ECS_013 (concurrent/network scenarios)
3. **Security Testing**: ECS_012, ECS_019
4. **Performance Testing**: ECS_013, ECS_014
5. **Database Testing**: ECS_002, ECS_010, ECS_020
6. **Monitoring**: Set up alerts for scenarios ECS_006, ECS_009, ECS_011

---

---

# Exploratory Testing Scenarios - Rahul Shetty Academy Client Application

**Document Type:** Exploratory Testing Scenarios  
**Version:** 1.0  
**Approach:** Creative, unscripted testing focusing on unusual user behaviors and application vulnerabilities

---

## Exploratory Testing Scenarios

### ETS_001: Rapid Successive Clicks on "Add to Cart" Button
**Scenario ID:** ETS_001  
**Category:** User Behavior - Rapid Input

**Testing Idea:**
Tester is on product detail page. User rapidly clicks the "Add to Cart" button 5-10 times in quick succession (within 1 second), simulating a user who thinks the button didn't work or accidentally double-clicks repeatedly.

**Test Steps:**
1. Navigate to product detail page
2. Click "Add to Cart" button rapidly 5 times in quick succession
3. Do not wait for response between clicks
4. Navigate to shopping cart
5. Observe product quantity in cart

**Potential Risk:**
- Duplicate cart entries instead of quantity increment
- Multiple API requests create multiple cart items
- Inventory decremented multiple times for single intended purchase
- UI becomes unresponsive from processing too many clicks
- Cart shows quantity: 5 instead of 1

**Expected Observation:**
- ✅ Button is disabled after first click (prevents multiple submissions)
- ✅ "Add to Cart" button shows "Processing..." or loading state
- ✅ Subsequent clicks are ignored/queued
- ✅ Only ONE product is added to cart with quantity 1
- ✅ Cart displays: Product added successfully (only once)
- ⚠️ OR quantity is incremented only once

---

### ETS_002: Clicking Browser Back Button During Checkout Form Entry
**Scenario ID:** ETS_002  
**Category:** Navigation - Browser History

**Testing Idea:**
User is in the middle of filling out checkout form (filled half the fields). User clicks browser's Back button to return to product listing. Then clicks Forward button to return to checkout. Observe if form data is preserved or lost.

**Test Steps:**
1. Add product to cart and proceed to checkout
2. Fill Street Address field: "123 Main St"
3. Fill City field: "New York"
4. Click browser Back button
5. Verify user is returned to shopping cart
6. Click browser Forward button
7. Observe checkout form state

**Potential Risk:**
- Form data is lost (user frustrated)
- Form shows stale/cached data from previous session
- Half-filled form causes validation errors
- User navigates to different checkout (different products)
- Session becomes inconsistent

**Expected Observation:**
- ✅ Form data is preserved using browser's session history
- ✅ User returns to checkout with previously filled fields intact
- ✅ Address fields show: "123 Main St" and "New York"
- ✅ User can continue from where they left off
- ⚠️ OR form is cleared with option to re-enter data

---

### ETS_003: Login, Logout, Login Again Rapidly in Succession
**Scenario ID:** ETS_003  
**Category:** Authentication - Session Management

**Testing Idea:**
User logs in successfully. Within 5 seconds, user clicks logout. Before session is fully cleared, user immediately logs in again with same credentials. Test if session state is properly cleared and new session is created.

**Test Steps:**
1. Login with valid credentials (wait for dashboard to load)
2. Immediately click "Logout" button
3. Before logout completes, navigate back to home page
4. Immediately login again with same credentials
5. Verify dashboard loads correctly
6. Check if old and new sessions are different

**Potential Risk:**
- Session tokens are mixed (old + new)
- User data from previous session leaks into new session
- Session ID conflict causes authentication errors
- Cart or order data from previous session is incorrectly retained
- Security vulnerability: session not properly invalidated

**Expected Observation:**
- ✅ Old session is properly invalidated
- ✅ New session is created with new session ID/token
- ✅ Dashboard loads correctly
- ✅ No data leakage between sessions
- ✅ If cart existed in first session, it's cleared in second session
- ⚠️ No error messages or session conflicts

---

### ETS_004: Fill Checkout Form with Tab Key Navigation Instead of Mouse Clicks
**Scenario ID:** ETS_004  
**Category:** UI Interaction - Keyboard Navigation

**Testing Idea:**
Instead of clicking on form fields with mouse, tester uses only Tab key to navigate between fields and Shift+Tab to go backwards. Fill entire checkout form using keyboard only.

**Test Steps:**
1. Open checkout page
2. Press Tab to navigate to first field (Street Address)
3. Type address: "123 Main Street"
4. Press Tab to navigate to City field
5. Type city: "New York"
6. Continue with Tab for each field: State, Postal Code, Country, etc.
7. Use Shift+Tab to go backwards through fields
8. Click "Place Order" using keyboard (Tab to button, Enter)
9. Observe form behavior and submission

**Potential Risk:**
- Tab order is incorrect (jumps to unexpected fields)
- Focus is not visible on form elements
- Tab-only navigation skips critical fields
- Form submission with Enter key doesn't work (only mouse click works)
- Keyboard shortcuts conflict with browser shortcuts

**Expected Observation:**
- ✅ Tab order follows logical sequence: Address → City → State → Postal → Country
- ✅ Focus indicator (outline) is visible on each field
- ✅ Tab navigation works smoothly without jumps
- ✅ Shift+Tab navigates backwards correctly
- ✅ "Place Order" button can be activated with Enter key
- ✅ Keyboard-only users can complete entire checkout without mouse
- ✅ ARIA labels and semantic HTML are properly implemented

---

### ETS_005: Search Product, Add to Cart, Refresh Page, Search Again, Add to Cart Again
**Scenario ID:** ETS_005  
**Category:** Page State - Repeated Actions

**Testing Idea:**
Tester performs sequence of actions, then repeats: Search → Add to Cart → Refresh → Search → Add to Cart. Test if application handles repeated actions cleanly without duplicate entries or state issues.

**Test Steps:**
1. Search for "ZARA COAT" (find product)
2. Click product and "Add to Cart"
3. Press F5 to refresh page
4. Search for "ZARA COAT" again
5. Click product and "Add to Cart" again
6. Go to shopping cart
7. Check cart contents

**Potential Risk:**
- Cart shows 2 identical products (duplicates from refresh)
- Product added twice due to page cache
- Quantity shows 2 instead of 1 on first add + 1 on second
- Application state is corrupted after refresh
- Cart becomes out of sync with server state

**Expected Observation:**
- ✅ Page refresh clears previous action state
- ✅ First "Add to Cart" adds product with qty: 1
- ✅ After refresh, cart still shows qty: 1
- ✅ Second search finds same product
- ✅ Second "Add to Cart" increments quantity to 2
- ✅ Cart shows: ZARA COAT, qty: 2, total: 2 × price
- ✅ No duplicate entries, only quantity increment

---

### ETS_006: Rapidly Switch Between Tabs with Different Domains/Products
**Scenario ID:** ETS_006  
**Category:** Multi-Tab - Browser State

**Testing Idea:**
User has application open in Tab A. User opens Tab B with different product. Rapidly switches between Tab A and Tab B multiple times while adding products to cart. Test if cart state synchronizes correctly across tabs.

**Test Steps:**
1. Tab A: Search for "ZARA COAT", add to cart
2. Tab B: Search for "IPHONE", add to cart
3. Rapid tab switching: Tab A → Tab B → Tab A → Tab B (10 switches in 5 seconds)
4. While switching, try to navigate to checkout in one tab
5. View cart in both tabs
6. Compare cart contents in each tab

**Potential Risk:**
- Cart shows different contents in different tabs
- Items added in Tab A don't appear in Tab B
- Quantity increments are lost or duplicated
- Session cookies are not shared across tabs
- One tab overwrites the other tab's cart

**Expected Observation:**
- ✅ Both tabs share the same cart (same session/cookies)
- ✅ Tab A shows: ZARA COAT qty: 1
- ✅ Tab B shows: ZARA COAT qty: 1 + IPHONE qty: 1
- ✅ Cart is synchronized between tabs in real-time (or on refresh)
- ✅ Both tabs show same total
- ✅ After rapid switching, cart is still consistent

---

### ETS_007: Submit Checkout Form with Enter Key While Still Filling Fields
**Scenario ID:** ETS_007  
**Category:** Form Submission - Premature Trigger

**Testing Idea:**
User is filling checkout form and accidentally presses Enter key while in middle of filling fields (e.g., in the middle of the City field). Form should not submit prematurely; Enter should only navigate to next field or submit only when on "Place Order" button.

**Test Steps:**
1. Open checkout page
2. Fill Street Address: "123 Main St", press Tab
3. Fill City field: "New Yo" (incomplete - "New York")
4. Press Enter key (while still filling City field)
5. Observe if form submits or continues to next field
6. Check form validation errors

**Potential Risk:**
- Form submits with incomplete data
- Validation error is not clear
- User thinks form was submitted but wasn't
- User is taken to next page without verification
- Duplicate order attempts from repeated Enter presses

**Expected Observation:**
- ✅ Enter key in text fields does NOT submit form
- ✅ Enter key moves focus to next field OR moves to next logical field
- ✅ Form validation prevents submission with incomplete data
- ✅ "Place Order" button is only interactive when form is complete
- ✅ Clear error messages appear: "Please fill all required fields"
- ✅ User must explicitly click "Place Order" button to submit

---

### ETS_008: Long Idle Session - User Inactive for 2+ Hours
**Scenario ID:** ETS_008  
**Category:** Session Management - Idle Timeout

**Testing Idea:**
User logs in and adds products to cart. User steps away from computer for extended period (2-3 hours), allowing session to timeout. User returns and attempts to continue with checkout.

**Test Setup:**
- Session timeout configured: 30 minutes
- Simulate: User logs in → adds to cart → waits 2 hours → attempts to checkout

**Test Steps:**
1. Login successfully
2. Add multiple products to cart
3. Wait for session timeout (simulate time advancement or clear session cookies)
4. Attempt to navigate to checkout
5. Attempt to view cart
6. Try to place order

**Potential Risk:**
- User can still access cart after session expiration (security issue)
- User tries to place order but fails silently
- Order is partially placed without user knowledge
- Cart items are deleted after session expiration
- User is not clearly notified of session timeout

**Expected Observation:**
- ✅ User is redirected to login page with message: "Your session has expired"
- ✅ Cart items are preserved (accessible after re-login)
- ✅ User cannot place order without re-authenticating
- ✅ Clear session timeout warning is shown before expiration (optional)
- ✅ Login page is displayed with clear path to re-login
- ✅ After re-login, cart is restored with previous items

---

### ETS_009: Manipulate Cart by Editing Product IDs in URL/API
**Scenario ID:** ETS_009  
**Category:** Security - Data Manipulation

**Testing Idea:**
Using browser developer tools, tester attempts to manipulate cart data directly. For example, changing product ID in API request or URL parameters to add unauthorized products or modify prices.

**Test Steps:**
1. Add product to cart (Product ID: 123)
2. Open browser Dev Tools → Network tab
3. Observe API request for adding product: `POST /api/cart { "productId": 123 }`
4. Intercept next "Add to Cart" request
5. Modify Product ID in request: Change to different product ID (e.g., 456)
6. Send modified request
7. Check cart to see what product was actually added

**Potential Risk:**
- User can add any product (even restricted ones) to cart
- User can bypass price checks and add free items
- Inventory is not properly validated
- Security vulnerability in API endpoint
- Product restrictions are not enforced server-side

**Expected Observation:**
- ✅ API validates Product ID matches the product user clicked
- ✅ Server checks if Product ID is valid and in-stock
- ✅ Modified Product ID request is rejected with error: "Invalid product"
- ✅ Only the intended product is added to cart
- ✅ Server-side validation prevents manipulation
- ✅ Price in cart matches official product price

---

### ETS_010: Spam Search Field with Very Long Text Input (Copy-Paste Large Document)
**Scenario ID:** ETS_010  
**Category:** Input Handling - Extreme Data

**Testing Idea:**
Tester copies entire document/text (10,000+ characters) and pastes into search field. Application should gracefully handle, truncate, or reject the oversized input.

**Test Steps:**
1. Copy large text (e.g., Wikipedia article, 50,000 characters)
2. Click on search field
3. Paste entire large text
4. Observe search field behavior
5. Click Search button or press Enter

**Potential Risk:**
- Search field accepts entire large text
- Application freezes or crashes
- Search query is sent without truncation (network issues)
- Database query becomes extremely slow
- Memory leak from processing large input
- UI becomes unresponsive

**Expected Observation:**
- ✅ Search field limits input to maximum allowed length (e.g., 256 chars)
- ✅ Text input is truncated automatically OR additional characters are rejected
- ✅ User is notified: "Search text is too long"
- ✅ Application remains responsive
- ✅ Search functionality continues to work normally
- ✅ No performance degradation or crashes

---

### ETS_011: Navigate Away During Order Placement - Click Link While "Place Order" is Processing
**Scenario ID:** ETS_011  
**Category:** Navigation - Interrupting Workflow

**Testing Idea:**
User clicks "Place Order" button to submit order. While request is processing (loading state), user clicks browser Back button or clicks a different link (e.g., "Continue Shopping"). Test if navigation away cancels or completes the order.

**Test Steps:**
1. Complete checkout form
2. Click "Place Order" button
3. Before response returns (while loading spinner shows), click browser Back button
4. Observe what happens to the order
5. Check order history to verify if order was placed

**Potential Risk:**
- Order is partially placed (paid but not confirmed)
- Order is completely abandoned (not placed at all)
- User is confused: "Did my order go through?"
- Duplicate order if navigation triggers retry
- Payment is charged but order is not created

**Expected Observation:**
- ✅ "Place Order" button is disabled during processing (prevents multiple clicks)
- ✅ Navigation away (Back button) is either:
  - Prevented with warning: "Order is processing. Please wait"
  - OR allowed and order completes in background
- ✅ Server-side: Order is created regardless of client-side navigation
- ✅ User can verify order was placed via Order History page
- ✅ Payment is charged only once
- ✅ Order ID is provided for tracking

---

### ETS_012: Repeatedly Modify Product Quantity in Cart (Increase, Decrease, Increase)
**Scenario ID:** ETS_012  
**Category:** Cart Management - Repeated Modifications

**Testing Idea:**
Product is in cart with qty: 1. Tester rapidly increases quantity to 5, then decreases to 2, then increases to 10. Each action sends API request. Test if cart state remains consistent and inventory is correctly tracked.

**Test Steps:**
1. Add product to cart (qty: 1, price: $100)
2. In shopping cart page, increase qty to 5 (total: $500)
3. Immediately decrease qty to 2 (total: $200)
4. Immediately increase qty to 10 (total: $1000)
5. Check final quantity and total in cart
6. Proceed to checkout and verify final amount

**Potential Risk:**
- Cart quantity becomes inconsistent (shows 5 but charged for 10)
- Inventory is over-decremented or under-decremented
- Total amount calculation is wrong
- API requests overlap causing quantity race condition
- Cart shows stale data from earlier modification

**Expected Observation:**
- ✅ Final quantity in cart: 10 (last action wins)
- ✅ Final total: 10 × $100 = $1000
- ✅ All quantity changes are properly processed
- ✅ No race conditions between modification requests
- ✅ Inventory is validated against current stock
- ✅ Order total matches final quantity when placed

---

### ETS_013: Submit Checkout Form Multiple Times by Opening Dev Console and Triggering Form Submit JavaScript
**Scenario ID:** ETS_013  
**Category:** API/JavaScript - Forced Submission

**Testing Idea:**
Tester uses browser developer console to manually trigger form submission JavaScript or directly call API endpoints multiple times, simulating duplicate submissions.

**Test Steps:**
1. Complete checkout form
2. Open browser console (F12)
3. Execute JavaScript to submit form multiple times: `for(let i=0; i<5; i++) { submitCheckoutForm(); }`
4. Or make direct API calls: `fetch('/api/orders', {...})`
5. Monitor number of orders created
6. Check order history

**Potential Risk:**
- Multiple duplicate orders are created
- Each order is charged separately
- User receives multiple confirmation emails
- Inventory is over-decremented
- Security vulnerability: API allows duplicate submissions

**Expected Observation:**
- ✅ Even with multiple JavaScript submissions, only ONE order is created
- ✅ Backend implements idempotency checking (idempotent key)
- ✅ Duplicate requests are detected and rejected
- ✅ Only first successful request creates order
- ✅ Subsequent requests return: "Order already exists"
- ✅ User charged only once
- ✅ Single order confirmation email is sent

---

### ETS_014: Change Network Speed During Checkout and Monitor Loading States
**Scenario ID:** ETS_014  
**Category:** Performance - Network Throttling

**Testing Idea:**
Tester uses browser DevTools network throttling to simulate changing network speeds mid-checkout. For example, start with Fast 4G, then throttle to 3G, then to Slow 2G, then back to 4G.

**Test Setup:**
- DevTools → Network → Throttling options

**Test Steps:**
1. Start network throttle: Fast 4G
2. Begin checkout flow (form loads quickly)
3. While filling form, change to 3G throttle (slow)
4. Continue filling form (now slower)
5. Change to 2G throttle (very slow)
6. Attempt to place order
7. Monitor loading states and timeouts

**Potential Risk:**
- Loading spinners don't appear or get stuck
- Request times out due to slow network
- UI becomes unresponsive
- Form validation doesn't trigger on slow networks
- Order may be partially submitted

**Expected Observation:**
- ✅ Loading spinner appears during form submission
- ✅ "Please wait" or "Processing" message is displayed
- ✅ UI remains responsive even on very slow 2G network
- ✅ Request timeout is set appropriately (> 30 seconds for 2G)
- ✅ After timeout, user sees: "Please check your connection"
- ✅ Form data is retained, user can retry
- ✅ No UI freezing or unresponsiveness

---

### ETS_015: Try to Access Shopping Cart While NOT Logged In (Direct URL Access)
**Scenario ID:** ETS_015  
**Category:** Security - Unauthorized Access

**Testing Idea:**
User logs out or session expires. Tester directly accesses shopping cart URL (e.g., `/cart` or `/shopping-cart`) without logging in again. Test if application redirects to login or exposes cart data.

**Test Steps:**
1. Login and add products to cart
2. Copy cart URL: `https://app.com/cart`
3. Logout
4. Navigate directly to cart URL (paste in address bar)
5. Observe application response

**Potential Risk:**
- Shopping cart page loads without authentication
- Previous user's cart data is exposed
- Attacker can access another user's cart
- Security vulnerability: No access control
- User can manipulate cart without login

**Expected Observation:**
- ✅ User is redirected to login page with message: "Please login to view cart"
- ✅ Cart URL is not accessible without valid session
- ✅ Login page is displayed
- ✅ After login, user is redirected back to cart
- ✅ Cart items are accessible only to authenticated user
- ✅ No unauthorized access to other users' carts

---

### ETS_016: Search with Keyboard Shortcuts - Ctrl+F Search vs Application Search
**Scenario ID:** ETS_016  
**Category:** Browser Integration - Feature Interaction

**Testing Idea:**
Tester uses browser's native search (Ctrl+F) to search on the page while also testing the application's built-in search feature. Test if both search methods work independently and don't conflict.

**Test Steps:**
1. Open application dashboard with products listed
2. Use application search to search for "ZARA COAT"
3. Application search shows results on page
4. Press Ctrl+F (browser find)
5. Search for "Price" or other text on page
6. Browser highlighting works alongside application search
7. Click on application search result
8. Use Ctrl+F again

**Potential Risk:**
- Browser search interferes with application search
- Both searches highlight same elements causing confusion
- UI elements get hidden or overlapped by search overlays
- Keyboard shortcuts (Ctrl+F) conflict with application keyboard shortcuts
- Focus management is confused between search types

**Expected Observation:**
- ✅ Browser search (Ctrl+F) and application search are independent
- ✅ Browser search highlights text on the current page
- ✅ Application search filters products and shows results
- ✅ Both can be used simultaneously without conflict
- ✅ Closing browser search (Esc) doesn't clear application search
- ✅ Both work smoothly without performance impact

---

### ETS_017: Checkout Form Auto-Fill via Browser Password Manager
**Scenario ID:** ETS_017  
**Category:** Browser Integration - Auto-fill

**Testing Idea:**
Browser's password manager (Chrome, Firefox, etc.) suggests auto-filling address fields if they were previously saved. Tester allows auto-fill to populate all fields at once. Test if auto-filled data is correctly processed.

**Test Steps:**
1. Complete checkout form with addresses once (browser asks to save)
2. Save address in browser password manager
3. Return to checkout in a new session
4. When address fields appear, click auto-fill suggestion
5. All address fields auto-populate from saved data
6. Click "Place Order"
7. Verify order uses auto-filled address

**Potential Risk:**
- Auto-filled data doesn't trigger form validation
- Old/outdated address is auto-filled (user doesn't notice)
- Auto-filled data format causes backend validation error
- Form state not updated after auto-fill
- Auto-filled fields show validation errors after submission

**Expected Observation:**
- ✅ Auto-fill populates all address fields correctly
- ✅ Form fields are updated with auto-filled values
- ✅ Form validation passes with auto-filled data
- ✅ User can edit auto-filled fields before submitting
- ✅ "Place Order" button works normally after auto-fill
- ✅ Order is created successfully with auto-filled address

---

### ETS_018: Checkout with Unexpected Data Types - Paste Special Characters/Emojis in Address Field
**Scenario ID:** ETS_018  
**Category:** Input Validation - Special Data

**Testing Idea:**
Tester pastes special characters, emojis, or unusual Unicode characters into address fields. For example: "123 Main St 🏠 🚀", or "Rue de la Paix™", or RTL (Right-to-Left) text.

**Test Steps:**
1. Open checkout form
2. Fill Street Address with emojis/special chars: "123 Main St 🏠"
3. Fill City with accent characters: "São Paulo"
4. Fill State with RTL text: "العربية"
5. Fill Country normally
6. Submit form
7. Check if order is created
8. Verify address display in order confirmation

**Potential Risk:**
- Special characters are not properly sanitized
- Database cannot store emojis (encoding issues)
- Address displays incorrectly in order confirmation
- Fulfillment systems fail to parse address
- XSS vulnerability if special chars are not escaped

**Expected Observation:**
- ✅ Application accepts international characters (São Paulo, etc.)
- ✅ Emojis are either accepted and stored OR rejected gracefully
- ✅ RTL text is handled correctly
- ✅ Order confirmation displays address correctly
- ✅ No database encoding errors
- ✅ Fulfillment can read and process address
- ✅ Server-side validation handles all character types

---

### ETS_019: Perform Complete Checkout While Application Is in RTL (Right-to-Left) Mode
**Scenario ID:** ETS_019  
**Category:** Localization - RTL Language

**Testing Idea:**
If application supports RTL languages (Arabic, Hebrew, Urdu), tester switches to RTL language mode and performs complete checkout. Test if all form fields, buttons, and layouts are correctly mirrored and functional.

**Test Steps:**
1. Change application language to Arabic or Hebrew
2. Verify page layout is mirrored (RTL)
3. Navigate to product listing
4. Add product to cart
5. Go to shopping cart
6. Proceed to checkout
7. Fill all address fields (in RTL mode)
8. Click "Place Order" button
9. Verify order confirmation

**Potential Risk:**
- Form labels are still LTR (not mirrored)
- Input field focus is on wrong side
- Form validation messages appear in wrong position
- Buttons are in wrong corners
- RTL text input doesn't work correctly
- Database stores RTL text backwards

**Expected Observation:**
- ✅ Entire UI is properly mirrored for RTL
- ✅ Form fields and labels are RTL
- ✅ Input focus indicator is on correct side
- ✅ All buttons are correctly positioned
- ✅ RTL text is properly stored and displayed
- ✅ Order confirmation respects RTL layout
- ✅ No layout breaking or overlapping elements

---

### ETS_020: Verify API Response Consistency by Making Same Request 10 Times
**Scenario ID:** ETS_020  
**Category:** API Testing - Consistency Checking

**Testing Idea:**
Tester makes the same API request 10 times in succession (e.g., `GET /api/products/123`) and compares responses to verify consistency and idempotency. Check for data differences or inconsistencies.

**Test Steps:**
1. Identify an API endpoint: `/api/products/123`
2. Make request #1 and capture response (price, stock, etc.)
3. Make requests #2-10 without changing any data
4. Compare all 10 responses
5. Check for differences in:
   - Product price
   - Stock count
   - Product description
   - Response time
   - Status code

**Potential Risk:**
- Responses are different (data is not consistent)
- Stock count changes between requests (race condition)
- Price changes mid-checkout
- Response is corrupted (incomplete JSON)
- Database queries return different results

**Expected Observation:**
- ✅ All 10 responses are identical
- ✅ Product price is consistent: $99
- ✅ Stock is consistent: 100 units
- ✅ Response format is identical
- ✅ Status code is always 200 (OK)
- ✅ Response time is similar (no anomalies)
- ✅ No data inconsistencies between requests
- ✅ Indicates API is stable and deterministic

---

## Summary - Exploratory Testing Coverage

| Scenario | Category | Primary Focus | Testing Difficulty |
|----------|----------|---------------|--------------------|
| ETS_001 | User Behavior | Rapid clicks | Easy |
| ETS_002 | Navigation | Browser back/forward | Easy |
| ETS_003 | Authentication | Session switching | Medium |
| ETS_004 | Accessibility | Keyboard navigation | Medium |
| ETS_005 | Page State | Repeated actions | Easy |
| ETS_006 | Multi-Tab | Tab switching | Medium |
| ETS_007 | Form Submission | Premature Enter key | Easy |
| ETS_008 | Session | Idle timeout | Hard (time-based) |
| ETS_009 | Security | Data manipulation | Hard |
| ETS_010 | Input Handling | Large inputs | Easy |
| ETS_011 | Navigation | Interrupt workflow | Medium |
| ETS_012 | Cart Management | Rapid modifications | Medium |
| ETS_013 | API/JavaScript | Forced submissions | Hard |
| ETS_014 | Performance | Network throttling | Easy (with DevTools) |
| ETS_015 | Security | Unauthorized access | Easy |
| ETS_016 | Browser Integration | Keyboard shortcuts | Medium |
| ETS_017 | Browser Integration | Auto-fill | Easy |
| ETS_018 | Input Validation | Special characters | Medium |
| ETS_019 | Localization | RTL mode | Hard (language setup) |
| ETS_020 | API | Consistency checking | Hard |

## Key Findings to Look For

✅ **UI Responsiveness**: Buttons remain responsive under rapid clicks  
✅ **Form State Persistence**: Data is retained across page refreshes and navigation  
✅ **Session Consistency**: Session state is properly managed across rapid login/logout  
✅ **Cart Synchronization**: Cart is consistent across multiple tabs and refreshes  
✅ **Idempotent Operations**: Duplicate requests don't create duplicate orders  
✅ **Input Validation**: Application gracefully handles edge cases and malformed data  
✅ **Navigation Safety**: Users are prevented from navigating away during critical operations  
✅ **Security**: Unauthorized access is prevented and data is validated server-side  
✅ **Performance**: Application remains responsive under various network conditions  
✅ **Accessibility**: Keyboard navigation and browser integration work correctly  

## Recommended Approach

- Run exploratory tests **after** functional and negative tests
- **Combine with automation**: Automate repeatable scenarios (ETS_001, ETS_005, ETS_007)
- **Use DevTools heavily**: Network throttling, console manipulation, Dev Tools inspection
- **Vary test order**: Don't always follow same sequence (increases discovery)
- **Document findings**: Screenshot/video evidence for any issues found
- **Focus on critical paths**: Prioritize ETS_009, ETS_012, ETS_013 (security/data issues)