const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  UserId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  Ecommerce: [{
    EcommerceId: {
      type: Schema.Types.ObjectId,
      ref: 'ecommerce'
    },
    total: Number
  }],
  totalPrice: Number
}, {
  timestamps: true
});

const transaction = mongoose.model('transaction', transactionSchema);

module.exports = transaction;
