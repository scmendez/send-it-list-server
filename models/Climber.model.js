const mongoose = require('mongoose');

let ClimberSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please enter username']
    },
    email: {
      type: String,
      required: [true, 'Please enter email']
    },
    password: {
      type: String,
      required: true
    },
    profilePhoto: String
  },
  {
    timestamps: true
  }
);

ClimberSchema.index({ 'email': 1}, {unique: true});
ClimberSchema.index({ 'username': 1}, {unique: true});

let ClimberModel = mongoose.model('climber', ClimberSchema)

module.exports = ClimberModel
