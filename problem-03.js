
function createBankAccount(owner, initialBalance) {
  const account = {
    owner: owner,
    balance: initialBalance,
    transactions: [],

    deposit(amount) {
      if (typeof amount !== "number" || Number.isNaN(amount) || amount <= 0) {
        return "Invalid amount";
      }

      const balanceBefore = this.balance;

      this.balance += amount;

      this.transactions.push({
        type: "deposit",
        amount: amount,
        balanceBefore: balanceBefore,
        balanceAfter: this.balance,
      });

      return this.balance;
    },

    withdraw(amount) {
      if (typeof amount !== "number" || Number.isNaN(amount) || amount <= 0) {
        return "Invalid amount";
      }

      if (amount > this.balance) {
        return "Insufficient balance";
      }

      const balanceBefore = this.balance;

      this.balance -= amount;

      this.transactions.push({
        type: "withdraw",
        amount: amount,
        balanceBefore: balanceBefore,
        balanceAfter: this.balance,
      });

      return this.balance;
    },

    getLastTransaction() {
      if (this.transactions.length === 0) {
        return "No transactions";
      }

      return this.transactions[this.transactions.length - 1];
    },

    undoLastTransaction() {
      if (this.transactions.length === 0) {
        return "No transactions to undo";
      }

      const lastTransaction = this.transactions.pop();

      this.balance = lastTransaction.balanceBefore;

      return this.balance;
    },

    getSummary() {
      return `${this.owner} has ${this.balance} EGP. Transactions: ${this.transactions.length}`;
    },
  };

  return account;
}

// First account
const account = createBankAccount("Ahmed", 1000);

console.log(account.deposit(200)); // 1200
console.log(account.withdraw(300)); // 900
console.log(account.withdraw(2000)); // Insufficient balance

console.log(account.undoLastTransaction()); // 1200
console.log(account.undoLastTransaction()); // 1000
console.log(account.undoLastTransaction()); // No transactions to undo

console.log(account.deposit(-50)); // Invalid amount
console.log(account.deposit("200")); // Invalid amount

console.log(account.getLastTransaction()); // No transactions
console.log(account.getSummary());

// Second account
const account2 = createBankAccount("Mona", 5000);

account.deposit(100);

console.log(account.balance); // 1100
console.log(account2.balance); // 5000

console.log(account.transactions.length); // 1
console.log(account2.transactions.length); // 0
