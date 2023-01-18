const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  username: String,
  name: String,
  address: String,
  birthdate: {
    type: Date,
  },
  email: String,
  active: Boolean,
  accounts: [
    {
      type: Number,
    },
  ],
  tier_and_details: {
    tier: String,
    active: Boolean,
    benefits: [],
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
