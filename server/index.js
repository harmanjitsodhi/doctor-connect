var express = require('express');

const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const session=require('express-session')
const React = require('react');
const ReactDOM = require('react-dom');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const secret = process.env.secret;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const models = require('./models/models');
const User = models.User;


app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.use(session({secret: secret}));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(function(username, password, done) {
  // Find the user with the given username
  User.findOne({ username: username }, function (err, user) {
    // if there's an error, finish trying to authenticate (auth failed)
    if (err) {
      console.log(err);
      return done(err);
    }
    // if no user present, auth failed
    if (!user) {
      console.log(user);
      return done(null, false);
    }
    // if passwords do not match, auth failed
    if (user.password !== password) {
      return done(null, false);
    }
    // auth has has succeeded
    return done(null, user);
  });
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', auth(passport));
app.use('/', routes);



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


app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
});


app.listen(process.env.PORT || 1337);


module.exports = app;
