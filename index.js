'use strict';
require('dotenv').config();
const express = require('express');
const db = require('./modules/database');
const resize = require('./modules/resize');
const bodyParser = require('body-parser');
const passport = require('passport');
const multer = require('multer');
const upload = multer({dest: 'public/files/'});
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');

// const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json());

// enable cookies to send userID to client
app.use(cookieParser());

// database connection
const connection = db.connect();

const loggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.send('{"error": "Not logged in!"}');
  }
};

const cb = (result, res) => {
  console.log(result);
  res.send(result);
};

// testataan toimiiko tietokanta
db.select(connection, (results) => {
  console.log(results);
  console.log(36);

});
const insertToDB = (data, res, next) => {
  db.insert(data, connection, () => {
    console.log(41);
    next();
  });
};

const selectAll = (req, next) => {
  db.select(connection, (results) => {
    req.custom = results;
    next();
  });
};
// tallenna tiedosto
app.post('/upload', upload.single('kuva'), (req, res, next) => {
  console.log(req.file);
  console.log(req.body);
  console.log(58);
  next();
});


// tee thumbnail
app.use('/upload', (req, res, next) => {
  resize.resizeImage(req.file.path, 150, './public/thumbs/' +
      req.file.filename + '_thumb').then(() => {
    next();
  });
});
app.use('/upload', (req, res, next) => {
  resize.resizeImage(req.file.path, 150, './public/prof/' +
      req.file.filename + '_prof').then(() => {
    next();
  });
});

// tallenna tiedot tietokantaan
app.use('/upload', (req, res, next) => {
  console.log(73);
  const data = [
    req.file.filename,
    req.file.mimetype,
    req.file.filename + '_thumb',
    req.file.filename + '_prof',
  ];
  insertToDB(data, res, next);
});


// hae päivitetyt tiedot tietokannasta
app.use('/upload', (req, res, next) => {
  selectAll(req, next);
  selectOne(req, next);
});


// lähetä tiedot selaimeen
app.use('/upload', (req, res) => {
  res.send(req.custom);
});
app.use('/upload', (req, res) => {
  db.select(connection, cb, res);
});

app.get('/images', (req, res) => {
  db.select(connection, cb, res);
});



app.patch('/images', (req, res) => {
  console.log('body', req.body);
  const update = db.update(req.body, connection);
  console.log('update', update);
  res.send('{"status": "OK"}');
});

// login with passport
passport.serializeUser((user, done) => {
  console.log('serialize:', user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(session({
  secret: 'keyboard LOL cat',
  resave: true,
  saveUninitialized: true,
  cookie: {secure: true},
}));

passport.use(new LocalStrategy(
    (username, password, done) => {
      console.log('Here we go: ' + username);
      let res = null;

      const doLogin = (username, password) => {
        return new Promise((resolve, reject) => {
          db.login([username, password], connection, (result) => {
           // bcrypt.compare(password, result[0].p_passu, function(err, result) {
              // res == true
              if (result.length>0) {
                  resolve(result);
              } else {
                reject();
              }
            });
          });
   //     });
      };

      return doLogin(username, password).then((result) => {
        if (result.length < 1) {
          console.log('undone');
          return done(null, false);
        } else {
          console.log('done');
          result[0].p_passu = ''; // remove password from user's data
          return done(null, result[0]); // result[0] is user's data, accessible as req.user
        }
      }).catch(()=>{
        return done(null, false);
      });
    },
));

app.use(passport.initialize());
app.use(passport.session());


app.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) { // if login not happening
      return res.redirect('/login.html');
    }
    req.logIn(user, function(err) {
      // send userID as cookie:
      res.cookie('userID', req.user.uID);
      if (err) {
        return next(err);
      }
      return res.redirect('/front.html'); // if login succesful
    });
  })(req, res, next);
});

app.get('/profiili', (req, res) =>{
  db.profiili(connection,(result)=>{
    const kuvat  = result.map((image)=>{
      return image.p_ID
    });
    console.log('kuvat', kuvat);
    let moi = result.slice(-1)[0];
    res.send([moi]);
    console.log('kuvat', kuvat, result);
  });
});

app.listen(8000);
/*
const index = kuvat[0];
    const vika = kuvat.slice(-1)[0];
    res.send(result[vika]);
    console.log(index, vika)
*/