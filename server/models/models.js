const mongoose = require('mongoose');
var connect = process.env.MONGODB_URI;
mongoose.connect(connect);

var doctorSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
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


var groupSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
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

var eventSchema = new mongoose.Schema({
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



const Doctor = mongoose.model('Doctor', doctorSchema);
const Group = mongoose.model('Group', groupSchema);
const Event = mongoose.model('Event', eventSchema);


module.exports = {Doctor, Group, Event};
