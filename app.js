require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
// const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/send-it-list-server'

mongoose
  .connect(`${MONGODB_URI}`, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();


//A library that helps us log the requests in the console
app.use(logger('dev'));

const cors = require('cors')
app.use(cors({
  credentials: true, 
  origin: ['http://localhost:3000']
}))

app.use(
  session({
    secret: 'pls-just-work',
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 60 * 60 * 24 * 1000, //60 sec * 60 min * 24hrs = 1 day (in milliseconds)
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      //time to live (in seconds)
      ttl: 60 * 60 * 24,
      autoRemove: 'disabled',
    }),
  })
);

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
//app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';


//register routes
const indexRoutes = require('./routes/index');
app.use('/api', indexRoutes);

const profileRoutes = require('./routes/profile.routes')
app.use('/api', profileRoutes);

const authRoutes = require('./routes/auth.routes');
app.use('/api', authRoutes);

const projectRoutes = require('./routes/project.routes');
app.use('/api', projectRoutes);

const fileUploads = require('./routes/file-upload.routes')
app.use('/api', fileUploads);


module.exports = app;
