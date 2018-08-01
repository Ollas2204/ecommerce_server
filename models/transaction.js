const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
<<<<<<< HEAD
  UserId        : { type: Schema.Types.ObjectId, ref: 'user'},
  Ecommerce   : [{
    title: String,
    category: String,
    total : Number
=======
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
>>>>>>> 71d1cab61da60a7d9324a190013cf646cf5f0bbb
  }],
  totalPrice: Number
}, {
  timestamps: true
});

const transaction = mongoose.model('transaction', transactionSchema);

module.exports = transaction;
