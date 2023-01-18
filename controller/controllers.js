const Customer = require('../models/Customer')
const Account = require('../models/Account')
const Transaction = require('../models/Transaction')

exports.getUser = async (req, res) => {
  if (!req.body.username) {
    res.status(400).json({
      Status: 'Unsuccessful',
      message: 'Username is required!',
    })
  }
  const user = await Customer.findOne({ username: req.body.username })
  if (!user) {
    res.status(404).json({
      Status: 'Unsuccessful',
      message: 'User not found!',
    })
  }
  const date = user.birthdate
    .toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\//g, '-')
  const accountIds = user.accounts
  const accountObjs = []
  for (var i = 0; i < accountIds.length; i++) {
    const account = await Account.findOne({ account_id: accountIds[i] })
    if (!account) {
      res.status(404).json({
        Status: 'Unsuccessful',
        message: 'Account with account_id not found!',
      })
    }
    const transaction = await Transaction.findOne({
      account_id: accountIds[i],
    })
    accountObjs.push({
      account_id: account.account_id,
      limit: account.limit,
      transaction_count: transaction.transaction_count || 0,
    })
  }
  res.json({
    name: user.name,
    birthdate: date,
    email: user.email,
    accounts: accountObjs,
  })
}

exports.getAccount = async (req, res) => {
  if (!req.body.account_id) {
    res.status(400).json({
      Status: 'Unsuccessful',
      message: 'Account ID is required!',
    })
  }
  const account = await Account.findOne({ account_id: req.body.account_id })
  if (!account) {
    res.status(404).json({
      status: 'Unsuccessful',
      message: 'No account exists with this account ID!',
    })
  }
  const trans = await Transaction.findOne({ account_id: req.body.account_id })
  const allTrans = trans.transactions
  var amountSold = 0
  var amountBuy = 0
  for (var i = 0; i < allTrans.length; i++) {
    if (allTrans[i].transaction_code === 'buy') {
      amountBuy = amountBuy + allTrans[i].amount
    } else {
      amountSold = amountSold + allTrans[i].amount
    }
  }
  res.json({
    total_amount_bought: amountBuy,
    total_amount_sold: amountSold,
  })
}
