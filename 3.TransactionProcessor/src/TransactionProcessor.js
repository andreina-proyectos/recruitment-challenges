class TransactionProcessor {
  // QUESTION: COMPLETE ALL CLASS FUNCTIONS TO PASS THE TESTS

  constructor(transactions) {
    this.transactions = transactions;
  }

  print(tx) {
    console.log(
      `ID: ${tx.id} - Brand: ${tx.brand} - Currency: ${tx.currency} - Amount: ${tx.amount}`
    );
  }

  // Check valid transactions rules
  static isValidTransaction(transaction) {
    const arrayBrand = ["visa", "mastercard", "amex"];
    const arrayCurrency = ["EUR", "GBP", "USD"];
    if(transaction.amount>=0 && arrayBrand.includes(transaction.brand) && arrayCurrency.includes(transaction.currency) && transaction.id>0) {
      return true;
    }
    else {
      return false;
    }
  }

  // Remove invalid transactions
  filterInvalidTransactions() {
    this.transactions = this.transactions.filter(transaction => !TransactionProcessor.isValidTransaction(transaction))
    return this;
  }

  // Return transactions of given currency
  getTransactionsByCurrency(currency) {
    // ...
    return this;
  }

  // Return transactions of given brand
  getTransactionsByBrand(brand) {
    // ...
    return this;
  }

  // BONUS:
  // Apply multiple filters. Filters parameter should be an array of functions (predicates)
  filterTransaction(filters) {
    // ...
    return this;
  }

  // Return the total amount of current transactions array
  sum() {
    return 0;
  }
}

module.exports = TransactionProcessor;
