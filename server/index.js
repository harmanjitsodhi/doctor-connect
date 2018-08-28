var express = require('express');

const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const session=require('express-session')
const React = require('react');
const ReactDOM = require('react-dom');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
// var User = require('./models/models').User;

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());



// app.post('/api/addContact', function(req,res) {
//
//   const newContact = new User({
//     username: req.body.username,
//     password: req.body.password
//   })
//
//   newContact.save()
//     .then(response => {
//       console.log("aded new contact successfuly")
//       res.send(response)
//     }).catch(err => {
//       console.log("error didnt save")
//       res.send(err)
//     })
// })




app.listen(process.env.PORT || 1337);


module.exports = app;
