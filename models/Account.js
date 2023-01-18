const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
  account_id: {
    type: Number,
  },
  limit: {
    type: Number,
  },
  products: [],
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
