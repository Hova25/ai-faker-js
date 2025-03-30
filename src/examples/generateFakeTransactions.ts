import { exampleClient } from "./exampleInit";

const generateFakeTransactions = () => {
  return exampleClient.generate({
    prompt: "Generate a set of financial transactions with the following details: transaction ID, account number, transaction date, transaction type, amount, currency, merchant name, transaction location, and transaction status.",
    schema: {
      array: {
        object: {
          transactionId: "string",
          accountNumber: "string",
          transactionDate: { type: "Date", description: "Date of the transaction" },
          transactionType: { type: "string", description: "Type of transaction (e.g., deposit, withdrawal, transfer)" },
          amount: { type: "number", description: "Amount of the transaction" },
          currency: { type: "string", description: "Currency of the transaction" },
          merchant: { type: "string", description: "Name of the merchant" },
          location: { type: "string", description: "Location of the transaction" },
          status: { type: "string", description: "Status of the transaction (e.g., completed, pending, failed)" },
        },
      },
      length: 20,
      description: "Set of fictitious financial transactions with additional details",
    },
  });
};

const transactions = generateFakeTransactions();
console.log(transactions);