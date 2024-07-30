import customers from '../assets/customer.json' with { type: "json" }

// Too many comments
// This example has too many comments. Commenting your code is a good, if not
// a "best practice", but it hurts readablity when too many comments and/or 
// irrelevant comments are used

// Define an array to contain the results of the customer search
let filteredCustomers = []
// Loop through the customers to locate those with current year sales of less
// than $100K.
for (let i = 0; i < customers.length; i++) {
  // Select customers whose current year sales are less than $100K
  // Use the following two statements if we need to debug a subset of the data
  /*
  if (i > 100) {
    throw new Error('debugging') 
  }
  console.log(`customers[i].current_year_sales: ${ customers[i].current_year_sales } type: `, typeof customers[i].current_year_sales)
  */
  if (customers[i].current_year_sales < 10000.00 && customers[i].country === 'ID') {
    // When a customer with less than $100K in current year sales is located
    // push summary information onto the results array so it can be reported
    // on later in this app.
    filteredCustomers.push({
      name: customers[i].name,
      country: customers[i].country,
      current_year_sales: customers[i].current_year_sales,
    })
  }
  // Use this if we need to debug 
  // throw new Error('debugging') 
} // end of for-loop

// Next loop through the array of customers whose current year sales is <$100K
// and list them along with the amount of actual sales they have purchased this
// year. Preface this list with appropriate heading information
console.log(`readability.js - Customers with <$100K in current year sales:`)
for (let i=0; i<filteredCustomers.length; i++) {
  // For each entry in the results array list the customer name and the amount
  // they have purchased from us in the current year.
  console.log(`...name: ${ filteredCustomers[i].name } country: ${ filteredCustomers[i].country } current year sales: ${ filteredCustomers[i].current_year_sales }`)
} // End of for-loop

// -----
// Refactor this code below to make it more readable by:
// 1. Remove unneeded `console.log` statements
// 2. Rename variables & constants to be more descriptive
// 3. Use `for-of` instead of simple `for` loops
// 4. Create condition variable with descriptive name for use in `if` statements