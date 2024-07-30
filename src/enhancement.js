import customers from '../assets/customer.json' with { type: "json" }
import newcustomers from '../assets/newcustomers.json' with {type: "json"}

// Enhancements & maintainability
// This example has issues that make it difficult to enhance & maintain. It's 
// purpose is to insert new customers into the current customer list.

// Sort both lists on the customer id so we can identify insertion points
const sortingFunction = (a, b) => a.id - b.id
const currentCustomers = customers.sort(sortingFunction)
const newCustomers = newcustomers.sort(sortingFunction)
console.log('currentCustomers (sorted by id): ', currentCustomers)
console.log('newCustomers (sorted by id):', newCustomers)

// -----
// Refactor this code below to make it more readable by:
// 1. Rename the sorting function to be more descriptive
// 2. Rename the new customers constant so it doesn't collide with the JSON
// 3. Evaluate replacement of the sort function with a `map`