const mongoose = require('mongoose');

const { Schema } = mongoose;

const wordSchema = new Schema({
  word: {
    type: String,
    required: true,
    unique: true,
  },
  meaning: {
    type: String,
    default: '',
  },
  example: {
    type: String,
    default: '',
  },
  translate: {
    type: String,
    default: '',
  },
  createdDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  tag: {
    ref: 'tags',
    type: Schema.Types.ObjectId,
  },
  athor: {
    ref: 'users',
    type: Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model('words', wordSchema);
