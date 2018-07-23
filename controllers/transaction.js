const Transaction = require('../models/transaction');

module.exports = {
  findByUser : ( req, res, next) => {
    Transaction.find({
      UserId : req.decoded.id,
    })
    .populate(['UserId','Ecommerce.EcommerceId'])
    .then(transaction => {
      res.status(201).json(transaction)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  },
  create : ( req, res) => {
    var transaction = new Transaction()
    transaction.UserId = req.decoded.id
    transaction.Ecommerce = []
    req.body.ecommerce.map(item=>{
      transaction.Ecommerce.push({
        EcommerceId: item.id,
        total: item.total
      })
    })
    transaction.save()
    .then(transaction => {
      res.status(201).json({
        msg : 'successful create new data',
        transaction : transaction
      })
    })
    .catch(err => {
      res.status(500).json({
        msg : 'failed create data',
        err: err
      })
    })
  },
  delete : ( req, res) => {
    Transaction.findByIdAndRemove(req.params.id, (err, deletedtransaction) => {
      if (err) {
        res.status(500).json({
          msg: 'failed to deleted the data'
        })
      }
      else {
        res.status(200).json({
          msg: 'successful delete the data',
          transaction : deletedtransaction
        })
      }
    })
  }
}
