const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ecommerceSchema = new Schema({
<<<<<<< HEAD
  title         : String,
  description   : String,
  image         : String,
  category      : String,
  price         : Number,
=======
  title: String,
  description: String,
  image: String,
  price: Number,
>>>>>>> 71d1cab61da60a7d9324a190013cf646cf5f0bbb
}, {
  timestamps: true
});

const ecommerce = mongoose.model('ecommerce', ecommerceSchema);

module.exports = ecommerce;
