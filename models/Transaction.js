const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  account_id: {
    type: Number,
  },
  transaction_count: {
    type: Number,
  },
  bucket_start_date: {
    type: Date,
  },
  bucket_end_date: {
    type: Date,
  },
  transactions: [
    {
      date: {
        type: Date,
      },
      amount: {
        type: Number,
      },
      transaction_code: String,
      symbol: String,
      price: Number,
      total: Number,
    },
  ],
});

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction;
