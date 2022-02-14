const mongoose = require('mongoose');

const { Schema } = mongoose;

const tagSchema = new Schema({
  tag: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('tags', tagSchema);
