const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Product', ProductSchema);
