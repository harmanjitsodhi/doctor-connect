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
const Doctor = models.Doctor;
const Group = models.Group;


app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.use(session({secret: secret}));

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

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.use(passport.initialize());
app.use(passport.session());

// app.use('/', routes);

app.post('/api/addUser', function(req,res) {
const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    userType: req.body.userType,
  })

  newUser.save()
    .then(response => {
      console.log("aded new contact successfuly")
      res.send(response)
    }).catch(err => {
      console.log("error didnt save")
      res.send(err)
    })
});

app.post('/api/addDoctor', function(req,res) {
  const newDoctor = new Doctor({
    //don't forgeet to populate user id correctly
    user: req.body.user,
    name: req.body.name,
    specialty: req.body.specialty,
    language: req.body.language,
    location: req.body.location,
    email: req.body.email
  })

  newDoctor.save()
    .then(response => {
      console.log("added new doctor successfuly")
      res.send(response)
    }).catch(err => {
      console.log("error didnt save")
      res.send(err)
    })
});

app.post('/api/addGroup', function(req,res) {
  const newGroup = new Group({
    //don't forgeet to populate user id correctly
    user: req.body.user,
    name: req.body.name,
    about: req.body.about,
    email: req.body.email,
    isGroup: req.body.isGroup
  })

  newGroup.save()
    .then(response => {
      console.log("added new group successfuly")
      res.send(response)
    }).catch(err => {
      console.log("error didnt save")
      res.send(err)
    })
});

app.post('/api/login', passport.authenticate('local', {
  successRedirect:'/api/current_user',
  failureRedirect:'/api/failed'
}));

app.get('/api/logout', function(req, res) {
    req.logout();
    res.redirect('/api/login');
});

app.get('/api/current_user', (req, res) => {
  if(!req.user) {
    return res.send('Error you need to login');
  }

  if (req.user.userType === 'doctor') {
    Doctor.findOne({user: req.user._id}, function (err, doctor) {
      if (err) {
        res.send({error: err})
      } else if (!doctor) {
        res.send("Error, doctor not found")
      } else {
        res.send({userType: 'doctor', profile: doctor})
      }
    })
  }

  if (req.user.userType === 'group') {
    Group.findOne({user: req.user._id}, function (err, group) {
      if (err) {
        res.send({error: err})
      } else if (!group) {
        res.send("Error, group not found")
      } else {
        res.send({userType: 'group', profile: group})
      }
    })
  }

  if (req.user.userType === 'patient') {
    Group.findOne({user: req.user._id}, function (err, group) {
      if (err) {
        res.send({error: err})
      } else if (!group) {
        res.send("Error, group not found")
      } else {
        res.send({userType: 'group', profile: group})
      }
    })
  }

})

app.get('/api/failed', (req, res) => {
  res.status(401).send('Error bad pass');
})


app.listen( process.env.PORT ||1337);


module.exports = app;
