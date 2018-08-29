const mongoose = require('mongoose');
const connect = process.env.MONGODB_URI;
mongoose.connect(connect);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  usertype: {
    type: String,
    required: true
  },
});

const doctorSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  specialty: {
    type: String,
    required: true
  },
  language: [{
    type: String,
    required: true
  }],
  location: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
});


const groupSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
});

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  eventDescription: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  InvitedDoctors: [{
      type: mongoose.Schema.ObjectId,
      ref: 'Doctor'

    }],
  eventHost: {
      type: mongoose.Schema.ObjectId,
      ref: 'Group'
    },
});


const User = mongoose.model('User', userSchema);
const Doctor = mongoose.model('Doctor', doctorSchema);
const Group = mongoose.model('Group', groupSchema);
const Event = mongoose.model('Event', eventSchema);


module.exports = {User, Doctor, Group, Event};
