const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  UserId        : { type: Schema.Types.ObjectId, ref: 'user'},
  Ecommerce   : [{
    title: String,
    category: String,
    total : Number
  }],
  totalPrice : Number
}, {
  timestamps : true
});

const transaction = mongoose.model('transaction', transactionSchema);

module.exports = transaction;
