const Transaction = require('../models/transaction');
const User = require('../models/user');
const sgMail = require('@sendgrid/mail');

module.exports = {
  findByUser: (req, res, next) => {
    Transaction.find({
        UserId: req.decoded.id,
      })
      .populate(['UserId', 'Ecommerce.EcommerceId'])
      .then(transaction => {
        res.status(201).json(transaction)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  },
<<<<<<< HEAD
  create : ( req, res) => {
    User.findById(req.decoded.id)
      .then(user=>{
        console.log(user);
        let total = 0
        var transaction = new Transaction()
        transaction.UserId = req.decoded.id
        transaction.Ecommerce = []
        req.body.ecommerce.map(item=>{
          total+=item.total
          transaction.Ecommerce.push({
            title: item.title,
            category: item.category,
            total: item.total
          })
        })
        transaction.totalPrice = total
        transaction.save()
        .then(transaction => {
          console.log(transaction);
          
          sgMail.setApiKey(process.env.API_SENDGRID);
          const msg = {
            to: user.email,
            from: process.env.emailFrom,
            subject: 'OLLA PEDIA',
            text: 'Hello OLLA PEDIA member',
            html: `Terima kasih sudah membeli layanan kami dan akan kami proses secepatnya`,
          };
          sgMail.send(msg);
          return res.status(201).json({
            msg : 'successful create new data',
            transaction : transaction
          })
=======
  create: (req, res) => {
    var transaction = new Transaction()
    transaction.UserId = req.decoded.id
    transaction.Ecommerce = []
    req.body.ecommerce.map(item => {
      transaction.Ecommerce.push({
        EcommerceId: item.id,
        total: item.total
      })
    })
    transaction.save()
      .then(transaction => {
        res.status(201).json({
          msg: 'successful create new data',
          transaction: transaction
>>>>>>> 71d1cab61da60a7d9324a190013cf646cf5f0bbb
        })
      })
      .catch(err => {
        res.status(500).json({
<<<<<<< HEAD
          msg : 'failed create data',
=======
          msg: 'failed create data',
>>>>>>> 71d1cab61da60a7d9324a190013cf646cf5f0bbb
          err: err
        })
      })
  },
  delete: (req, res) => {
    Transaction.findByIdAndRemove(req.params.id, (err, deletedtransaction) => {
      if (err) {
        res.status(500).json({
          msg: 'failed to deleted the data'
        })
      } else {
        res.status(200).json({
          msg: 'successful delete the data',
          transaction: deletedtransaction
        })
      }
    })
  }
}
