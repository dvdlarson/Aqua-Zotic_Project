const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  product_code: {
    type: String,
    default: 'AAA000'
  },
  category: {
    type: String,
    default: 'AAA000'
  },
  description: {
    type: String,
    default: 'AAA000'
  },
  cost: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    default: 0
  },
  qty_on_hand: {
    type: Number,
    default: 0
  },
  is_active: {
    type: Boolean,
    default: False
  },
  description: {
    type: Text,
    default: 'AAA000'
  },
  img1: { 
    data: Buffer, 
    contentType: String
  },
  meta: {
    requests:Number
  }
});

module.exports = mongoose.model('Product', ProductSchema);
