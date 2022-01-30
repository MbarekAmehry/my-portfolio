const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String },
  description: { type: String },
  category: { type: String },
  imgUrl: { type: String },
});

module.exports = mongoose.model('Post', postSchema);
