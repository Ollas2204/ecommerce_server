const Ecommerce = require('../models/ecommerce');

module.exports = {
  find: (req, res, next) => {
    Ecommerce.find()
      .then(ecommerce => {
        res.status(201).json(ecommerce)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  },
  create: (req, res) => {
    Ecommerce.create({
<<<<<<< HEAD
      title : req.body.title,
      description : req.body.description,
      image : req.file.cloudStoragePublicUrl,
      price : req.body.price,
      category: req.body.category
    })
    .then(ecommerce => {
      res.status(201).json({
        msg : 'successful create new data',
        ecommerce : ecommerce
=======
        title: req.body.title,
        description: req.body.description,
        image: req.file.cloudStoragePublicUrl,
        price: req.body.price,
>>>>>>> 71d1cab61da60a7d9324a190013cf646cf5f0bbb
      })
      .then(ecommerce => {
        res.status(201).json({
          msg: 'successful create new data',
          ecommerce: ecommerce
        })
      })
      .catch(err => {
        res.status(500).json({
          msg: 'failed create data'
        })
      })
  },
<<<<<<< HEAD
  update : ( req, res ) => {
    Ecommerce.findByIdAndUpdate(req.params.id,{
      title : req.body.title,
      description : req.body.description,
      image : req.file.cloudStoragePublicUrl,
      price : req.body.price,
      category: req.body.category
    })
    .then(ecommerce => {
      res.status(201).json({
        msg : 'successful update the data',
        ecommerce : ecommerce
=======
  update: (req, res) => {
    Ecommerce.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image: req.file.cloudStoragePublicUrl,
        price: req.body.price,
>>>>>>> 71d1cab61da60a7d9324a190013cf646cf5f0bbb
      })
      .then(ecommerce => {
        res.status(201).json({
          msg: 'successful update the data',
          ecommerce: ecommerce
        })
      })
      .catch(err => {
        res.status(500).json({
          msg: 'failed to update the data'
        })
      })
  },
  delete: (req, res) => {
    Ecommerce.findByIdAndRemove(req.params.id, (err, deletedecommerce) => {
      if (err) {
        res.status(500).json({
          msg: 'failed to deleted the data'
        })
      } else {
        res.status(200).json({
          msg: 'successful delete the data',
          ecommerce: deletedecommerce
        })
      }
    })
  }
}
