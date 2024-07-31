import customers from '../assets/customer.json' with { type: "json" }

// Technical Debt
// This example has issues that make it hard to maintain since it doesn't 
// properly validate parameters passed to shared function

const assignNewCustomerId = (currentCustomerId, newCustomerId) => {
  for (let customerToUpdate of customers) {
    if (customerToUpdate.id === currentCustomerId) {
      customerToUpdate.id = newCustomerId
      return customerToUpdate
    }
  }
  return -1
}

let updatedCustomers = []
updatedCustomers.push(assignNewCustomerId( 999, 9998))
updatedCustomers.push(assignNewCustomerId(1000, "ABCD"))
console.log('updatedCustomers: ', updatedCustomers)

// -----
// Refactor this code below to make it more readable by:
// 1. Create an intermediate variable when calling `assignNewCustomerId` to validate 
//    result before pushing to `updatedCustomers`
// 2. Add parameter validation to the `assignNewCustomerId` function
/*
const assignNewCustomerId = (currentCustomerId, newCustomerId) => {
  for (let customerToUpdate of customers) {
    if (customerToUpdate.id === currentCustomerId) {
      customerToUpdate.id = newCustomerId
      return customerToUpdate
    }
  }
  return -1
}

let updatedCustomers = []
updatedCustomers.push(assignNewCustomerId( 999, 9998))
updatedCustomers.push(assignNewCustomerId(1000, "ABCD"))
console.log('updatedCustomers: ', updatedCustomers)
*/