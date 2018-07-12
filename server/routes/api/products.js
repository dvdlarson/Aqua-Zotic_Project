const Product = require('../../models/Product');

module.exports = (app) => {
  app.get('/api/products', (req, res, next) => {
    Product.find()
      .exec()
      .then((product) => res.json(product))
      .catch((err) => next(err));
  });

  app.post('/api/products', function (req, res, next) {
    const product = new Product(req.body);

    product.save()
      .then(() => res.json(product))
      .catch((err) => next(err));
  });

  app.delete('/api/products/:id', function (req, res, next) {
    Product.findOneAndRemove({ _id: req.params.id })
      .exec()
      .then((product) => res.json())
      .catch((err) => next(err));
  });

  

  app.put('/api/products/:id/update', (req, res, next) => {
    Product.findById(req.params.id)
      .exec()
      .then((product) => {
        // product.count--;

        product.save()
          .then(() => res.json(product))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });
};
